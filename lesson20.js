


// // const table = {
// //     color:'Black',
// //     form: 'circl',
// //     material: 'wood'
// // }





// // const cat1 = {
// //     name: 'Barsik',
// //     age:1,
// //     color:'Black',
// //     say: function() {
// //         console.log('meow','meow')
// //     }
// // }





// // const cat2 = {
// //     name: 'Barsik',
// //     age:1,
// //     color:'Black',
// //     say: function() {
// //         console.log('meow','meow')
// //     }
// // }





// // const cat3 = {
// //     name: 'Barsik',
// //     age:1,
// //     color:'Black',
// //     say: function() {
// //         console.log('meow','meow')
// //     }
// // }


// // console.log(`${cat.name}s color is ${cat.color}`)
// // cat.say()


// class Cat {
//     constructor(name = '',age = 0,color = '') {
//         this.name = name
//         this.age = age
//         this.color = color

//     }
//     say = function () {
//         console.log('meow', 'meow')
//     }
// }

// console.log(Cat)

// const cat1 = new Cat('Barsik', 1 ,'Black')
// console.log(cat1)
// console.log(`${cat1.name} 's color is ${cat1.color}, ${cat1.age} years`)
// cat1.say()



// const cat2 = new Cat ('Matroskin',3,'White - blue')
// console.log(cat2)
// console.log(`${cat2.name} 's color is ${cat2.color}, ${cat2.age} years`)
// cat2.say()


// class User  {
//     constructor(name = '', email = '',password = '',birthDate = '') {
//         this.name = name
//         this.email = email
//         this.password = password
//         this.birthDate = birthDate
//     }

//     login = function(email,password) {
//         if (email == this.email == password == this.password) {
//             console.log('your login in ')
//         } else {
//             console.log('Incorrect email or password')
//         }
//     }
// }

// const user1 = new User ('Nurali', 'nurcanelo1@gmail.com','pubglover1','01.01.2000')
// console.log(user1)
// user1.login('nurcanelo1@gmail.com','pubglover1')


// const user2 = new User('Aidar','bratzabrata123@gmail.com','ttanaaab','18.01.2007')
// console.log(user2)
// user2.login('bratzabrata123','ttanaaab')

class Rectangle {
    constructor(lendth = '' , width = '') {
        this.lendth = lendth
        this.width = width
    }
    lendth = function(lendth,width) { 
      if (lendth == this.lendth == width == this.width) {
        console.log(' your  in')
      } else {
        console.log('Incorrect lendth and width')
      }
    }
}

const findP = new Rectangle ('150','90')
console.log(findP)
findP.lendth()


const findS = new Rectangle ('120','80')
console.log(findS)
findS.lendth()
