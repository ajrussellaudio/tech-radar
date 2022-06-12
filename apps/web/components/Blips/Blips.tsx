import { Group } from '@visx/group';
import { Circle } from '@visx/shape';
import { Text } from '@visx/text';
import { useRadarContext } from '../../context/Radar';
import { useRandom } from '../../context/Random';
import { useSize } from '../../context/Size';
import { cartesian } from '../../util/cartesian';

export function Blips() {
  const { blips, quadrants, rings } = useRadarContext();
  const { height, width, radius } = useSize();
  const { random } = useRandom();

  return (
    <Group top={height / 2} left={width / 2}>
      {blips.map((blip) => {
        const quadrantIndex = quadrants.findIndex((quadrant) => quadrant._id === blip.quadrant._id);
        const ringIndex = rings.findIndex((ring) => ring._id === blip.ring._id);

        const { x, y } = cartesian({
          angle: random(
            (quadrantIndex / quadrants.length) * Math.PI * 2,
            ((quadrantIndex + 1) / quadrants.length) * Math.PI * 2,
          ),
          radius: random((ringIndex / rings.length) * radius, ((ringIndex + 1) / rings.length) * radius),
        });

        return (
          <Group key={blip._id}>
            <Circle cx={x} cy={y} r={radius / 50} />
            <Text x={x + radius / 50} y={y}>
              {blip.name}
            </Text>
          </Group>
        );
      })}
    </Group>
  );
}
