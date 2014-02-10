function Spy (target, method) {
    // make sure that Spy is used as a constructor
    // even if it is not called using "new"
    if (!(this instanceof Spy)) {
        return new Spy(target, method);
    }
    
    this.old = target[method];
    this.count = 0;

    var self = this;
    target[method] = function () {
        self.count++;
        return self.old.apply(target, arguments);
    };
}

module.exports = Spy;