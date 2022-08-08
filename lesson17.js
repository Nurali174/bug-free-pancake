// // const numbers = [1,2,3,4,5,6]
// // console.log(numbers)
// // numbers.push(7)
// // numbers.unshift(0)
// // console.log(numbers)


// // const onlyEven = numbers.filter((number) => number % 2 == 0)
// // console.log(onlyEven)
// // // console.log(numbers)

// // const arr = [0 ,1,2,3,'a','b','c', true,false,null,undefined,{}]
// // console.log(arr.filter(el => !!el))
// // console.log(arr.filter(el =>  el == +el))




// // const numbers = [1, 3, 10 , 6, 34, 110, 2, 234, -94, 45, 10, 583]

// // const sortedNumbers1  = numbers.sort()
// // // console.log(sortedNumbers1)

// // const sortedNumbers1  = numbers.sort((a,b) => b - a) 

// // console.log(sortedNumbers1)



// // const students = ['Aidar','Nurali','Aisha','Aijanyl','Aibike','Ayim']

// // console.log(students.sort() )
// // console.log(students.sort((a,b) => a.length - b.length))





// // const numbers = ['b',1, 2, 3, 4, 5,'10', 'a']
   
// // const result = numbers.reduce((a,b) => a == +a && b == +b ? +a + +b : a, 0)

// // console.log(result)





// // let result = 0
// // for(let number of numbers) {
// //     result += number
// // }
// // console.log(result)




// // const numbers = [1,2,3,4,5,6]

// // const plusOne = numbers.map(number => ++number)
// // console.log(plusOne)

// // console.log(numbers.map)

// // console.log(numbers.map((number) => console.log(number)))
// // console.log(a)

// // console.log(console.log(10))


// // console.log(numbers.map((number) => number ** 2))
// // console.log(numbers.map((number) => number ** 3))

// const users = [
//     { name: 'Adilet', age: 21, job: 'Node.js developers' },
//     { name: 'Aidar', age: 16, job: 'Node.js' },
//     { name: 'Temir', age: 29, job: 'police' },
//     { name: 'Nurali', age: 25, job: 'doctor' },
//     { name: 'Aisha', age: 17, job: 'Node.js developers' },
// ]


// const userNames = users.map(user => user.age >= 18 ? user.name : null)
// console.log(userNames)

// const userNamesAbove18 = users.map(user => user.age >= 18 ? user.name : null).filter(el => !!el)
// console.log(userNamesAbove18)




function palinfrome2(word) {
    let reversedword = ''
    for(let i = word.lenght -1; i >= 0; i--) {
       reversedword += word[i]
    }
    return word == reversedword
}
console.log(palinfrome2('level'))
console.log(palinfrome2('future'))