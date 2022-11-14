// 1, 4
// We need to iterate from the first number given to the second number given, and on each iteration we can either push the number to an array, OR we can set another variable to 0 and increment to the variable on each iteration.


const sumAll = function(firstNum, secondNum) {

    let sumTotal = 0;
    //? If either number is negative, "ERROR" will be returned.
    if (firstNum < 0 || secondNum < 0) {
        return "ERROR"
    }
    //? If either number is a string, "ERROR" will be returned.
    else if (typeof(firstNum) === "string" || typeof(secondNum) === "string") {
        return "ERROR"
    }
    //? If either number is an array,"ERROR" will be returned.
    else if (Array.isArray(firstNum) || Array.isArray(secondNum)) {
        return "ERROR"
    }

    //? If second number is greater than the first number, the logic will still be the same.
    else if (firstNum > secondNum) {
        let newFirstNum = secondNum
        let newSecondNum = firstNum

        for (i = newFirstNum; i <= newSecondNum; i++) {
        sumTotal += i;
    }
    return sumTotal
    }
    //? Find sum of all numbers between two given parameters.
    else if (firstNum > 0 || secondNum > 0)
    for (i = firstNum; i <= secondNum; i++) {
        sumTotal += i;
    }
    return sumTotal;


};

console.log(sumAll(5,[1]))

// Do not edit below this line
module.exports = sumAll;
