type Sector = {
  _id: string;
  name: string;
};

type Blip = {
  _id: string;
  name: string;
  ring: Sector;
  quadrant: Sector;
  isNew: boolean;
};
