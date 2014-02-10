function loadUsers (userIds, load, done) {
  var completed = 0;
  userIds.forEach(function (elem, ix, array) {
    load(elem, function (userObj) {
      userIds[ix] = userObj;
      completed++;
      if (completed === userIds.length)
        return done(userIds);
    });
  });
}

module.exports = loadUsers;

// NOTES:
// userIds can be reused as returned array
// since the array used by forEach is freezed
// until the end of the whole traversal