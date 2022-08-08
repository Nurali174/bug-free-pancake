// // // const books = []


// // // const rectangle = {
// // //     width: 20,
// // //     length: 40,
// // //     heigth: 10,
// // // }

// // // const {length: dlina,weigth = 0,...data} = rectangle

// // // console.log(dlina, weigth,data)


// // const carInterface = {
// //     manufacturer: null,
// //     model: null,
// //     color: null,
// //     year: null
// // }

// // class Car {
// //     constructor(data){
// //         console.log(data)
// //         const {manufacturer,model,color,year} = data
// //     this.manufacturer = manufacturer
// //     this.model = model
// //     this.color=color
// //     this.year= year

// //    } 
// // }

// // const camry = new Car ({...carInterface,manufacturer:'Toyota',year: 2012,})
// // console.log(camry)


// const var_with_more_words = null
// const varWithMoreWords = null


// function camelCase(variable) { // some data: some_data
//     const some_data = someData
// }
// // camelCase('data')//data
// // camelCase('some data')//someData
// // camelCase('some_data')//someData
// // camelCase('some-data')//someData
// // camelCase('someData')//someData



// function camelCase(variable) {
//     let string = variable
//     let splits = string.split(' ')
//     let newString = ""
  
//     for (let i = 0; i < splits.length; i++) {
//       let words = splits[i];
//       let firstLetter = splits[i].charAt(0).toUpperCase();
//       let restOfWord = splits[i].slice(1);
          
//         if(i === 0) {
//           newString += words
//       } else {
//           newString += firstLetter + restOfWord;
//       }
  
//     }
//     return newString;
//   }
  











// function camelCase(str) {
//     const arr = str.includes('_') ? str.split('_') : str.split('-');
//     let camelCase = '';
//     for (let i = 0; i < arr.length; i++) {
//       if (i === 0) {
//         camelCase += arr[i];
//       } else {
//         camelCase += `${arr[i].slice(0, 1).toUpperCase()}${arr[i].slice(
//           1,
//           arr[i].length
//         )}`;
//       }
//     }
//     return camelCase;
//   }





//   console.log(camelCase("this is a string"));
//   console.log(camelCase("loopy lighthouse"));
//   console.log(camelCase("supercalifragalisticexpialidocious"));
//   console.log(camelCase("this is a test to see if the camel casing function works well"));





let camelCase = function(input) {
    let arr = input.split(' ');
    let result = [];
    if(arr.length !== 1){
      result = arr.map(word => (toUpper(word) + word.slice(1)))
    }else{
     return input;
    }
    result = result.join('');
    return result;
  };
  
  function toUpper(str){
    let re = str.indexOf(0).toUpperCase();
    return re;
  }
  
  console.log(camelCase("this is a string"));
  console.log(camelCase("loopy lighthouse"));
  console.log(camelCase("supercalifragalisticexpialidocious"));










