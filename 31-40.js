//Question 31 - Replace Characters of a String
//Replace first occurence of a character in a string
// const string = 'Mr. Red has a red house and a red car';
// const newText = string.replace('red','blue');
// console.log(newText);
//Replace all occurence of character of a string
// const string = 'Mr. Red has a red house and a red car';
// const regex = /red/g;
// const newText = string.replace(regex, 'blue');
// console.log(newText);


//Question 32 - Reverse a string
//for loop
// function reverseString(str){
//     let newString = "";
//     for(let i = str.length-1;i>=0;i--){
//         newString += str[i];
//     }
//     return newString;
// }
// const string = prompt('Enter a string: ');
// const result = reverseString(string);
// console.log(result);
//built in methods
// function reverseString(str){
//     const arrayStrings = str.split("");
//     const reverseArray = arrayStrings.reverse();
//     const joinArray = reverseArray.join("");
//     return joinArray;
// }
// const string = prompt('Enter a string: ');
// const result = reverseString(string);
// console.log(result);

//Question 33 - Create objects in Different ways
//1. Using object literal
// const person = {
//     name:'Pavitra',
//     age:'21',
//     hobbies: ['teasing','tickling','coding'],
//     greet: function(){
//         console.log('I love you Komal!');
//     },
//     score:{
//         react: 100,
//         maths: 100
//     }
// };
// console.log(typeof person); //object
// console.log(person.name);
// console.log(person.hobbies[0]);
// person.greet();
// console.log(person.score.react);
//2. Create object using instance of object directly
// const person = new Object ({
//     name: 'komal',
//     stateOfMind: 'focused'
// })
// console.log(typeof person); //object
// console.log(person.stateOfMind);
//3. Creating object using constructor fn
// function Person(){
//     this.name = 'Komal',
//     this.age = 20
// }
// const person = new Person();
// console.log(typeof person); //object
// console.log(person.age);

//Question 34 - Check the number of occurences of a character in the string.
// function countString(str,letter){
//     let count = 0;
//     for(let i = 0; i<str.length;i++){
//         if(str.charAt(i)==letter) count+=1;
//     }
//     return count;
// }
// const string = 'school';
// const letter = 'o';
// console.log(countString(string,letter));

//Question 35 - Convert the first letter of a string into UpperCase
// function captializeFirstLetter(str){
//     const captialized = str.charAt(0).toUpperCase() + str.slice(1);
//     return captialized;
// }
// const str = 'Javascript';
// const result = captializeFirstLetter(str);
// console.log(result);

//Question 36 - Count Number of vowels in a string
//using regex:
// function countVowel(str){
//     const count = str.match(/[aeiou]/gi).length; //g - global, i - case sensitive
//     return count;
// }
// const string = 'komal';
// const result = countVowel(string);
// console.log(result);
//using for loop
// const vowels = ['a','e','i','o','u'];
// function countVowels(str){
//     let count = 0;
//     for(let letter of str.toLowerCase()){
//         if(vowels.includes(letter)) count++;
//     }
//     return count;
// }
// const str = 'komal';
// const result = countVowels(str);
// console.log(result);

//Question 37 - Remove a Property (a key-value pair) from an object
//just use delete
// const student = {
//     name: 'john',
//     age: 20,
//     score: {
//         maths:90,
//         science:100
//     }
// }
// delete student.score.maths;
// //delete student['score'];
// delete student.age;
// console.log(student);

//Question 38 - Check whether string starts and ends with certain characters
//1. built-in
// function checkString(str){
//     if(str.startsWith('S') && str.endsWith('G')) console.log('starts with S and ends with G');
//     else if(str.startsWith('S')) console.log('starts with S');
//     else if(str.endsWith('G')) console.log('ends with G');
//     else console.log('neither S nor G');
// }
// let string = 'Savage';
// checkString(string);
//2. check the string using regex
// function checkString(str){
//     if(/^S/i.test(str) && /G$/i.test(str)){
//         console.log('starts with S ends with G');
//     }
//     else console.log('else case');
// }
// const str = 'Savag';
// checkString(str);

//Question 39 - Check if a key exists in an object
// const person = {
//     id: 1,
//     //name: 'john',
//     age: 23
// }
// const hasKey = 'name' in person;
// if(hasKey) console.log('The key exists');
// else console.log('The key does not exist');


//Question 40 - Clone a JS object
// const person = {
//     name: 'Komal',
//     age: '20'
// }
// const copy = person; //this isn't cloning, this is same reference.
// console.log(copy);
//copy.name ='peter';
// console.log(copy.name);
// console.log(person.name);
// 1. using Object.assign()
// const clonePerson = Object.assign({}, person); //Note: The empty {} as the first argument ensures that you don't change the original object.
// console.log(clonePerson);
// clonePerson.name = 'Peter';
// console.log(clonePerson.name);
// console.log(person.name);
// 2. using spread syntax
// const clonePerson = { ...person};
// console.log(clonePerson);
// clonePerson.name = 'peter';
// console.log(clonePerson.name);
// console.log(person.name);