// // const Forbes = {
// //     name: 'Nurali','status in Forbes NURAlI': '450 billion ', age: 32,
// //     name2: 'Aidar', 'status in Forbes AIDAR': '450 billion ', age2: 31,
// //     name3: 'Ilon MUSK','status in Forbes ILON MUSK': '300 billion', age3: 68,
    
// // }

// // console.log(Forbes['status in Forbes NURAlI'])
// // console.log(Forbes.name)
// // console.log(Forbes.age)


// // console.log(Forbes['status in Forbes AIDAR'])
// // console.log(Forbes.name2)
// // console.log(Forbes.age2)


// // console.log(Forbes['status in Forbes ILON MUSK'])
// // console.log(Forbes.name3)
// // console.log(Forbes.age3)



// // let a = 10;
// // let b = a;
// // console.log(a ,b)


// // a = 20
// // console.log(a,b)


// // b = 30
// // console.log(a,b)



// // const numbers1 = [1,2,3,4,5]
// // const numbers2 = numbers1



// // numbers1.push(6,7)


// // console.log(numbers1,numbers2)





// const obj1 = {
//     a:10,
//     b:20,
//     sum: function() { this.a + this.b }
// }
// const obj2 = obj1



// const obj3 = JSON.parse(JSON.stringify(obj1))

// obj2.b = 200
// obj1.c = 500

// console.log(obj1,obj2,obj3)


// class Figure {
//     constructor(length = 0) {
//         this.length =length
//     }
// }

// const figure = new Figure()
// console.log(figure)


// class Circle extends Figure {
//     constructor(radius,diammer) {
//         const diameter = radius * 2
//         const length = diameter * 3.14
//         super(length)
//         this.diameter = radius * 2
//        this.diameter = diameter
        
//     }
    
// }
// const circle = new Circle(5)
// console.log(circle)

// // console.log(0.1 + 0.3)
// // console.log(0.1 + 0.2)
// // console.log(0.1 + 0.6)


// console.log(('b' + 'a' + +'a' + 'a').toLocaleLowerCase())

// class User {
//     constructor(classroom = 3){

//     }
// }

// class Developer {
//     #salary
//     constructor(position, language , salary) {
//         this.position = position
//         this.language = language
//         this.#salary = salary


//     }

//      getSalary() {
//         return this.#salary
//      }
// }

//  const frontend = new Developer ('Middle', ['JavaScript, React'], '800$')
//  console.log(frontend)

//  console.log(frontend.getSalary())

