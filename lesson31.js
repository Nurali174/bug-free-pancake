const numbers = [1,2,3,4,5,6,7,8,9,0]
const symbols = ['@', '#', '$', '%', '&', '*', '!', '?']

 function getPassword (password,repeatPassword) {
    
    if(password != repeatPassword )  {
        return "Password A "
    }

    if (password.length < 8) {
        return "Password length more 8 elements "
    }

    const isUpperCaseExist = !password
    .split ('')
    .some(letter => letter == letter.toUpperCase() && !isNaN  (+letter))
    
    const isLoverCaseExist = !password
    .split ('')
    .some(letter => letter == letter.toUpperCase() && !isNaN  (+letter))
     if (isUpperCaseExist  || isLoverCaseExist) {
        return "Password must contain uppercase and lowercase letters"
     }
     if (!password.split('').some(letter => numbers.includes(+letter))) {
        return 'Password must contain at least one number'
     }
       if (!password.split('').some(letter => symbols.includes(+letter))){
        return 'Password must contain at least one special character (@, #, $, %, &, *, !, ?)'
       }

       return "Password Accepted"
 }

 
console.log(getPassword('Admin123#y','Admin123#y'))