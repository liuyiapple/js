function foo() {
  var a = 3;
  function bar() {
    console.log(a);
  }
  return bar;
}
var baz = foo();
baz();

function foo1() {
    var a = 5;
    function faz() {
        console.log(a)
    }
    bar3(faz)
}
function bar3(fn) {
    fn() // 5
}
foo1()




for (let i = 0; i <=5; i++) {
    setTimeout(function timer() {
        console.log(i)
    },i * 1000)
}


