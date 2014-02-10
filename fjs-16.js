function getDependencies (tree, deps) {
  deps = deps || [];
  var subdependencies = tree.dependencies || [];

  Object.keys(subdependencies).forEach(function (elem) {
    var newdep = elem + '@' + subdependencies[elem]['version'];
    if (deps.indexOf(newdep) === -1) deps.push(newdep);
    getDependencies(subdependencies[elem], deps);
  });

  return deps.sort();
}

module.exports = getDependencies;