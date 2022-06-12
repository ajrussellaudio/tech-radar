import dynamic from 'next/dynamic';
import { useRadarContext } from '../../context/Radar';
import { useSize } from '../../context/Size';
import { Grid } from '../Grid';

const Blips = dynamic<{}>(() => import('../Blips').then((mod) => mod.Blips), { ssr: false });

export function Radar() {
  const { blips } = useRadarContext();
  const { width, height } = useSize();

  return (
    <>
      <svg width={width} height={height}>
        <rect fill="papayawhip" width={width} height={height} rx={14} />
        <Grid />
        <Blips />
      </svg>
      <ul>
        {blips.map((blip) => (
          <li key={blip._id}>{blip.name}</li>
        ))}
      </ul>
    </>
  );
}
