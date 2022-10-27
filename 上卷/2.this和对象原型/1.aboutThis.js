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