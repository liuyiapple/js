## 91/213

## 闭包
    当函数可以记住并访问所在词法作用域，即使函数在当前词法作用域之外执行，这时就产生看闭包

## this
    函数的调用位置会使用当前的上下文来引用函数，函数调用最终的落脚点在哪里，函数内部的this就指向那里

## new 关键字
    1. 创建了一个全新的对象
    2. 这个新对象回被执行原型（__proto__）的链接
    3. 这个新对象回档顶到函数调用的this
    4. 如果函数没有返回其他对象，那么 new 表达式中的函数调用回自动返回这个新对象

## Object 对象
    1. 类型
    string, number, undefined, null, boolean, object
    为什么 null 在 typeof 的时候为 object
    不同的对象在底层的表示为二进制，在javascript 中二进制前三位为0的话会被判断为 object 类型，
    null 的二进制表示 全是 0 ，自然前三位也是0 所以在 typeof 的时候返回的事 "object"

    2. 内置对象
    String, Number, Boolean, Object, Function, Array, Date, RegExp, Error
    




















