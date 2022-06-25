import { useSize } from '../../context/Size';
import { Group } from '../Group';
import { Fill } from './Fill';
import { RadialLines } from './RadialLines';
import { AngledLines } from './AngledLines';

const style = {
  stroke: 'black',
  strokeWidth: 1,
  strokeOpacity: 0.3,
  strokeDasharray: '4,3',
  fill: 'none',
};

export function Grid() {
  const { height, width } = useSize();

  return (
    <Group top={height / 2} left={width / 2}>
      <Fill />
      <RadialLines {...style} />
      <AngledLines {...style} />
    </Group>
  );
}
