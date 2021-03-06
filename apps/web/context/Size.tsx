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
  xMax: number;
  yMax: number;
  radius: number;
};

const SizeContext = createContext<SizeContextType | undefined>(undefined);

export function SizeProvider({ children }: { children: ReactNode }) {
  const edge = 700;
  const margin = 10;
  const sizes = {
    width: edge,
    height: edge,
    margin: {
      top: margin,
      bottom: margin,
      left: margin,
      right: margin,
    },
  };

  const xMax = sizes.width - sizes.margin.left - sizes.margin.right;
  const yMax = sizes.height - sizes.margin.top - sizes.margin.bottom;
  const radius = Math.min(xMax, yMax) / 2;

  return <SizeContext.Provider value={{ ...sizes, xMax, yMax, radius }}>{children}</SizeContext.Provider>;
}

export function useSize() {
  const context = useContext(SizeContext);

  if (!context) {
    throw new Error('useSize must be used within a SizeProvider');
  }

  return context;
}
