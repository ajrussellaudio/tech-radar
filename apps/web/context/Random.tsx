import { createContext, ReactNode, useContext } from 'react';

type RandomContextType = {
  random: (num1: number, num2?: number) => number;
};

const RandomContext = createContext<RandomContextType | undefined>(undefined);

export function RandomProvider({ children }: { children: ReactNode }) {
  let seed = 138;

  function rng() {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }

  function random(num1: number, num2 = 0) {
    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);
    return min + rng() * (max - min);
  }

  return <RandomContext.Provider value={{ random }}>{children}</RandomContext.Provider>;
}

export function useRandom() {
  const context = useContext(RandomContext);

  if (!context) {
    throw new Error('useRandom must be used within a RandomProvider');
  }

  return context;
}
