const query = `*[_type == "ring"] | order(order asc) {
  _id, name
}`;

export default query;
