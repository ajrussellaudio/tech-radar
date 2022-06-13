import { scaleBand } from '@visx/scale';
import { GridAngle, GridRadial } from '@visx/grid';
import { Group } from '@visx/group';
import { useRadarContext } from '../../context/Radar';
import { useSize } from '../../context/Size';
import { Circle } from '@visx/shape';

export type GridProps = Record<string, never>;

const style = {
  stroke: 'black',
  strokeWidth: 1,
  strokeOpacity: 0.3,
  strokeDasharray: '4,3',
  fill: 'none',
};

export function Grid() {
  const { quadrants, rings } = useRadarContext();
  const { height, width, radius, yMax } = useSize();

  const quadrantScale = scaleBand({
    domain: quadrants.map((quadrant) => quadrant.name),
    range: [0, Math.PI * 2],
  });

  return (
    <Group top={height / 2} left={width / 2}>
      <GridAngle outerRadius={radius} scale={quadrantScale} {...style} />
      {rings.map((ring, i) => {
        const r = radius * Math.sqrt((i + 1) / rings.length);
        return <Circle key={ring._id} cx={0} cy={0} r={r} {...style} />;
      })}
    </Group>
  );
}
