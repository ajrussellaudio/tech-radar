const query = `*[_type == "blips"]{
  _id, name, description, isNew,
  quadrant->{ _id, name, "color": color.hex },
  ring->{ _id, name, order },
}`;

export default query;
