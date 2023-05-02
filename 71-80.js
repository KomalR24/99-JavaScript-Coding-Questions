//Question 71 - Merge two arrays and remove duplicate items
// function getUniqueAfterMerge(arr1, arr2){
    // let arr = [...arr1,...arr2];
    // let uniqueArr = [...new Set(arr)]; //OR
    // let arr = arr1.concat(arr2);
    // let uniqueArr = [];
    // for(let i of arr){
    //     if(uniqueArr.indexOf(i) === -1){
    //         uniqueArr.push(i);
    //     }
    // }
    // console.log(uniqueArr);
// }
// const array1 = [1,2,3,3];
// const array2 = [2,3,4,5];
// getUniqueAfterMerge(array1,array2);

//Question 72 - Sort Array of objects by property values
// function compareName(a, b) {
//     const name1 = a.name.toUpperCase();
//     const name2 = b.name.toUpperCase();
//     let comparison = 0;
//     if (name1 > name2) {
//         comparison = 1;
//     } else if (name1 < name2) {
//         comparison = -1;
//     }
//     return comparison;
// }
// function compareAge(a,b){
//     return a.age - b.age;
// }
// const students = [{name: 'Sara', age:24},{name: 'John', age:24}, {name: 'Jack', age:25}];
// console.log(students.sort(compareName));
// console.log(students.sort(compareAge));

//Question 73 - 2-D array
// function twoDimensionArray(a,b){
//     let arr = [];
//     for(let i=0; i<a;i++){
//         for(let j=0;j<b;j++){
//             arr[i] = [];
//         }
//     }
//     for(let i=0;i<a;i++){
//         for(let j=0;j<b;j++){
//             arr[i][j] = j;
//         }
//     }
//     return arr;
// }
// const x = 2;
// const y = 3;
// const result = twoDimensionArray(x,y);
// console.log(result);

//Question 74 - Extract given property values from objects as array
//1. using map
// function extractValue(arr,prop){
//     let extractedValue = arr.map(item => item[prop]);
//     return extractedValue;
// }
// const objArray = [{a:1,b:2},{a:4,b:5},{a:8,b:9}];
// const result = extractValue(objArray,'a');
// console.log(result);

//2. using for loop
// function extractValue(arr,prop){
//     let extractedValue = [];
//     for(let i=0;i<arr.length;i++){
//         extractedValue.push(arr[i][prop]);
//     }
//     return extractedValue;
// }
// const objArray = [{a:1,b:2},{a:4,b:5}];
// const result = extractValue(objArray,'a');
// console.log(result);

//Question 75 - Compare elements of two arrays
//1. using JSON.stringify()
// function compareArrays(arr1,arr2){
//     const result = JSON.stringify(arr1) == JSON.stringify(arr2);
//     if(result) console.log('The array have the same elements');
//     else console.log('The arrays have different element');
// } 
// const array1 = [1,3,5,8];
// const array2 = [1,3,5,8];
// compareArrays(array1,array2);
//2. for loop

//Question 76 - Get random item from an array
// function getRandomItem(arr){
//     const randomIndex = Math.floor(Math.random() * arr.length);
//     const item = arr[randomIndex];
//     return item;
// }
// const array = [1,'hello',5,8];
// const result = getRandomItem(array);
// console.log(result); 

//Question 77 - Intersection between two arrays
// function performIntersection(arr1,arr2){
    // const setA = new Set(arr1);
    // const setB = new Set(arr2);
    // let IntersectionResult = [];
    // for(let i of setB){
    //     if(setA.has(i)) IntersectionResult.push(i);
    // } //OR
//     let IntersectionResult = arr1.filter(x => arr2.indexOf(x) != -1);
//     return IntersectionResult;
// }
// const array1 = [1,2,3,5,9];
// const array2 = [1,3,5,8];
// const result = performIntersection(array1,array2);
// console.log(result);

//Question 78 - Split array into smaller chunks
//1.using slice()
// function splitIntoChunk(arr,chunk){
//     for(i=0;i<arr.length;i+=chunk){
//         let tempArray;
//         tempArray = arr.slice(i,i+chunk);
//         console.log(tempArray);
//     }
// }
// const array = [1,2,3,4,5,6,7,8];
// const chunk = 2;
// splitIntoChunk(array,chunk);
//2. using splice()
// function splitIntoChunk(arr,chunk){
//     while(arr.length>0){
//         let tempArray;
//         tempArray = arr.splice(0,chunk);
//         console.log(tempArray);
//     }
// }
// const array = [1,2,3,4,5,6,7,8];
// const chunk = 2;
// splitIntoChunk(array, chunk);

//Question 79 - Include a JS file in another js file
// module.js file - 
// const message = 'hello world';
// const number = 10;
// function multiplyNumbers(a,b){
//     return a*b;
// }
// export {message, number, multiplyNumbers};
// in main.js
//import {message,number,multiplyNumbers} from './modules.js'

//Question 80 - Get file extension
// function getFileExtension(filename){
//     const extension = filename.split('.').pop();
//     return extension;
// }

// const result1 = getFileExtension('module.js');
// console.log(result1);
// const result2 = getFileExtension('module.txt');
// console.log(result2);