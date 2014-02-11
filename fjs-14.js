// JS doesn't implement tail call optimizations
// however a trampoline can be used to avoid exhausting the stack
// ex: http://taylodl.wordpress.com/2013/06/07/functional-javascript-tail-call-optimization-and-trampolines/

// not optimized
// function repeat(operation, num) {
//   if (num <= 0) return;
//   operation();
//   return repeat(operation, --num);
// }

// optimized
function repeat (operation, num) {
  if (num <= 0) return num;
  operation();
  return repeat.bind(undefined, operation, --num);
}
  

// repeatedly call the function until it becomes a value
function trampoline(fn) {
  while (fn && fn instanceof Function) {
    fn = fn.apply(undefined, arguments);
  }
  return fn;
}

module.exports = function(operation, num) {
  return trampoline(repeat.bind(undefined, operation, num));
};