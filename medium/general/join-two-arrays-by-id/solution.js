/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const map = new Map();

  function insert(arr, i) {
    if (i === arr.length) return;

    const obj = arr[i];

    if (map.has(obj.id)) {
      map.set(obj.id, { ...map.get(obj.id), ...obj });
    } else {
      map.set(obj.id, obj);
    }

    insert(arr, i + 1);
  }

  insert(arr1, 0);
  insert(arr2, 0);

  return [...map.values()].sort((a, b) => a.id - b.id);
};
