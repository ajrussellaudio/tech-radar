const query = `*[_type == "blips"]{
  _id, name, description, isNew,
  quadrant->,
  ring->,
}`;

export default query;
