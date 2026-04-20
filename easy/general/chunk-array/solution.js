/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const res = [];

  function helper(index) {
    if (index >= arr.length) return;

    res.push(arr.slice(index, index + size));
    helper(index + size);
  }

  helper(0);
  return res;
};
