import { useRadarContext } from '../../context/Radar';
import { Axes } from './Axes';
import { Rings } from './Rings';

export function Radar() {
  const { blips } = useRadarContext();

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

  return (
    <>
      <svg width={sizes.width} height={sizes.height}>
        <rect fill="papayawhip" width={sizes.width} height={sizes.height} rx={14} />
        <Axes {...sizes} radius={radius} />
        <Rings {...sizes} radius={radius} />
        {blips.map((blip) => (
          <circle key={blip._id} />
        ))}
      </svg>
      <ul>
        {blips.map((blip) => (
          <li key={blip._id}>{blip.name}</li>
        ))}
      </ul>
    </>
  );
}
