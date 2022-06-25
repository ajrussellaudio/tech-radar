import { SVGProps } from 'react';

export type ArcProps = SVGProps<SVGPathElement> & {
  cx: number;
  cy: number;
  r: number;
  startAngle: number;
  endAngle: number;
};

function polarToCartesian(centerX: number, centerY: number, radius: number, angleInRadians: number) {
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  var d = ['M', x, y, 'l', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y, 'Z'].join(' ');

  return d;
}

export const Arc = ({ cx, cy, r, startAngle, endAngle, ...svgProps }: ArcProps) => {
  return <path data-testid="arc" d={describeArc(cx, cy, r, startAngle, endAngle)} {...svgProps} />;
};
