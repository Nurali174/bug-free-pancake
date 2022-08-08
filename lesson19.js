// const num = 71723
// functiongetMaxNum () {
//     const result =  +`${num}`.split('').sort((a ,b) => b - a).join('')
// console.log(result, typeof result)
// }
// const result =  +`${num}`.split('').sort((a ,b) => b - a).join('')
// console.log(result, typeof result)


// let a = 10
// let b = 20
// let c = a = b
// console.log(a,b)



const month = Math.ceil(Math.random() * 12 )
console.log(month)

 if (month == 1 || month == 2 || month == 12) {
       season = 'Winter'
 }  else if (month == 3 || month == 4 || month == 5) {
    season = 'spring'
 } else if (month == 6 || month == 7 || month == 8) {
    season = 'summer'
 } else if (month == 9 || month == 10|| month == 11) {
    season = ''
 } else {
    season = 'Invalid month'
 }

 console.log(month,season)
