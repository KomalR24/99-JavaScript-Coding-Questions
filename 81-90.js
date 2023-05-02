//Question 81 - check if a variable is undefined or null
// function checkVariable(variable) {
//     if(variable == null) console.log('The variable is undefined or null');
//     else console.log('The variable is neither undefined nor null');
// }
// let newVariable;
// checkVariable(5);
// checkVariable('hello');
// checkVariable(null);
// checkVariable(newVariable);

//Question 82 - Set a default parameter value for a function
// let calculate = function(x = 15, y = x + 2) {
//     return x + y;
// }
// const result1 = calculate(10);
// console.log(result1);
// const result2 = calculate();
// console.log(result2);

//Question 83 - Illustrate different set operations
//1.set union
// function union(a,b){
//     let unionSet = new Set(a);
//     for(let i of b) unionSet.add(i);
//     return unionSet;
// }
//2. set intersection
// function intersection(a,b){
//     let intersectionSet = new Set();
//     for(let i of b){
//         if(setA.has(i)) intersectionSet.add(i);
//     }
//     return intersectionSet;
// }
//3. set difference operation - The set difference operation represents elements that are present in one set and not in another set.
// function difference(setA, setB){
//     let differenceSet = new Set(setA);
//     for(let i of setB) differenceSet.delete(i);
//     return differenceSet;
// }
// const setA = new Set(['apple','mango','orange']);
// const setB = new Set(['grapes','apple','banana']);
// const result = union(setA, setB);
// const result = intersection(setA, setB);
// const result = difference(setA, setB);
// console.log(result);
//4. set subset operation
// function subset(setA, setB){
//     for(let i of setB){
//         if(!setA.has(i)) return false;
//     }
//     return true;
// }
// const setA = new Set(['apple','mango','orange']);
// const setB = new Set(['apple','orange']);
// const result = subset(setA, setB);
// console.log(result);

//Question 84 - generate a random number between two numbers
// formula - Math.floor(Math.random() * (max - min + 1)) + min

//Question 85 - get the current URL
// const url1 = window.location.href;
// const url2 = document.URL;
// console.log(url1);
// console.log(url2);

//Question 86 - Validate an email address
//using regex

//Question 87 - check if a variable is of function type
//1. using instancof Function
// function testVariable(variable){
//     if(variable instanceof Function){
//         console.log('the variable is of function type');
//     }else console.log('the variable is not of function type');
// }
//2. using typeof operator
// function testVariable(variable){
//     if(typeof variable == 'function'){
//         console.log('the variable is of function type');
//     }else console.log('the variable is not of function type');
// }
// const count = true;
// const x = function(){
//     console.log('hello');
// } 
// testVariable(count);
// testVariable(x);

//Question 88 - Work with constants
// const a = 5;
// console.log(a);
// {
//     const a = 50;
//     console.log(a);
// }
// console.log(a);
// const arr = ['work', 'exercise', 'eat'];
// console.log(arr);
// arr[3] = 'hello';
// console.log(arr);
// // the following code gives error
// // changing the value of a throws an error
// // uncomment to verify
// // a = 8;
// // throws an error
// // const x; 

//Question 89 - pass parameter to a setTimeout() fn.
//setTimeout(function, milliseconds);
// function greet(x, y) {
//     console.log(x);
//     console.log(y);
// }
// setTimeout(greet, 3000, 'hello', 'world');
// console.log('output first');

//Question 90 - generate a range of numbers and characters
//link : https://www.programiz.com/javascript/examples/generate-range