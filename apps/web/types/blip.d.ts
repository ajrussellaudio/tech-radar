type Sector = {
  _id: string;
  name: string;
};

type Quadrant = Sector & {
  color: string;
};

type Blip = {
  _id: string;
  name: string;
  ring: Sector;
  quadrant: Quadrant;
  isNew: boolean;
};
