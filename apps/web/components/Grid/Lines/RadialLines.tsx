import { useRadarContext } from '../../../context/Radar';
import { useSize } from '../../../context/Size';
import styles from './Lines.module.css';

export const RadialLines = () => {
  const { rings } = useRadarContext();
  const { radius } = useSize();

  const radiusScale = (i: number, total: number) => Math.sqrt(i / total);

  return (
    <>
      {rings.map((ring, rIndex) => {
        const r = radius * radiusScale(rIndex + 1, rings.length);
        return <circle key={ring._id} className={styles.line} cx={0} cy={0} r={r} />;
      })}
    </>
  );
};
