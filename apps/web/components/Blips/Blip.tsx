import { useState } from 'react';

export type BlipProps = {
  x: number;
  y: number;
  radius: number;
  title: string;
  color: string;
};

export function Blip({ x, y, radius, title, color }: BlipProps) {
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  function showTitle() {
    setIsTitleVisible(true);
  }

  function hideTitle() {
    setIsTitleVisible(false);
  }

  return (
    <g>
      <circle cx={x} cy={y} r={radius} onMouseEnter={showTitle} onMouseLeave={hideTitle} fill={color} />
      {isTitleVisible && (
        <text x={x + radius} y={y}>
          {title}
        </text>
      )}
    </g>
  );
}
