import { useRadarContext } from '../../context/Radar';
import { useRandom } from '../../context/Random';
import { useSize } from '../../context/Size';
import { cartesian } from '../../util/cartesian';
import { Group } from '../Group';
import { Blip } from './Blip';

export function Blips() {
  const { blips, quadrants, rings } = useRadarContext();
  const { height, width, radius } = useSize();
  const { random } = useRandom();

  const scale = 1 / 30;

  function randomInSector(blipQuadrant: Sector) {
    const TWO_PI = Math.PI * 2;
    const padding = TWO_PI * scale;
    const index = quadrants.findIndex((quadrant) => quadrant._id === blipQuadrant._id);
    const bound = (index: number) => {
      return (index / quadrants.length) * TWO_PI;
    };
    const lowerBound = bound(index) + padding;
    const upperBound = bound(index + 1) - padding;
    return random(lowerBound, upperBound);
  }

  function randomInRing(blipRing: Sector) {
    const padding = radius * scale;
    const index = rings.findIndex((ring) => ring._id === blipRing._id);
    const bound = (index: number) => {
      return Math.sqrt(index / rings.length) * radius;
    };
    const lowerBound = bound(index) + padding;
    const upperBound = bound(index + 1) - padding;
    return random(lowerBound, upperBound);
  }

  return (
    <Group top={height / 2} left={width / 2}>
      {blips.map((blip) => {
        const { x, y } = cartesian({
          angle: randomInSector(blip.quadrant),
          radius: randomInRing(blip.ring),
        });

        return (
          <Blip key={blip._id} x={x} y={y} radius={radius * scale} title={blip.name} color={blip.quadrant.color} />
        );
      })}
    </Group>
  );
}
