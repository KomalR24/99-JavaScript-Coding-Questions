//Question 61 - Check whether a string contains a substring
//1. check string with includes() - case sensitive
// const str = prompt('Enter a string:');
// const checkString = prompt('Enter a string that you want to check');
// if(str.includes(checkString)) console.log(`The string contains ${checkString}`);
//2. similarly using indexOf() - case sensitive

//Question 62 - Compare Two Strings
//using toUpperCase()
// const string1 = 'JavaScript Program';
// const string2 = 'javascript program';
// const result = string1.toUpperCase() === string2.toUpperCase();
// if(result) console.log('the strings are similar');
// else console.log("the strings aren't similiar");

//Question 63 - Encode a string to base64
//Base64 is a group of binary-to-text encoding schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation.
//using btoa() - encoding
//using atob() - decoding
// const str = "Learning Javascript";
// const result = btoa(str);
// console.log(result);
// const result1 = atob(result);
// console.log(result1);

//Question 64 - check if an array contains a specified value
// const array = ['you', 'are', 'so', 'pretty'];
// const hasValue = array.includes('pretty');
// const hasValue = array.indexOf("pretty")!= -1;
// if(hasValue) console.log('array contains pretty');

//Question 65 - Insert item in an array
//using splice()
// const array = [1,2,3,5,6];
// const index = 3;
// const element = 4;
// array.splice(index,0,element); 
// The first argument specifies the index where you want to insert an item.
// The second argument (here 0) specifies the number of items to remove.
// The third argument specifies the element that you want to add to an array.
// console.log(array);

//Question 66 - Append an object to an array
// function insertObject(arr,obj){
    // arr.push(obj); //1. using push()
    // let index = arr.length;
    // arr.splice(index,0,obj); //2. using splice() 
//     arr = [...arr, object];
//     console.log(arr);
// }
// let array = [1,2,3];
// let object = {x:12,y:8};
// insertObject(array,object);

//Question 67 - check if an object is in array
//the Array.isArray() method is used to check if an object is an array.
// function checkObject(arr){
//     const result = Array.isArray(arr);
//     if(result) console.log(`${arr} is an array`);
// }
// const array = [1,2,3];
// checkObject(array);
// console.log(typeof array); //object

//Question 68 - empty an array
// function emptyArray(arr){
    // arr = []; //OR
    // arr.splice(0,arr.length); //OR
    // arr.length = 0;
//     console.log(arr);
// }
// const arr = [1,2,3,4];
// emptyArray(arr);

//Question 69 - Add element to start of an array
// function addElement(arr){
    // arr.unshift(4);
    // arr.splice(0,0,4);
    // arr = [4,...arr];
    // arr = [4].concat(arr);
//     console.log(arr);
// }
// const array = [1,2,3];
// addElement(array);
 
//Question 70 - Remove Duplicates from array 
//1. using indexOf() and push()
// function getUnique(arr){
//     let uniqueArr = [];
//     for(let i of arr){
//         if(uniqueArr.indexOf(i)==-1) {
//             uniqueArr.push(i);
//         }
//     }
//     console.log(uniqueArr);
// }
// const arr = [1,2,2,3,4,5,5];
// getUnique(arr);
//2. using Set
// function getUnique(arr){
//     let uniqueArr = [...new Set(arr)];
//     console.log(uniqueArr);
// }
// const arr = [1,2,2,3,4,5,5];
// getUnique(arr);

