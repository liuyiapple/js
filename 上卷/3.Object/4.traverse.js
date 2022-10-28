// for... in 循环可以遍历对象可枚举属性列表 包括prototype 链

// forEach 会遍历数组中的所有制 并忽略 回调函数的返回值
// every 会一直运行到回调函数返回 false
// some 会一直隐形到回调函数返回 true
// every 和 some 中特殊的返回值 和 普通for 循环中的 break语句类似 会提前终止遍历


const customObj = {
    a:1,
    b:2,
    c:3
}
const arr = [1,2,3,4]
// for...in 遍历获取到的是对象的key键
for (const key in customObj) {
    console.log(key)
}
for (const value of arr) {
    console.log(value)
}




