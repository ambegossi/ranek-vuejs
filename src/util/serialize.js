export default function serialize(obj) {
  let queryString = '';
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  for (let i = 0; i < keys.length; i += 1) {
    queryString += `&${keys[i]}=${values[i]}`;
  }

  return queryString;
}
