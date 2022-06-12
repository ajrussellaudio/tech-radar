import { cartesian } from './cartesian';

const PRECISION = 13;

describe('cartesian', () => {
  it('places an angle of 0 on the x-axis', () => {
    const { x, y } = cartesian({ angle: 0, radius: 100 });
    expect(x).toBeCloseTo(100, PRECISION);
    expect(y).toBeCloseTo(0, PRECISION);
  });

  it('places an angle of PI/2 on the y-axis', () => {
    const { x, y } = cartesian({ angle: Math.PI / 2, radius: 100 });
    expect(x).toBeCloseTo(0, PRECISION);
    expect(y).toBeCloseTo(100, PRECISION);
  });

  it('places an angle of PI in the negative range of the x-axis', () => {
    const { x, y } = cartesian({ angle: Math.PI, radius: 100 });
    expect(x).toBeCloseTo(-100, PRECISION);
    expect(y).toBeCloseTo(0, PRECISION);
  });

  it('places an angle of 3*PI/2 in the negative range of the y-axis', () => {
    const { x, y } = cartesian({ angle: (3 * Math.PI) / 2, radius: 100 });
    expect(x).toBeCloseTo(0, PRECISION);
    expect(y).toBeCloseTo(-100, PRECISION);
  });

  it('places an angle of 2*PI on the x-axis', () => {
    const { x, y } = cartesian({ angle: 2 * Math.PI, radius: 100 });
    expect(x).toBeCloseTo(100, PRECISION);
    expect(y).toBeCloseTo(0, PRECISION);
  });

  it('places a 45deg angle equidistant to both axes', () => {
    const { x, y } = cartesian({ angle: Math.PI / 4, radius: 100 });
    expect(x).toBeCloseTo(y, PRECISION);
  });
});
