function curryN (fn, n) {
    n = n || fn.length;

    function curryRec (fn, argList, count) {
        argList = argList || [];
        if (count >= n) {
            return fn.apply(undefined, argList);
        }
        else {
            return function (arg) {
                var tmpArgList;
                argList.push(arg);
                ++count;
                if (count === n) {
                    tmpArgList = argList.slice(0); // copy by value
                    argList.pop();
                    return curryRec(fn, tmpArgList, count);
                } else {
                    return curryRec(fn, argList, count);
                }
            };
        }
    }
    return curryRec(fn, [], 0);
}

module.exports = curryN;