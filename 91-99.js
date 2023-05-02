//Question 91 - function overloading refers to the concept where multiple functions with the same names can have different implementations.
// function sum(){
//     if(arguments.length == 0) console.log('You have not passed any argument');
//     else if(arguments.length == 1) console.log('Pass at least two arguments');
//     else{
//         let result = 0;
//         let length = arguments.length;
//         for(i=0;i<length;i++){
//             result = result + arguments[i];
//         }
//         console.log(result);
//     }
// }
// sum();
// sum(5);
// sum(5,9);
// sum(1,2,3,4,5,6,7,8,9);

//Question 92 - Implement a stack (LIFO)
// class Stack{
//     constructor(){
//         this.items = [];
//     }
//     add(element){
//         return this.items.push(element);
//     }
//     remove(){
//         if(this.items.length > 0) return this.items.pop();
//     }
//     peek(){
//         return this.items[this.items.length - 1];
//     }
//     isEmpty(){
//         return this.items.length == 0;
//     }
//     size(){
//         return this.items.length;
//     }
//     clear(){
//         this.items = [];
//     }
// }
// let stack = new Stack();
// stack.add(1);
// stack.add(2);
// stack.add(4);
// stack.add(8);
// console.log(stack.items);
// stack.remove();
// console.log(stack.items);
// console.log(stack.peek());
// console.log(stack.isEmpty());
// console.log(stack.size());
// stack.clear();
// console.log(stack.items);

//Question 93 - Implement a queue
// class Queue{
//     constructor(){
//         this.items = {};
//         this.headIndex = 0;
//         this.tailIndex = 0;
//     }
//     enqueue(element){
//         this.items[this.tailIndex] = element;
//         this.tailIndex++;
//     }
//     dequeue(){
//         let removedElement = this.items[this.headIndex];
//         delete this.items[this.headIndex];
//         this.headIndex++;
//         return removedElement;
//     }
//     peek(){
//         let peekElement = this.items[this.headIndex];
//         return peekElement;
//     }
//     size(){
//         return this.tailIndex - this.headIndex;
//     }
//     isEmpty(){
//         if(this.tailIndex - this.headIndex == 0) return true;
//         else return false;
//     }
//     clear(){
//         this.items = {};
//         this.headIndex = 0;
//         this.tailIndex = 0;
//     }
// }
// let queue = new Queue();
// queue.enqueue(8);
// queue.enqueue(6);
// queue.enqueue(4);
// queue.enqueue(2);
// console.log(queue.items);
// queue.dequeue();
// console.log(queue.items);
// console.log(queue.peek());
// queue.clear();
// console.log(queue.items);

//Question 94 - check if a number is float or integer
// function checkNumber(x){
//     if(typeof x == 'number' && !isNaN(x)){
//         if(Number.isInteger(x)){
//             console.log("it is integer");
//         }else{
//             console.log("float value");
//         }
//     }else{
//         console.log("not a number");
//     }
// }
// checkNumber('hello');
// checkNumber(44);
// checkNumber(3.4);
// checkNumber(-3.4);
// checkNumber(NaN);

//Question 95 - pass fn as parameter
// function greet(){
//     return 'Hello';
// }
// function name(user, func){
//     const message = func();
//     console.log(`${message} ${user}`);
// }
// name('Komal', greet);

//Question 96 - get dimensions of image - image.onload
// const img = new Image(); //error
// img.src = '//cdn.programiz.com/sites/tutorial2program/files/cover-artwork.png';
// img.onload = function(){
//     console.log('width ' + this.width);
//     console.log('height ' + this.height);
// }

//Question 97 - Remove all whitespaces form the text
// const string = '    hello world      ';
// const result = string.split(' ').join('');
// console.log(result);

//Question 98 - write to console
// console.log(8);
// console.log('hello');
// const x = 'hello';
// console.log(x);
// function sayName() {
//     return 'Hello John';
// }
// console.log(sayName());
// const name = 'John';
// console.log('Hello ' + name);
// let obj = {
//     name: 'John',
//     age: 28
// }
// console.log(obj);

//Question 99 - convert Date to number
// const d1 = new Date();
// console.log(d1);
//Converting to number
// const result = d1.getTime();
// console.log(result);
//The getTime() method returns the number of milliseconds from midnight of January 1, 1970 (EcmaScript epoch) to the specified date.