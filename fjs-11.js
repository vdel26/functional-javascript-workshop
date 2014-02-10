// has to return an array
// use recursion to apply reduce over each item in the original array
module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function (prevAccum, currentElem, index, array) {
        prevAccum.push(fn(currentElem));
        return prevAccum;
        // alternative:
        // return prevAccum.concat(fn(currentElem));
    }, []);
};