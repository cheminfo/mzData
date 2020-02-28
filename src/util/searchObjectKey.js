export function searchObjectKey(object, searchKey) {
  for (let key in object) {
    if (key.match(searchKey)) {
      let result = {};
      result[key.toLowerCase()] = object[key];
      return result;
    } else if (typeof object[key] === 'object' && !Array.isArray(object[key])) {
      let result = searchObjectKey(object[key], searchKey);
      if (result) return result;
    }
  }
}
