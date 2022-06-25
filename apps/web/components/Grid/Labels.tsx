import { useState } from 'react';
import { useRadarContext } from '../../context/Radar';
import { useSize } from '../../context/Size';
import { useHover } from '../../hooks/useHover';
import { Arc } from './Arc';
import { ArcProps } from './Arc/Arc';

export type HoverQuadrantProps = ArcProps & {};

function HoverQuadrant({ ...arcProps }: HoverQuadrantProps) {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <Arc
      {...arcProps}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      stroke={isHovered ? 'yellow' : 'none'}
      strokeWidth={4}
      fillOpacity={0}
    />
  );
}

export type LabelsProps = Record<string, never>;

export const Labels = (props: LabelsProps) => {
  const { quadrants } = useRadarContext();
  const { radius } = useSize();

  const radiusScale = (i: number, total: number) => Math.sqrt(i / total);

  return (
    <>
      {quadrants.map((quadrant, qIndex) => {
        return (
          <HoverQuadrant
            key={quadrant._id}
            cx={0}
            cy={0}
            r={radius}
            startAngle={(qIndex / quadrants.length) * 2 * Math.PI}
            endAngle={((qIndex + 1) / quadrants.length) * 2 * Math.PI}
            fill={quadrant.color}
          />
        );
      })}
    </>
  );
};
