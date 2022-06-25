import { SVGProps } from 'react';
import { useRadarContext } from '../../context/Radar';
import { useSize } from '../../context/Size';

export type RadialLinesProps = SVGProps<SVGCircleElement>;

export const RadialLines = ({ ...svgProps }: RadialLinesProps) => {
  const { rings } = useRadarContext();
  const { radius } = useSize();

  const radiusScale = (i: number, total: number) => Math.sqrt(i / total);

  return (
    <>
      {rings.map((ring, rIndex) => {
        const r = radius * radiusScale(rIndex + 1, rings.length);
        return <circle key={ring._id} cx={0} cy={0} r={r} {...svgProps} />;
      })}
    </>
  );
};
