// naive implementation
// function reduce (arr, fn, init) {
//     // fn(accum, currentElem, index, array)
//     var accum = init;
//     arr.forEach(function (elem, index) {
//         fn(accum, elem, index, arr);
//     });
//     return accum;
// }

// my recursive implementation
function reduce(arr, fn, init) {
    if (arr.length === 1) {
        return fn(init, arr[0], 0, arr);
    } else {
        return reduce(arr.slice(1), fn, fn(init, arr[0], 0, arr));
    }
}

module.exports = reduce;

// pro solution
// function reduce(arr, fn, initial) {
//     return (function reduceOne(index, value) {
//       if (index > arr.length - 1) return value
//       return reduceOne(index + 1, fn(value, arr[index], index, arr))
//     })(0, initial)
// }

module.exports = reduce