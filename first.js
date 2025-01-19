console.log("jay swaminarayan");
// Variables in javascripts
a = "hari";
x = null;
y = undefined;
isFollow = true;
alert("hello "+a);
console.log(y);
// ****************

let name = "manan"; //this is right way to declare variables 
name = "harikrushna" 
console.log("your name is : "+name);
// let, const and var keywords.


// var : Variable can be re-declared and updated. A global scope variable.
// let : Variable cannot be re-declared but can be updated. A block scope variable,
// const : Variable cannot be re-declared or update. A block scope variable.

// example of const : which we don't used to change 
const PI  = 3.14;
// const e ; //must give value to const type.
// *****************


// Different data types in JS.
// Primitive (Number, String, Boolean, Undefinded, Null, BigInt, Symbol) 
// let x = BigInt(123)
// ****************** 


// objects : collection of key/values pair.
const student = {
    name : "manan",
    age : 20,
    cgpa : 8.2,
    isPass : true
}
console.log(student)
console.log(student['age'])
console.log(student.age)
console.log("123"+1)  // output : 1231, type is string
// "abcd"+123 = abcd123