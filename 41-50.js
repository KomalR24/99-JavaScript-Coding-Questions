//Question 41 - Loop through an object
// const student = {
//     name: 'komal',
//     age: '20',
//     gender: 'female'
// }
// const person = {
//     state: 'happy'
// }
// for(let key in student){
//     let value;
//     value = student[key];
//     console.log(key + " - " + value);
// }
// student.__proto__ = person;
// for(let key in student){
//     let value;
//     value = student[key];
//     console.log(key + " - " + value);
// }

//Question 42 - Merge properties of two objects
//1. Using object.assign
// const person = {
//     name: 'Jack',
//     age:26
// }
// const student = {
//     gender: 'male'
// }
// const newObj = Object.assign(person,student);
// console.log(newObj);
//2. Merge property of two objects using spread operator
// const newObj = {...person, ...student};
// console.log(newObj);

//Question 43 - Count number of keys/properties in an object.
// const student = {
//     name: 'komal',
//     age: 20
// }
// const person = {
//     gender: 'female'
// }
// student.__proto__ = person;
// let count = 0;
// for(let key in student){
//     ++count;
// }
// console.log(count); //3
// console.log(student);

//Question 44 - Add key/value pair to an object
//using dot or square notation
// const person = {
//     name: 'Monica',
//     age: 22
// }
// person.height = 5.4;
// person['weight'] = 54;
// console.log(person);

//Question 45 - Replace All occurences of a string
// const string = 'Mr. Red has a red house and a red car';
// const regex = /red/gi;
// const newText = string.replace(regex, 'blue');
// console.log(newText);

//Question 46 - create multiline strings
//using + or / or template literals
// const message1 = 'This is a long message\n' + 
//     'that spans across multiple lines\n' + 
//     'in the code.'
// const message2 = 'This is a long message\n\
// that spans across multiple lines\n\
// in the code.'
// const message3 = `This is a long message
// that spans across multiple lines
// in the code.`
// console.log(message3);

//Question 47 - Format Numbers as currency Strings
//using Intl.NumberFormat object. It enables language-sensitive number formatting.
// const formatter = new Intl.NumberFormat('en-US',{
//     style:'currency',
//     currency: 'USD'
// })
// console.log(formatter.format(2500));
//using toLocaleString()
// const result =  (2500).toLocaleString('en-US', {
//     style: 'currency',
//     currency: 'USD'
// });
// console.log(result);

//Question 48 - Generate Random String
// const result = Math.random().toString(36).substring(2,7);
// console.log(result);
// The Math.random() method generates the random number between 0 and 1.
// In toString(36) method, 36 represents base 36. The toString(36) represents digits beyond 9 by letters.
// The substring(2, 7) method returns five characters.
// const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// function generateString(length) {
//     let result = ' ';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < length; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     return result;
// }
// console.log(generateString(5));

//Question 49 - Check if a string starts with another
//using regex or startsWith
// const string = 'hello world';
// const pattern = /^he/;
// let result = pattern.test(string);
// if(result) console.warn('The string starts with "he".');
// else console.warn(`The string does not starts with "he".`);

//Quetsion 50 - Trim a string
// const string = '      Hello World       ';
// const result = string.trim();
// console.log(result);
