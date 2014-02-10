// 'this' inside Function.call is the function that is executed
// so this expression will return a Array.prototype.slice function
// that accepts a given array as a first parameter

module.exports = Function.call.bind(Array.prototype.slice);