//Question 51 - Convert Objects to strings
//Using JSON.stringify()
// const person = {
//     name: 'jack',
//     age: 21
// }
// const result = JSON.stringify(person);
// console.log(result);
//Using String()
// const person = {
//     name: 'Jack',
//     age: 27
// }
// const result1 = String(person);
// const result2 = String(person['name']);
// console.log(result1); //When using the String() function on an Object, the converted result will give [object Object].
// console.log(result2);
// console.log(typeof result1);

//Question 52 - Replace all instances of a character in a string
//using regex
// const string = 'Learning Javascript Program';
// const result = string.replace(/a/g,"A");
// console.log(result);
//using built-in methods 
// const string = 'Learning Javascript Program';
// const splitString = string.split('a');
// const result = splitString.join('A');
// console.log(result);

//Question 53 - Replace all Line Breaks with <br>
// const string = `I am Learning JavaScript.
// JavaScript is fun.
// JavaScript is easy.`;
// const result = string.split('\n').join('<br>');
// console.log(result);

//Question 54 - Display date and time
//Note: The six numbers in new Date() specify year, month, day, hour, minute, second respectively. Also, the month starts from 0. Hence, January is 0 and December is 11.
// const date = new Date(2017,2,12,9,25,30);
// const n = date.toDateString();
// const time = date.toLocaleTimeString();
// console.log(n);
// console.log(time);

//Question 55 - check Leap Year
// function checkLeapYear(year){
//     if((0==year%4) && (0!=year%100) || (0==year%400)){
//         console.log(year + ' is a leap year');
//     }else{
//         console.log(year + ' is not a leap year');
//     }
// }
// const year = 2000;
// checkLeapYear(year);

//Question 56 - Program to Format the Date
// let currentDate = new Date();
// let day = currentDate.getDate();
// let month = currentDate.getMonth() + 1;
// let year = currentDate.getFullYear();
// if(day<10) day='0' + day;
// if(month<10) month = '0' + month;
// const formattedDate1 = month + '/' + day + '/' + year;
// console.log(formattedDate1);
// const formattedDate2 = month + '-' + day + '-' + year;
// console.log(formattedDate2);

//Question 57 - Display Current Date
// const date = new Date();
// const n = date.toDateString();
// const time = date.toLocaleTimeString();
// console.log(n);
// console.log(time);

//Question 58 - Compare the value of two dates
// const d1 = new Date();
// const d2 = new Date();

// console.log(d1);
// console.log(d2);

// const compare1 = d1 < d2;
// console.log(compare1);
// const compare2 = d1 > d2;
// console.log(compare2);
// const compare3 = d1<=d2;
// console.log(compare3);
// const compare4 = d1>=d2;
// console.log(compare4);
// const compare5 = d1.getTime() === d2.getTime(); //The getTime() method returns the number of milliseconds from midnight of January 1, 1970 (EcmaScript epoch) to the specified date.
// console.log(compare5);
// const compare6 = d1.getTime() !== d2.getTime();
// console.log(compare6);

//Question 59 - Create Countdown Timer
// let countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;
// let countDownDate = new Date("Aug 5, 2025 14:22:36").getTime();
// console.log(countDownDate);
// let x = setInterval(function(){
//     let now = new Date().getTime();
//     let timeLeft = countDownDate - now;
//     const days = Math.floor(timeLeft/(1000*60*60*24));
//     const hours = Math.floor((timeLeft/(1000*60*60))%24);
//     const minutes = Math.floor((timeLeft/1000/60)%60);
//     const seconds = Math.floor((timeLeft/1000)%60);
//     console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
//     if(timeLeft<0){
//         clearInterval(x);
//         console.log('Count Down Finished');
//     }
// },2000);

//Question 60 - Remove Specific Item from an array
//1. using for loop
// function removeItemFromArray(array,n){
//     const newArray = [];
//     for(let i=0; i<array.length; i++){
//         if(array[i] != n) newArray.push(array[i]);
//     }
//     return newArray;
// }
// const result = removeItemFromArray([1,2,3,4,5],2);
// console.log(result);
//2. Array.splice()
// function removeItemFromArray(array,n){
//     const index = array.indexOf(n);
//     if(index > -1) array.splice(index,1);
//     return array;
// }
// const result = removeItemFromArray([1,2,3,4,5],2);
// console.log(result);
