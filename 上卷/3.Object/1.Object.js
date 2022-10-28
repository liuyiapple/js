var strPrimitive = "i am string";
console.log(typeof  strPrimitive) // string
console.log(strPrimitive instanceof String) // false


var strObject = new String("i am string");
console.log(typeof strObject) // object
console.log(strObject instanceof String) // true


console.log(Object.prototype.toString.call(strObject)) // [object, string]
console.log(Object.prototype.toString.call(strPrimitive))// [object, string]
