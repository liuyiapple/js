/**
 * @params LHS 查询
 *
 *  LHS 查询 可以理解成为一个 赋值操作 var a = 1
 *
 *
 * @params RHS 查询
 *
 *  RHS 查询 可以理解成寻找当前变量的值是否存在或者去取当前变量的值 console.log(a)
 */
import Day from "./Day";
function foo(a) {
  // a = 2 LHS

  console.log(a); // 这里a取源 属于RHS
}

foo(1); // RHS

// 作用域嵌套
function fooTwo(a) {
  console.log(a + b);
}
var b = 2;
fooTwo(2);


// 异常 
function fooThree(a) {
    console.log(a + b)
    b = a
}

fooThree(2)