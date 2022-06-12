import { createContext, ReactNode, useContext } from 'react';

type SizeContextType = {
  width: number;
  height: number;
  margin: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
};

const SizeContext = createContext<SizeContextType | undefined>(undefined);

export function SizeProvider({ children }: { children: ReactNode }) {
  const defaultSizes = {
    width: 500,
    height: 500,
    margin: {
      top: 20,
      bottom: 20,
      left: 20,
      right: 20,
    },
  };
  return <SizeContext.Provider value={defaultSizes}>{children}</SizeContext.Provider>;
}

export function useSize() {
  const context = useContext(SizeContext);

  if (!context) {
    throw new Error('useSize must be used within a SizeProvider');
  }

  return context;
}
