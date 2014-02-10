module.exports = function logger(namespace) {
    return function namespacedLogger() {
        var args = Array.prototype.slice.call(arguments); // tranforms an array-like object to an array
        var argsString = args.join(' ');
        console.log(namespace + ' ' + argsString);
    }
}