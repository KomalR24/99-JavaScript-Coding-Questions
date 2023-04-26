//Question 21 - Find the factors of a number
// const num = prompt('Enter a positive number: ');
// for(let i=1; i<=num; i++){
//     if(num % i == 0) console.log(i);
// }

//Question 22 - Find sum of natural numbers using recursion.
// function sum(num){
//     if(num>0) return num + sum(num-1);
//     else return num;
// }
// const number = parseInt(prompt('Enter a positive integer: '));
// const result = sum(number);
// console.log(result);

//Question 23 - Guess a random number
// function guessNumber(){
//     const random = Math.floor(Math.random() * 10) + 1;
//     let number = parseInt(prompt('Guess a number from 1 to 10'));
//     while(number!=random){
//         if(number>random) number = parseInt(prompt(`Guess a number smaller than ${number}`));
//         else number = parseInt(prompt(`Guess a number greater than ${number}`));
//     }
//     console.log("You have guessed it right!");
// }
// guessNumber();

//Question 24 - Shuffle Deck of cards
// const suits = ["Spades","Diamonds","Club", "Heart"];
// const values = [
//     "Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King",
// ];
// let deck = [];
// for(let i=0;i<suits.length;i++){ //creating deck of cards
//     for(let x=0;x<values.length;x++){
//         let card = {Value: values[x], Suit: suits[i]};
//         deck.push(card);
//     }
// }
// for(let i = deck.length-1;i>0;i--){ //shuffling of deck
//     let j = Math.floor(Math.random()*i);
//     let temp = deck[i];
//     deck[i] = deck[j];
//     deck[j] = temp;
// }
// for(let i=0; i<5; i++){
//     console.log(`${deck[i].Value} of ${deck[i].Suit}`);
// }

//Question 25 - Fibonacci Sequence using recursion
// function fibonacci(num){
//     if(num < 2) return num;
//     else return fibonacci(num-1) + fibonacci(num-2);
// }
// const nTerms = prompt('Enter the number of terms: ');
// if(nTerms <= 0) console.log('Enter a positive integer');
// else{
//     for(let i=0;i<nTerms;i++){
//         console.log(fibonacci(i));
//     }
// }

//Question 26 - Factorial of number using recursion
// function factorial(x){
//     if(x==0) return 1;
//     else return x * factorial(x-1);
// }
// const num = parseInt(prompt('Enter a positive number:'));
// const result = factorial(num);
// console.log(result);

//Question 27 - Decimal to Binary
// function convertToBinary(x){
//     let bin = 0;
//     let rem, i =1, step = 1;
//     while(x!=0){
//         rem = x % 2;
//         console.log(`Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`);
//         x = parseInt(x/2);
//         bin = bin + rem*i;
//         i = i*10;
//     }
//     console.log(`Binary: ${bin}`);
// }
// let number = prompt('Enter a decimal number: ');
// convertToBinary(number);
//Using toString()
// const num = parseInt(prompt('Enter a decimal number: '));
// const result = num.toString(2);
// console.log('Binary: ' + result);

//Question 28 - Find ASCII value of character
//using charCodeAt 
// const string = prompt('Enter a character: ');
// const result = string.charCodeAt(0);
// console.log(`The ASCII value is: ${result}`);
//using codePointAt(0);
// const string = prompt('Enter a character: ');
// const result = string.codePointAt(0);
// console.log(`The ASCII value is: ${result}`);

//Question 29 - Check whether string is palindrome or not
//using for loop
// function checkPalindrome(string){
//     const len = string.length;
//     for(let i = 0; i < len/2 ; i++){
//         if(string[i]!=string[len-1-i]){
//             return "It is not a palindrome";
//         }
//     }
//     return "It is palindrome";
// }
// const string = prompt('Enter a string: ');
// const value = checkPalindrome(string);
// console.log(value);
//using built in functions
// function checkPalindrome(string){
//     const arrayValues = string.split('');
//     const reverseArrayValues = arrayValues.reverse();
//     const reverseString = reverseArrayValues.join('');
//     if(string==reverseString) console.log('it is palindrome');
//     else console.log('it is not a palindrome');
// }
// const string = prompt('Enter a string: ');
// checkPalindrome(string);

//Question 30 - Words in Alphabetical order
// const string = prompt('Enter a sentence: '); 
// const words = string.split(' ');
// words.sort(); //capitals > small letters
// console.log('The sorted words are: ');
// for(const element of words){
//     console.log(element);
// }