let arr = [5,6,9,474,415,141,52,123,13]
// 冒泡排序
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        let temp = null;
        if(arr[i] > arr[j]) {
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}

// 数组求和
let sumArr = arr.reduce((item,sum) => {
  return  sum + item
},0)

let sumArr1 = arr.reduce((item,sum) => sum + item , 0)

console.log(sumArr)
console.log(sumArr1)

console.log(arr)