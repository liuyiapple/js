// BAD
function doOne(a) {
  b = a + doElse(a * 2);
  console.log(b * 3);
}

function doElse(a) {
  return a - 1;
}
doOne(2);


// GOOD
function doOut(a) {
    function doIn (a) {
        return a - 1
    }
    var b;
    b = a + doIn(a  * 2)
    console.log(b * 3)
}
doOut(2)

// var a = 2
// (function(global){
//     var a = 2
//     console.log(a)
//     console.log(global.a)
// } )(window)

// for 循环中的 i 是一个定义在全局的变量
for(var i = 0; i < 10; i ++) {
  console.log(i)
}
console.log(i + "10")
function bar() {
  console.log("这是bar 里面 的作用域" + i)
}
bar()

var fooText = true

function something () {
  console.log("something function")
} 



if(fooText) {
  let bar1 = fooText * 2
  bar = something(bar1)
  console.log(bar1)
}
console.log(bar1)


