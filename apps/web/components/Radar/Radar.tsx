import dynamic from 'next/dynamic';
import { useSize } from '../../context/Size';
import { Grid } from '../Grid';

const Blips = dynamic<{}>(() => import('../Blips').then((mod) => mod.Blips), { ssr: false });

export function Radar() {
  const { width, height } = useSize();

  return (
    <>
      <svg width={width} height={height}>
        <Grid />
        <Blips />
      </svg>
    </>
  );
}
