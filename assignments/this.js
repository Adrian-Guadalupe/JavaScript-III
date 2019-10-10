/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in the global scope, the value of “this” will be the window/console Object.
* 2. Whenever a function is called by a preceding dot, the object before that dot is "this".
* 3. Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Whenever JavaScript’s call or apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1- Global Binding

function principle1(name) {
   console.log(this);
   return name;
 }

 principle1("Adrian");
 
// Principle 2- Implicit Binding

const principle2 = {
   greeting: 'Hello',
   sayHello: function(name) {
     console.log(`${this.greeting} my name is ${name}`);
     console.log(this);
   }
 };
 
 principle2.sayHello('Adrian');
 

// Principle 3- New Binding

function Person(obj) {
   this.name = obj.name;
   this.age = obj.age;
   this.speak = function() {
     console.log(this);
     return `Hello, my name is ${this.name}, and I am ${this.age} years old!`;
   }
 };
 
 const daddy = new Person({name: 'Daddy', age: 34});
 console.log(daddy.speak());
 
 const leo = new Person({name: 'Leo', age: 3});
 console.log(leo.speak());

// Principle 4- Explicit Binding

console.log(daddy.speak.call(leo));
console.log(leo.speak.apply(daddy));