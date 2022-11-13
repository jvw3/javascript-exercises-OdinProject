// Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:

// > Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)

//? Leap years are divisible by 4.
//? Any years divisible by 100 is not a leap year
//? If year is divisible by 400 it is a leap year

//? Had to refactor to check conditions for edge cases first (400 & 100), instead of the more common condition (4).
const leapYears = function(givenYear) {

    if (givenYear % 400 === 0) {
        return true
    }
    else if (givenYear % 100 === 0) {
        return false
    }
    else if (givenYear % 4 === 0) {
        return true
    }
    else {
        return false
    }
};


console.log(leapYears(1600))
// Do not edit below this line
module.exports = leapYears;
