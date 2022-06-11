import { createContext, ReactNode, useContext } from 'react';

type RadarContextType = {
  blips: Blip[];
  quadrants: Sector[];
  rings: Sector[];
};

const RadarContext = createContext<RadarContextType | undefined>(undefined);

export function RadarContextProvider({ children, value }: { value: RadarContextType; children: ReactNode }) {
  return (
    <RadarContext.Provider value={value}>
      {children} <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(value, null, 2)}</pre>
    </RadarContext.Provider>
  );
}

export function useRadarContext() {
  const context = useContext(RadarContext);

  if (context === undefined) {
    throw new Error('useRadarContext must be used within a RadarContextProvider');
  }

  return context;
}
