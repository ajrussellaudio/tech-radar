import { GridAngle, GridRadial } from '@visx/grid';
import { scaleBand } from '@visx/scale';
import { Group } from '@visx/group';
import { useRadarContext } from '../../context/Radar';

export function Radar() {
  const { blips, quadrants, rings } = useRadarContext();

  const sizes = {
    width: 500,
    height: 500,
    margin: {
      top: 20,
      bottom: 20,
      left: 20,
      right: 20,
    },
  };

  const xMax = sizes.width - sizes.margin.left - sizes.margin.right;
  const yMax = sizes.height - sizes.margin.top - sizes.margin.bottom;
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
      <svg width={sizes.width} height={sizes.height}>
        <rect fill="papayawhip" width={sizes.width} height={sizes.height} rx={14} />
        <Group top={sizes.height / 2} left={sizes.width / 2}>
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
