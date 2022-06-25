import { rgba } from 'polished';
import { Fragment } from 'react';
import { useRadarContext } from '../../context/Radar';
import { useSize } from '../../context/Size';
import { Arc } from './Arc';

export const Fill = () => {
  const { quadrants, rings } = useRadarContext();
  const { radius } = useSize();

  const radiusScale = (i: number, total: number) => Math.sqrt(i / total);

  return (
    <>
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
    </>
  );
};
