//class CollGuy {
//    specialTrick = nothing
//    CollGuy(trick) {
//        specialTrick = trick
//    }
//    showOff() {
//        output("this is my strickid" + specialTrick)
//    }
//}

// 类的 继承 会继承父类的方法
// class 声明的类是基于原型继承的

class Car {
    goWay() {
        console.log("go Way")
    }

    constructor() {
        this.a = 888
    }
}

const car = new Car()
car.goWay()

class BenChi extends Car {
   goWay() {
       super.goWay();
   }
}

const ben = new BenChi()
ben.goWay()
console.log(ben.a)









































