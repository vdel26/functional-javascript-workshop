module.exports = function countWords (inputWords) {
  return inputWords.reduce(function (prev, elem, index, array) {
    var current = elem.toString();
    prev[current] === undefined ? prev[current] = 1 : prev[current] += 1;
    return prev;
  }, {});
};
