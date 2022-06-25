import { SVGProps } from 'react';
import { cartesian } from '../../util/cartesian';

export type StarProps = SVGProps<SVGPolygonElement> & {
  cx: number;
  cy: number;
  r: number;
  numPoints?: number;
};

export const Star = ({ cx, cy, r, numPoints = 5, ...svgProps }: StarProps) => {
  let pointsList: number[][] = [];

  const rotate = -Math.PI / 2;

  for (let i = 0; i < numPoints; i++) {
    const outer = cartesian({
      radius: r * 1.333,
      angle: (i / numPoints) * 2 * Math.PI + rotate,
    });
    const inner = cartesian({
      radius: r * 0.666,
      angle: (i / numPoints + 1 / numPoints / 2) * 2 * Math.PI + rotate,
    });
    pointsList.push([outer.x, outer.y], [inner.x, inner.y]);
  }

  return (
    <polygon
      points={pointsList.map((point) => point.join(',')).join(' ')}
      {...svgProps}
      transform={`translate(${cx}, ${cy})`}
    />
  );
};
