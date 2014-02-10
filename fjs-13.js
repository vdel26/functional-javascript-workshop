// function repeat(operation, num) {
//   // modify this so it can be interrupted
//   if (num <= 0) return;
//   operation();
//   return repeat(operation, --num);
// }

function repeat(operation, num) {
  if (num <= 0) return;
  operation();
  // using setTimeout 0 puts the callback js at
  // the end of the execution queue, letting other
  // code the opportunity to execute first
  // -> similar to yield
  setTimeout(function () {
      return repeat(operation, --num);
  }, 0);
}

module.exports = repeat;