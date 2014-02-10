function checkUsersValid (goodUsers) {
  return function (testUsers) {
    var res = testUsers.every(function (elem) {
      return goodUsers.some(function (goodElem) {
        return elem.id === goodElem.id;
      });
    });

    return res;
  };
}

module.exports = checkUsersValid;
