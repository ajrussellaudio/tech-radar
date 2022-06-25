import { Star } from './Star';
import styles from './Blip.module.css';
import { Group } from '../Group';

export type BlipProps = {
  x: number;
  y: number;
  radius: number;
  title: string;
  color: string;
  isNew: boolean;
};

export function Blip({ x, y, radius, title, color, isNew }: BlipProps) {
  const style = {
    fill: color,
    stroke: 'white',
    strokeWidth: 2,
  };

  const Shape = isNew ? Star : 'circle';

  return (
    <Group top={y} left={x}>
      <Shape className={styles.shape} cx={0} cy={0} r={radius} {...style} />
      <text className={styles.text} x={0} y={0} textAnchor="middle" dominantBaseline="middle">
        {title}
      </text>
    </Group>
  );
}
