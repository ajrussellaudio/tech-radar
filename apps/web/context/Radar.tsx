import { createContext, ReactNode, useContext } from 'react';

type RadarContextType = {
  blips: Blip[];
  quadrants: Quadrant[];
  rings: Sector[];
};

const RadarContext = createContext<RadarContextType | undefined>(undefined);

export function RadarContextProvider({ children, value }: { value: RadarContextType; children: ReactNode }) {
  return <RadarContext.Provider value={value}>{children}</RadarContext.Provider>;
}

export function useRadarContext() {
  const context = useContext(RadarContext);

  if (context === undefined) {
    throw new Error('useRadarContext must be used within a RadarContextProvider');
  }

  return context;
}
