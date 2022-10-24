/**
 * 词法作用域来管理引擎如何在当前作用域一级嵌套的子作用域中
 * 根据标识名称进行变量查找
 **/

function foo(a) {
  var b = a * 2;
  function bar(c) {
    console.log(a, b, c);
  }
  bar(b * 3);
}
foo(2);

// 欺骗词法 eval()
function fooTwo(str, a) {
  "use strict";
  eval(str); // 欺骗
  console.log(a, b);
}
var b = 2;

fooTwo("var b = 3", 1);

// with
// 通常被当作重复引用同一个对象中的多个属性的快捷方式，不需要重复引用对象本身
var obj = {
  a: 1,
  b: 2,
  c: 3,
};
obj.a = 2;
obj.b = 3;
obj.c = 4;
console.log(obj); // { a: 2, b: 3, c: 4 }
with (obj) {
  a = 10;
  b = 10;
  c = 10;
}
console.log(obj); // { a: 10, b: 10, c: 10 }

function doo(obj) {
    with(obj) {
        a = 2 // 把a = 2 挂在全局对象上
    }
}
var o1 = {
    a: 3
}
var o2 = {
    b : 3
}

foo(o1)
console.log(o1.a) 
foo(o2)
console.log(o2.a) //  undefined
console.log(a)

