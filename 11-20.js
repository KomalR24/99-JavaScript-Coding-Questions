//Question 11 - Find Factorial
// const number = parseInt(prompt("Enter a positive number: "));
// if(number==0) console.log(1);
// else{
//     let fact = 1;
//     for(i =1;i<=number;i++){
//         fact*=i;
//     }
//     console.log(fact);
// }

//Question 12 - Display the Multiplication Table
// const number = parseInt(prompt("Enter a number: "));
// const range = parseInt(prompt("Enter a range: "));
// for(let i=1; i<=range;i++){
//     const result = i * number;
//     console.log(`${number} x ${i} = ${result}`);
// }

//Question 13 - Fibonacci Sequence 0 1 1 2 3 5 8
// const number = parseInt(prompt("Enter a number: "));
// let n1 = 0, n2 = 1, nextTerm;
// for(let i= 1; i<=number; i++){
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

//Question 14 - ArmStrong Number - 
//if order is 3 then 153 - 1*1*1 + 5*5*5 + 3*3*3
// const num = parseInt(prompt("Enter a number:"));
// let n = num;
// let result = 0;
// while(n>0){
//     let temp = n%10;
//     result += (temp * temp * temp);
//     n = parseInt(n/10);
// }
// if(result==num) console.log("Armstrong number");
// else console.log("Not an armstrong number");
//Order is n then 92727 here order is number.length
// const number = prompt("Enter a positive number: ");
// const numOfDigits = number.length;
// let sum = 0;
// let temp = number;
// while(temp>0){
//     let remainder = temp%10;
//     sum+= remainder ** numOfDigits;
//     temp = parseInt(temp/10);
// }
// if(sum==number) console.log("Armstrong number");
// else console.log("Not a armstrong number");

//Question 15 - Find Armstrong number between intervals
// const lowNumber = parseInt(prompt('Enter a positive low integer value: '));
// const highNumber = parseInt(prompt('Enter a positive high integer value: '));
// console.log ('Armstrong Numbers:');
// for (let i = lowNumber; i <= highNumber; i++) {
//     let numberOfDigits = i.toString().length;
//     let sum = 0;
//     let temp = i;
//     while (temp > 0) {
//         let remainder = temp % 10;
//         sum += remainder ** numberOfDigits;
//         temp = parseInt(temp / 10);
//     }
//     if (sum == i) console.log(i);
// }

//Question 16 - Make a simple calculator
// let result;
// const operator = prompt("Enter operator (either +, -, * or /): ");
// const number1 = parseFloat(prompt("Enter first number: "));
// const number2 = parseFloat(prompt("Enter second number: "));
// switch(operator){
//     case '+':
//         result = number1 + number2;
//         console.log(result);
//         break;
//     case '-':
//         result = number1 - number2;
//         console.log(result);
//         break;
//     case '*':
//         result = number1 * number2;
//         console.log(result);
//         break;
//     case '/':
//         result = number1 / number2;
//         console.log(result);
//         break;
//     default:
//         console.log("Invalid operator");
//         break;
// }

//Question 17 - Find the sum of Natural Numbers
// const number = parseInt(prompt('Enter a positive number: '));
// let sum = 0, i = 1;
// while(i <= number){
//     sum += i;
//     i++;
// }
// console.log(sum);

//Question 18 - Check if the numbers have same last digit
// const num1 = parseInt(prompt("Enter first number"));
// const num2 = parseInt(prompt("Enter second number"));
// const num3 = parseInt(prompt("Enter third number"));
// const result1 = num1%10, result2 = num2%10, result3 = num3%10;
// if(result1 == result2 && result2 == result3){
//     console.log(`${num1}, ${num2}, ${num3} have the same last digit`);
// }

//Question 19 - Find HCF or GCD
// let hcf;
// const number1 = parseInt(prompt('Enter first number'));
// const number2 = parseInt(prompt('Enter second number'));
// for(let i = 1; i <= number1 && i <= number2;i++){
//     if(number1 % i == 0 && number2 % i == 0) hcf = i;
// }
// console.log(hcf);

//Question 20 - Find LCM
// const num1 = prompt('Enter a first positive integer: ');
// const num2 = prompt('Enter a second positive integer: ');
// let max = (num1 > num2) ? num1 : num2;
// while (true) {
//     if (max % num1 == 0 && max % num2 == 0) {
//         console.log(`The LCM of ${num1} and ${num2} is ${max}`);
//         break;
//     }
//     max++;
// }
//We can also calculate LCM using HCF
