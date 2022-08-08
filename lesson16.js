// const sayHello = function () {
//     console.log('Hello')
//     return 'Hello'
// }

// console.log(sayHello())

// function sayHello1() {
//     console.log('Hello')
// }

// sayHello1()

// const sayHello2 = () =>  ('Hello')

// console.log(sayHello2())



    

// const rectangle1:{

//     width:10,
//     length:20,
//     findP: () => (this.width + this.length) * 2,
//     findS: function () {
//         return this.width * this.length
//     }
// }





// const arr = [1,2,3,4,5]

// arr.push(6)
// console.log(arr.length)


//Массивы Мутабельные

// const fib = [1,2,3,5,8,13,21]


// fib.push(34,55)
// console.log(fib)
// fib.pop()
// console.log(fib)
// fib.unshift(0,1)
// console.log(fib)
// fib.shift()
// console.log(fib)
// fib.reverse()
// console.log(fib)



// const fib = [1,2,3,5,8,13,21,34]

// const fibOnlyEven = fib.filter((item) => item % 2 == 0 )

// console.log(fibOnlyEven)


// function findOnlyEven (numbers)  {
//   const result = []
//   for (let number of numbers ){
//     number % 2 == 0 ? result.push(number) : null
//   }
//   return result
// }
// const fibOnlyEven2 = findOnlyEven(fib)
// console.log(fibOnlyEven2)



const users = [
    { name: 'Adilet', age: 21, job: 'Node.js developer'},
    { name: 'Aidar', age: 16, job: 'Student'},
    { name: 'Temir', age: 29, job: 'Policeman'},
    { name: 'Nurali', age: 25, job: 'Doctor'},
    { name: 'Aisha', age: 17, job: 'Frontend developer'}
]


// const usersAdults = users.filter((users) => users.age >= 21)
// console.log(usersAdults)

// const usersDevs = users.filter((user) => user.job.includes('developer'))
// console.log(usersDevs)


// const usersWithFirstLetterA = users.filter((user) => user.name[0] == 'A')
// console.log(usersWithFirstLetterA)


const fib = [1,2,3,5,8,13,21,34]

const  findOrrfilter1 = fib.filter((number) => number == 13) [0]
console.log(findOrrfilter1)

const findOrrfilter2 = fib.find ((number) => number == 13)
// console.log(findOrrfilter2)
const findOnlyEven = fib.find((number) => number % 2 == 0)
console.log(findOnlyEven)






const numbers = [1,1,1,1,1]
const isAllOne = numbers.every((number) => number == 1)
console.log(isAllOne)

const isAllPositive = numbers.every((number) => number > 0)
console.log(isAllPositive)


const isAllDevelopers = users.every((user) => user.job.includes('dev'))
console.log(isAllDevelopers)

const isDoctorExist = users.some((user) => user.job.includes('Doc'))
console.log(isDoctorExist)