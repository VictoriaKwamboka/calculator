var add = function (no1, no2) {
    return (no1 + no2)
};

//alert(add(23,35));

//BACK-END LOGIC

const subtract = (no1, no2) => no1 - no2;
const addition = (number1, number2) => number1 + number2;
const subtraction = (number1, number2) => number1 - number2;
const multiply = (number1, number2) => number1 * number2
const divide = (number1, number2) => number1/number2



//USER INTERFACE LOGIC
var number1 = parseInt(prompt('Enter a number: '));
var number2 = parseInt(prompt('Enter another number: '));
alert(add(number1,number2))