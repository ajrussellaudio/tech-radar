import { useSize } from '../../context/Size';
import { Group } from '../Group';
import { Fill } from './Fill';
import { AngledLines, RadialLines } from './Lines';
import { Labels } from './Labels';

export function Grid() {
  const { height, width } = useSize();

  return (
    <Group top={height / 2} left={width / 2}>
      <Fill />
      <Labels />
      <RadialLines />
      <AngledLines />
    </Group>
  );
}
