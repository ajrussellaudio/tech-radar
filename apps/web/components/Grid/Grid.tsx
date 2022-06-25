import { useSize } from '../../context/Size';
import { Group } from '../Group';
import { Fill } from './Fill';
import { RadialLines } from './RadialLines';
import { AngledLines } from './AngledLines';
import { Labels } from './Labels';

const style = {
  stroke: '#333',
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
      <Labels />
      <RadialLines {...style} />
      <AngledLines {...style} />
    </Group>
  );
}
