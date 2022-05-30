import { toSegments } from './toSegments';

const defaultBlip: Blip = {
  _id: '123',
  isNew: false,
  name: 'jQuery',
  quadrant: {
    _id: 'quad1',
    name: 'Languages',
  },
  ring: {
    _id: 'ring1',
    name: 'Adopt',
  },
};

describe('toSegments', () => {
  it('returns an empty segmented object for no blips', () => {
    expect(toSegments([])).toEqual({});
  });

  it('puts a blip in the correct segment', () => {
    const blip: Blip = {
      ...defaultBlip,
      quadrant: {
        _id: 'quad1',
        name: 'Languages',
      },
      ring: {
        _id: 'ring1',
        name: 'Adopt',
      },
    };
    expect(toSegments([blip])).toEqual({
      quad1: {
        ring1: [blip],
      },
    });
  });

  it('puts two blips in different rings of the same quadrant', () => {
    const blip1: Blip = {
      ...defaultBlip,
      quadrant: {
        _id: 'quad1',
        name: 'Languages',
      },
      ring: {
        _id: 'ring1',
        name: 'Adopt',
      },
    };
    const blip2: Blip = {
      ...blip1,
      ring: {
        _id: 'ring2',
        name: 'Assess',
      },
    };
    expect(toSegments([blip1, blip2])).toEqual({
      quad1: {
        ring1: [blip1],
        ring2: [blip2],
      },
    });
  });

  it('puts two blips of the same ring but different quadrants in the correct segments', () => {
    const blip1: Blip = {
      ...defaultBlip,
      quadrant: {
        _id: 'quad1',
        name: 'Languages',
      },
      ring: {
        _id: 'ring1',
        name: 'Adopt',
      },
    };
    const blip2: Blip = {
      ...blip1,
      quadrant: {
        _id: 'quad2',
        name: 'Tools',
      },
    };
    expect(toSegments([blip1, blip2])).toEqual({
      quad1: {
        ring1: [blip1],
      },
      quad2: {
        ring1: [blip2],
      },
    });
  });
});
