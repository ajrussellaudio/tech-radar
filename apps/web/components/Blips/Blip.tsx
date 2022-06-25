import { useState } from 'react';
import { Star } from './Star';

export type BlipProps = {
  x: number;
  y: number;
  radius: number;
  title: string;
  color: string;
  isNew: boolean;
};

export function Blip({ x, y, radius, title, color, isNew }: BlipProps) {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  const style = {
    fill: color,
    stroke: 'white',
    strokeWidth: 2,
  };

  const Shape = isNew ? Star : 'circle';

  return (
    <g>
      <Shape cx={x} cy={y} r={radius} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} {...style} />
      {isHovered && (
        <text x={x + radius} y={y}>
          {title}
        </text>
      )}
    </g>
  );
}
