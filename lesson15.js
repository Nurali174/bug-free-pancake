// ebat 15 urok ya v ahuye
// а мы все еще чайники
//  кто газ пустил пиздец воняет 
// времени не хватает ееееее+++++++++++


// const rectangle = {
//     width: 10,
//     length: 15,
//     findP: function () {
//         return (this.width + this.length) * 2
//     }
// }

// console.log(rectangle.findP())





// function sub1 (a = 0, b = 0) {
// return a - b
// }

// console.log(sub1 (10,10)) // declaration function



// const sub2 = function (a = 0, b = 0) {
//         return a - b
// }
//  console.log(sub2(50,20)) // function exspression






// const  sum1 = (a = 0, b = 0) => {
//     a *= 2
//     b *= 2
//     return a + b
// } // Стрелочная функция 

// console.log(sum1(5,6))


// const sum2 = (a = 0 , b = 0) =>   (a * 2) + (b * 2)
// console.log(sum2(8,11))


// this.user = 'Nurali'

// const rectangle = {
//     width: 10,
//     length: 15,
//     getContextDefault: function () {
//         return this
//     },
//     getContextArrow:() => {
//         const a = () => {
//             const b = () => {
//                 return this
//             }
//             return b()
//         }
//         return a()
//     }
// }
// console.log(rectangle.getContextDefault())
// console.log(rectangle.getContextArrow())


// console.log(this)



// const rectangle = {
//     width: 10,
//     length: 20,
//     findP: function() {
//         return (this.width + this.length) * 2
//     },
//   findS: function () {
//     return this.width * this.length
//   }
// }
// console.log(rectangle.findP())
// console.log(rectangle.findS())





// const password = '12345678'
// console.log(password)


// function getPassword () {
//     const password= '12345678';
//    function a () {
//     return password
//    }
//    return a()
// }

// // console.log(getPassword())


// function generator() {
//     let number = -5

//     function a() {
//       return  number +=5
//     }
//     return a
// }
// const count = generator()



// console.log(count())
// console.log(count())
// console.log(count())
// console.log(count())


'use strict'

const allItems = ['25',null, 2, 12, undefined, 'duck', 19] //[2,12,19]

function onlyNumbers (arr = []) {
    const numbers = []
   for (let item of arr) {

    if (item == +item) {
        numbers[numbers.length] = +item
    }
   }
   return numbers
}
console.log(onlyNumbers(allItems))







const array  = {
    width: 190,
    length: 380,
    getfindP: function () {
        return this 
    }
    
}
console.log(array.findP())
arrays

