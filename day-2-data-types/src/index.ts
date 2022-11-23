// JavaScript has three very commonly used primitives: string, number, and boolean.
// Each has a corresponding type in TypeScript.
// As you might expect, these are the same names you’d see if you used the JavaScript typeof operator on a value of those types

// Printing length
// let lengthString: number = "Hello".length;
// let lengthNumber: number = 12345.length; // error
// console.log(lengthString);
// console.log(lengthNumber); // error

// Primitive Data Types

// String - represents string values like "Hello, world"
// console.log("Hello"[0]); // H
// console.log("Hello"[4]); // o
// console.log("Hello" + "world"); // Helloworld
// console.log("123" + "345"); // 123345
//
// console.log(typeof "Hello world"); // string
//
// let color: string = "blue";
// console.log(color);
// color = 'red';
// console.log(color);
//
// let fullName: string = `Julie Kohl`;
// let age: number = 37;
// let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next year.`;
// console.log(sentence);

// Number - is for numbers like 42. JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number
// let decimal: number = 6;
// console.log(decimal); // 6
// let hex: number = 0xf00d;
// console.log(hex); // 61453
// let binary: number = 0b1010;
// console.log(binary); // 10
// let octal: number = 0o744;
// console.log(octal); // 484

// Add
// let a = 12
// let b = 2
// let c = a + b;
// console.log(c)   //14

// Sub
// let a = 10
// let b = 2
// let c = a - b;
// console.log(c)   //8
//
// let d = b-a;
// console.log(d)   //-8
//
// let a = "1"
// let b = "2"
// console.log(a - b);  //-1
// Compiler warning

// let a = "Hello"
// let b = 2
// console.log(a - b);  //NaN

// Multiplication
// let a: number = 5
// let b: number = 2
// console.log(a * b);  //10

// let a = "5"
// let b = "2"
// console.log(a * b);  //10

// Division
// console.log(10 / 2);    //5
// console.log(11 / 2);    //5.5
//
// console.log(6 / '3');     //2
// console.log('6' / '3');   //2

// Exponentiation
// console.log(3 ** 4);         // 81
// console.log(10 ** -2);       // 0.01
// console.log(2 ** 3 ** 2);    // 512
// console.log((2 ** 3) ** 2);  //  64
// console.log(2 ** (3 ** 2));  // 512

//Boolean
//Compiler warning
// console.log(true - false)  //1  true is 1, false is 0
// console.log(2 - true)      //1

// Boolean - is for the two values true and false
// True
// False

// let isDone: boolean = false;
// console.log(isDone); // false

// let a = true     //boolean
// let b = 2
// let c = b + a;     //Typescript compiler throws a warning here
// console.log(c)   //3 because true is 1

// let a = false     //boolean
// let b = 2
// let c = b + a;      //Compiler warning
// console.log(c)    //2 because false is 0

// console.log(6 / true);   //6 true is 1
// console.log(2 / false);  //Infinity false is 0

// Array - Array types can be written in one of two ways.
// In the first, you use the type of the elements followed by [] to denote an array of that element type
// let list: number[] = [1, 2, 3];
// console.log(list);

// Object - object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, bigint, symbol, null, or undefined.
// With object type, APIs like Object.create can be better represented.

// let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
// obj.foo(); // error is not a function
// obj(); // error is not a function
// obj.bar = 100; // { x: 0, bar: 100 }
// obj = "hello"; // hello
// const n: number = obj;
// console.log(n); // { x: 0 }

// Project Calculator

// console.log("Welcome to the tip calculator!");
// const bill: number = 150;
// const tip: number = 12;
// const people: number = 5;
//
// let percent_tip: number = tip / 100
// let bill_with_tip: number = bill * percent_tip
// let total_bill: number = bill + bill_with_tip
// let bill_per_person: number = total_bill / people // 33.6
// let final_bill: number = Math.round(bill_per_person) // 34
// console.log(`Each person should pay: ${final_bill}`);
