import { useRadarContext } from '../../context/Radar';
import { useSize } from '../../context/Size';
import { rgba } from 'polished';
import { Arc } from '../Arc';
import { cartesian } from '../../util/cartesian';
import { Fragment } from 'react';
import { Group } from '../Group';

export type GridProps = Record<string, never>;

const style = {
  stroke: 'black',
  strokeWidth: 1,
  strokeOpacity: 0.3,
  strokeDasharray: '4,3',
  fill: 'none',
};

const radiusScale = (i: number, total: number) => Math.sqrt(i / total);

export function Grid() {
  const { quadrants, rings } = useRadarContext();
  const { height, width, radius } = useSize();

  return (
    <Group top={height / 2} left={width / 2}>
      {quadrants.map((quadrant, qIndex) => {
        return (
          <Fragment key={quadrant._id}>
            {rings.map((ring, rIndex) => {
              const r = radius * radiusScale(rings.length - rIndex, rings.length);
              const fill = rgba(quadrant.color, 0.075);
              return (
                <Arc
                  key={ring._id}
                  cx={0}
                  cy={0}
                  r={r}
                  startAngle={(qIndex / quadrants.length) * 2 * Math.PI}
                  endAngle={((qIndex + 1) / quadrants.length) * 2 * Math.PI}
                  stroke="none"
                  fill={fill}
                />
              );
            })}
          </Fragment>
        );
      })}

      {rings.map((ring, rIndex) => {
        const r = radius * radiusScale(rIndex + 1, rings.length);
        return <circle key={ring._id} cx={0} cy={0} r={r} {...style} />;
      })}

      {quadrants.map((quadrant, i) => {
        const { x, y } = cartesian({
          radius,
          angle: (i / quadrants.length) * 2 * Math.PI,
        });
        return <line key={quadrant._id} x1={0} y1={0} x2={x} y2={y} {...style} />;
      })}
    </Group>
  );
}
