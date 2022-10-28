/**
    数组也是对象，仍然可以为数组添加属性
*/

var myArray = ["foo",42,"bar"]
myArray.baz = "baz"
console.log(myArray.length)
console.log(myArray.baz)
console.log(myArray) // [ 'foo', 42, 'bar', baz: 'baz' ]
