// console.log("Hello, World!");

// Example of var and let
function example() {
    if (true) { 
        // console.log(x); // undefined due to hoisting
        // console.log(y); // Error: Cannot access 'y' before initialization

        var x = 10; // Function scoped
        // var x = 15; // Redeclaration allowed    
        let y = 20; // Block scoped
        // let y = 25; // Error: Identifier 'y' has already been declared
        
        // console.log(x); // 15
        // console.log(y); // 20
       
    }
    // console.log(x); // 10
    // console.log(y); // Error: y is not defined
}

// var x = 5; // Global scope
// let y = 10; // Global scope but not attached to window
// console.log(window.x); // 5
// console.log(window.y); // undefined  

example();


//| Category         | `var`                | `let`               |
//| ---------------- | -------------------- | ------------------- |
//| Scope            | Function             | Block               |
//| Hoisted          | Yes (as `undefined`) | Yes (but TDZ error) |
//| Redeclare        | Yes                  | No                  |
//| Global (browser) | Attached to `window` | Not attached        |
//| Best to use?     | ❌ Old style          | ✅ Use this normally |
