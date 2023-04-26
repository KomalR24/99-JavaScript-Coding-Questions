//Question 1 - Print Hello World
// console.log("hello world");
// alert("hello world");
// document.write("hello world");

//Question 2 - Add Two Numbers (user entered)
// const num1 = parseInt(prompt('enter first number: '));
// const num2 = parseInt(prompt('enter second number: '));
// const sum = num1 + num2;
// console.log(num1 + num2);

//Question 3 - Square root
// console.log(Math.sqrt(num1));

//if we do square root of -4 or hello, output will be NaN.

//Question 4 - Area of a triangle
// const side1 = parseInt(prompt('Enter side1: '));
// const side2 = parseInt(prompt('Enter side2: '));
// const side3 = parseInt(prompt('Enter side3: '));
// const s = (side1 + side2 + side3) / 2;
// const areaValue = Math.sqrt(
//   s * (s - side1) * (s - side2) * (s - side3)
// );
// console.log(
//   `The area of the triangle is ${areaValue}`
// );

//Question 5 - Swap Two variables
// let a = parseInt(prompt("Enter a"));
// let b = parseInt(prompt("Enter b"));
// 1. using temp
// let temp;
// temp = a;
// a = b;
// b = temp;
// console.log(a,b);
//2. using es6 destructing assignment
// [a,b] = [b,a];
// console.log(a,b);
//3. using arithmetic operations
//a = 3 b = 5
// a = a + b; //a = 8
// b = a - b; //3
// a = a - b; //5
// console.log(a);
// console.log(b); //5 3
//4. using bitwise XOR - if only element differ then true
//a = 4 [0100] b = 2 [0010]
// a = a ^ b;  // 0100 ^ 0010 = 0110 = 6
// b = a ^ b;  // 0110 ^ 0010 = 0100 = 4
// a = a ^ b;  // 0110 ^ 0100 = 0010 = 2
// console.log(a);
// console.log(b);

//Question 6 - convert celsius to fahrenheit
// const celsius = prompt("Enter a celsius value: ");
// const fahrenheit = (celsius * 1.8) + 32
// console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);

//Question 7 -  generate random number
// const a = Math.random();
// console.log(a);
// const a = Math.random() * (10-1) + 1
// console.log(`Random value between 1 and 10 is ${a}`); //random floating point number between 1 to 10
// const a = Math.floor(Math.random() * (10 - 1)) + 1;
// console.log(`Random value between 1 and 10 is ${a}`);

//Question 8 - Largest Number Among Three Numbers
// const num1 = parseInt(prompt("Enter first number: "));
// const num2 = parseInt(prompt("Enter second number: "));
// const num3 = parseInt(prompt("Enter third number: "));
// let largest;
// if(num1>=num2 && num1>=num3) largest = num1;
// else if(num2>=num1 && num2>=num3) largest = num2;
// else largest = num3;
// console.log(largest);
//or simple use Math.max(num1, num2, num3);

//Question 9 - Check prime number
// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;
// if (number === 1) console.log("1 is neither prime nor composite number.");
// else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) console.log(`${number} is a prime number`);
//     else console.log(`${number} is a not prime number`);
// }
// else console.log("The number is not a prime number.");

//Question 10 - Prime numbers between the two numbers
// const low = parseInt(prompt('Enter lower number: '));
// const high = parseInt(prompt('Enter higher number: '));
// for(let i=low; i<=high; i++){
//     let flag = 0;
//     for(let j = 2;j < i; j++){
//         if(i%j==0){
//             flag=1;
//             break;
//         }
//     }
//     if(i>1 && flag==0) console.log(i);
// }