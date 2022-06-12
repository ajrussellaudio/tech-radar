import { useRadarContext } from '../../context/Radar';
import { useSize } from '../../context/Size';
import { Grid } from '../Grid';

export function Radar() {
  const { blips } = useRadarContext();
  const { width, height } = useSize();

  return (
    <>
      <svg width={width} height={height}>
        <rect fill="papayawhip" width={width} height={height} rx={14} />
        <Grid />
      </svg>
      <ul>
        {blips.map((blip) => (
          <li key={blip._id}>{blip.name}</li>
        ))}
      </ul>
    </>
  );
}
