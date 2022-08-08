
const numbers = [1,2,3,4,5,6,7,8,9,0]
const symbols = ['@', '#', '$', '%', '&', '*', '!', '?']

function validatePassword(password, repeatPassword) {
    if(password != repeatPassword) {
      return 'Passwords must match'
    } 
    if (password.length < 8) {
        return "Password\'s length must be more than 8 characters"
    }
    const isUpperCaseExist = !password
    .split('')
    .some(letter => letter == letter.toUpperCase() && !isNaN(+letter))
    const isLoverCaseExist = !password
    .split('')
    .some(letter => letter == letter.toUpperCase() && !isNaN(+letter))
    console.log(isUpperCaseExist, isLoverCaseExist)
    if (isUpperCaseExist || isLoverCaseExist) {
        return "Password must contain uppercase and lowercase letters"
    }

    if (!password.split('').some(letter => numbers.includes(+letter))) {
        return 'Password must contain at least one number'
    }
    if (!password.split('').some(letter => symbols.includes(+letter))) {
        return 'Password must contain at least one special character (@, #, $, %, &, *, !, ?)'
    }

    return 'Password accepted'
}

console.log(validatePassword('Admin123@','Admin123@'))