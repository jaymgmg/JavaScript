// console.log("Hello, World!");

// **
// Example of var and let**
// function example() {
    // if (true) { 
        // console.log(x); // undefined due to hoisting
        // console.log(y); // Error: Cannot access 'y' before initialization

        // var x = 10; // Function scoped
        // var x = 15; // Redeclaration allowed    
        // let y = 20; // Block scoped
        // let y = 25; // Error: Identifier 'y' has already been declared
        
        // console.log(x); // 15
        // console.log(y); // 20
       
    // }
// }

// var x = 5; // Global scope
// let y = 10; // Global scope but not attached to window
// console.log(window.x); // 5
// console.log(window.y); // undefined  

// example();

//| Category         | `var`                | `let`               |
//| ---------------- | -------------------- | ------------------- |
//| Scope            | Function             | Block               |
//| Hoisted          | Yes (as `undefined`) | Yes (but TDZ error) |
//| Redeclare        | Yes                  | No                  |
//| Global (browser) | Attached to `window` | Not attached        |
//| Best to use?     | ❌ Old style          | ✅ Use this normally |


//**truthy and falsy values**

// const value = "Hello";
// Truthy values: true, {}, [], non-zero numbers, non-empty strings

// const value = 0;
// const value = null;
// const value = NaN;
// const value = undefined;
// const value = '';
// Falsy values: false, null, undefined, 0, NaN, ''
// if (value) {
//     console.log("Truthy");
// } else {
//     console.log("Falsy");
// }


/*
//this keyword 
*/

// function func() {
//     console.log(this); // In non-strict mode, this refers to the global object (window in browsers)
// }
// func();

// function StrictMode() {
//     'use strict';
//     console.log(this); // In strict mode, this is undefined
// }
// StrictMode();

// const obj = {
//     name: "My Object",
//     method: function() {        
//         console.log(this.name); // "My Object"
//     }
// };
// obj.method();


/*
// function vs arrow function
 */
// const obj = {
//     name: "My Object",
//     regularFunction: function() {   
//         console.log(this.name); // "My Object"
//     },
//     arrowFunction: () => {        
//         console.log(this.name); // undefined, as arrow functions do not have their own 'this'
//     }
// };
// obj.regularFunction();
// obj.arrowFunction();

// const obj = {
//     name: "My Object",
//     function1() {    
//         console.log(this.name); // "My Object"
//         const that = this; // Workaround to capture 'this' context
//         const function2 = function() {        
//             console.log(that.name); // "My Object", using 'that' to access the outer 'this'
//         }
//         const innerArrow = () => {        
//             console.log(this.name); // "My Object", inherits 'this' from the enclosing context
//         }   
//         innerArrow();
//         function2();
//     }
// };
// obj.function1();