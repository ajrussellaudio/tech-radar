const query = `*[_type == "quadrant"]{
  _id, name, "color": color.hex
}`;

export default query;
