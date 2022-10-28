// 使用 new 关键字都做了什么
//1. 创建一个空对象
//2. 将新创建好的对象添加 __proto__指向构造函数的原型对象
//3. 将船舰对象作为this 的上下文
//4. 如果该函数没有返回对象，则返回 this


function foo() {
    console.log(this.a) // undefined
}
var a = 3
foo.call(null)




























