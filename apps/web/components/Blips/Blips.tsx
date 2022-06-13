import { Group } from '@visx/group';
import { useRadarContext } from '../../context/Radar';
import { useRandom } from '../../context/Random';
import { useSize } from '../../context/Size';
import { cartesian } from '../../util/cartesian';
import { Blip } from './Blip';

export function Blips() {
  const { blips, quadrants, rings } = useRadarContext();
  const { height, width, radius } = useSize();
  const { random } = useRandom();

  function randomInSector(blipSector: Sector, sectors: Sector[], scaling: number) {
    const padding = scaling / 20;
    const index = sectors.findIndex((sector) => sector._id === blipSector._id);
    return random(padding + (index / sectors.length) * scaling, ((index + 1) / sectors.length) * scaling - padding);
  }

  return (
    <Group top={height / 2} left={width / 2}>
      {blips.map((blip) => {
        const { x, y } = cartesian({
          angle: randomInSector(blip.quadrant, quadrants, Math.PI * 2),
          radius: randomInSector(blip.ring, rings, radius),
        });

        return <Blip key={blip._id} x={x} y={y} radius={radius / 50} title={blip.name} />;
      })}
    </Group>
  );
}
