// this point there
// 1. 默认绑定
var a = 2

function foo() {
    console.log(this.a)
}

(function () {
    "use strict"
    foo()
})()


function bar() {
    console.log(this.a)
}
let obj = {
    a:2,
    bar:bar
}
obj.bar()


// 



















