import { ReactNode } from 'react';

export type GroupProps = {
  top?: number;
  left?: number;
  children: ReactNode;
};

export const Group = ({ top = 0, left = 0, children }: GroupProps) => {
  return <g transform={`translate(${left}, ${top})`}>{children}</g>;
};
