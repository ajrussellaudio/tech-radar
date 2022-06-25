import { useRadarContext } from '../../../context/Radar';
import { useSize } from '../../../context/Size';
import { cartesian } from '../../../util/cartesian';
import styles from './Lines.module.css';

export const AngledLines = () => {
  const { quadrants } = useRadarContext();
  const { radius } = useSize();

  return (
    <>
      {quadrants.map((quadrant, i) => {
        const { x, y } = cartesian({
          radius,
          angle: (i / quadrants.length) * 2 * Math.PI,
        });
        return <line key={quadrant._id} className={styles.line} x1={0} y1={0} x2={x} y2={y} />;
      })}
    </>
  );
};
