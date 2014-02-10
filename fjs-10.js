module.exports = function logger(namespace) {
    return console.log.bind(undefined, namespace);
};