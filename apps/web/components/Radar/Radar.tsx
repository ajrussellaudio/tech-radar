import { GridAngle, GridRadial } from '@visx/grid';
import { scaleBand } from '@visx/scale';
import { Group } from '@visx/group';
import { useRadarContext } from '../../context/Radar';
import { useSize } from '../../context/Size';

export function Radar() {
  const { blips, quadrants, rings } = useRadarContext();
  const { width, height, margin } = useSize();

  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;
  const radius = Math.min(xMax, yMax) / 2;

  const quadrantScale = scaleBand({
    domain: quadrants.map((quadrant) => quadrant.name),
    range: [0, Math.PI * 2],
  });
  const ringScale = scaleBand({
    domain: rings.map((ring) => ring.name),
    range: [0, yMax / 2],
  });

  return (
    <>
      <svg width={width} height={height}>
        <rect fill="papayawhip" width={width} height={height} rx={14} />
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
      </svg>
      <ul>
        {blips.map((blip) => (
          <li key={blip._id}>{blip.name}</li>
        ))}
      </ul>
    </>
  );
}
