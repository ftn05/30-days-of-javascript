/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  const result = {};

  for (const item of this) {
    const key = fn(item);

    if (!(key in result)) {
      result[key] = [];
    }

    result[key].push(item);
  }

  return result;
};
