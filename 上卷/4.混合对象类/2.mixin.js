// 手动显示 混入
function mixin(sourceObj, targetObj) {
    for (const key in sourceObj) {
        if (!(key in targetObj)) {
            targetObj[key] = sourceObj[key]
        }
    }
    return targetObj
}

var Vehicle = {
    engines: 1,
    igintion: function () {
        console.log("igintion 方法")
    },
    drive: function () {
        this.igintion()
        console.log("steering add moving forword")
    }
}


var Car = mixin(Vehicle, {
    wheels: 4,
    drive: function () {
        console.log("Rolling on all" + this.wheels + "wheels")
    }
})
console.log(Car.engines, "Car.engines from Vehicle.engines")