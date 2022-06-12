import { scaleBand } from '@visx/scale';
import { GridAngle, GridRadial } from '@visx/grid';
import { Group } from '@visx/group';
import { useRadarContext } from '../../context/Radar';
import { useSize } from '../../context/Size';

export type GridProps = Record<string, never>;

export function Grid() {
  const { quadrants, rings } = useRadarContext();
  const { height, width, radius, yMax } = useSize();

  const quadrantScale = scaleBand({
    domain: quadrants.map((quadrant) => quadrant.name),
    range: [0, Math.PI * 2],
  });
  const ringScale = scaleBand({
    domain: rings.map((ring) => ring.name),
    range: [0, yMax / 2],
  });

  return (
    <Group top={height / 2} left={width / 2}>
      <GridAngle outerRadius={radius} scale={quadrantScale} stroke="black" strokeWidth={1} strokeOpacity={0.3} />
      <GridRadial
        scale={ringScale}
        data={rings}
        stroke="black"
        strokeWidth={1}
        strokeOpacity={0.3}
        strokeDasharray="5,2"
      />
      <circle
        cx={0}
        cy={0}
        r={radius}
        stroke="black"
        strokeWidth={1}
        strokeOpacity={0.3}
        strokeDasharray="5,2"
        fill="none"
      />
    </Group>
  );
}
