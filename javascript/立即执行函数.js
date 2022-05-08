(function () {
  var x = foo;

  var foo = function foo() {
    return 'foobar';
  };
  return x;
})();
// let a = foo();
// let foo = function () {
//   console.log('hello');
// };
