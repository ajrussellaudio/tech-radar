import { useRadarContext } from '../../../context/Radar';
import { useSize } from '../../../context/Size';
import { Arc } from '../Arc';
import styles from './Labels.module.css';

export type LabelsProps = Record<string, never>;

export const Labels = (props: LabelsProps) => {
  const { quadrants } = useRadarContext();
  const { radius } = useSize();

  const radiusScale = (i: number, total: number) => Math.sqrt(i / total);

  return (
    <>
      {quadrants.map((quadrant, qIndex) => {
        return (
          <Arc
            className={styles.quadrant}
            key={quadrant._id}
            cx={0}
            cy={0}
            r={radius}
            startAngle={(qIndex / quadrants.length) * 2 * Math.PI}
            endAngle={((qIndex + 1) / quadrants.length) * 2 * Math.PI}
            fill={quadrant.color}
          />
        );
      })}
    </>
  );
};
