// 属性描述符
var myObject = {
    a: 2
}
//{ value: 2, writable: true, enumerable: true, configurable: true }
// writable 可写的 enumerable 可枚举的  configurable 可配置的
console.log(Object.getOwnPropertyDescriptor(myObject, "a"))


var obj = {}
Object.defineProperty(obj, "a", {
    value: 10,
    writable: true,
    enumerable: true,
    configurable: true
})
console.log(obj)

// writable 决定是否可以修改属性的值
// configurable 会禁止删除这个属性
// Enumerable 描述属性是否会出现在对象的属性枚举中，比如 for...in

// Getter 和 Setter


// 操作符中的 _a_ 只仅仅是将 2 存储到了另一个变量 _a_ 中 ，_a_ 没有特殊的行为，和普通属性一样
let customObj = {
    get a() {
        return this._a_
    },
    set a(val) {
        this._a_ = val * 2
    }
}
customObj.a = 10
console.log(customObj.a) // 20


// 属性的存在性
var existenceObj = {
    a: 100
}
// in 操作符 会检查属性是否存在对象 机器 原型链中
console.log("a" in existenceObj) // true
console.log(Object.hasOwnProperty.call(existenceObj,"c")) // false

// Object.key() 将回返回一个当前对象可枚举的属性的数组


















































