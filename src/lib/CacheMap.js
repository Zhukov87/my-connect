import isEqual from "lodash/isEqual";

export default class CacheMap {
  cache = []; //[{obj: {a: 1}, value: 4}, ]
  get = obj => {
    return this.cache.find(elem => isEqual(elem.obj, obj)).value;
  };
  set = (obj, value) => {
    if (this.has(obj)) return;
    this.cache.push({ obj, value });
  };
  has = obj => {
    return !!this.cache.find(elem => isEqual(elem.obj, obj));
  };
}
