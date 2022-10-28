function identify() {
    return this.name.toUpperCase()
}

function speak() {
    var greeting = "Hello,I'm" + identify.call(this)
    console.log(greeting);
}
var me = {
    name: "Kyle"
}
var you = {
    name: "Reader"
}


console.log(identify.call(me)); // Kyle
console.log(identify.call(you));// Reader

speak.call(me) // Hello,I'mKYLE
speak.call(you) // Hello,I'mREADER


function fooCount(num) {
    console.log(num)
    fooCount.count ++
}
fooCount.count = 0
var i ;
for ( i = 0;i < 10; i++) {
    if(i > 5) {
        fooCount(i)
    }
}
// 这里 fooCount 只被调用了一次
console.log(fooCount.count)