//Mantipulate Arrays with pop(); pop() removes the final element in the array
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop(); //removedFromOurArray now equals 3, and ourArray now equals [1,2]
//SetUp
var myArray = [["John", 23], ["cat", 2]];
//Change code below 
var removedFromMyArray = myArray.pop();
console.log(myArray) // Answer is [["John", 23]]

//Manipulate Arrays with shift(); shift() removes the inital element in the array 
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift(); //removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]];
//Setup
var Array = [["John", 23], ["dog", 3]];
//Change code below 
var removedFromMyArray = myArray.shift();
console.log(myArray) //myArray is [["dog", 3]]; removedFromMyArray is now [["John", 23]];

//Manipulate Arrays with unshift(); this is similar to the push() array function; while push () adds an element to the end of the array, unshift() adds at element to the beginning of the array
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); //ourArray now equals ["J", "cat"];
ourArray.unshift("Happy"); //ourArray now equals ["Happy", "J", "cat"]
//Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
//Change code below
myArray.unshift(["Paul", 35]); // Answer: [["Paul", 35],  ["dog", 3]]

//Shopping List; Creating Arrays of arrays as a shopping list
var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]]; 

//Write Reusable Code with Functions
function ourResuableFunction() { 
  console.log("Heyya, World"); //anything inside the curly brackets is run anytime the function is called or invoked. 
}

ourReusableFunction(); //Copy and Paste 3x this function and you will see ("Heyya, World") 3x in the console
//Change code below this line
function reusableFunction() {
  console.log(Hi World);
}
reusableFunction(); //Should see "Heyya, World" and "Hi World"

//Passing Values to Functions with Arguments
function ourFunctionWithArgs(a, b) { //Here we defined a function with this command
  console.log(a - b); 
}
ourFunctionWithArgs(10, 5); //We will then pass this information into the function. nOutput is 5
//Change below 
function functionWithArgs(a, b) {
  console.log(a + b); 
}
functionWithArgs(10, 5) //Console answer is 5 and 15

//Global Scope and Functions 
//Scope: This refers to the visibility of variables; variables defined outside of a function block have global scope
//Global Scope: They can be seen everywhere in your Javascript code
//Declare your variable here 
var myGlobal = 10; //This is a Global Scope. This is set outside of a function, we can see it anywhere in the whole code even in function fun1() and fun2()
function fun1(){
  //Assign 5 to oopsGlobal Here 
  oopsGlobal = 5; //Normally if you do use var keyword, since this is within in functions, it will be scoped to that function
                  //Since there is no "var" like in "var oopsGlobal," then, that means you can access it anywhere else in the program including here
}
//Only change code above this line
function fun2() { 
  var output = "";
  if (typeof myGlobal != "undefined") { //myGlobal referenced here highlighted in white
    output += "myGlobal: " + myGlobal; //And here too 
  } 
  if (typeof oopsGlobal != "undefined") { // != means that "it will not equal"; therefore myGlobal will not equal "undefined"
    output += "oopsGlobal: " + oopsGlobal; //If we put "var oopsGlobal" then this line 72 would be exist; and oopsGlobal WOULD equal "undefined"
  }
  console.log(output); //Console Answer: myGlobal is 10 and oopsGlobal is 5
}
fun1();
fun2();

//Local Scope and Function
  //Variables which are declared within a function as well as the function parameters have local scope; meaning that they are only visible within the function. 
//Example 1 
function myLocalScope() { 
  var myVar = 5;//if we declare variable here is only visible inside the function
  console.log(myVar);
}
myLocalScope();
console.log(myVar); //outside for the function so it will cause an error; therefore this line of code will be deleted

//Global vs. Local Scope in Functions 
  //Possible to have both with the same name; but the local variable will have precedent over the global variable
//Example 1 
var outWear = "T-Shirt"; //Global Variable declared outside of the function
function myOutfit() { //this function will return "outWear"
  return outerWear; 
}
console.log(myOutfit()); //console returns "T-Shirt"

//Example 2 
var outWear = "T-Shirt"; 

function myOutfit() { 
  var outWear = "sweater";
  return outerWear; 
}
console.log(myOutfit()); //Console returns "Sweater" 
console.log(outerWear); //Console returns "T-shirt"

//Return a Value from a Function with Return 
  //Example 1 
function minusSeven(num) {
  return num - 7; 
}

console.log (minusSeven(10)); //Console return is "3"

  //Example 2
function timesFive(num) {
  return num * 5; 
}

console.log(timesFive(5)); 

//Understaning Undefined Value Returned from a Function 
  //Example 1 
var sum = 0;
function addThree() { 
  sum = sum + 3; //Return statements are not always there; and will return undefined 
}

 //Example 2
var sum = 0;
function addFive() {
  sum += 5; //Return is still "undefined"; missing "return" statement 
}

//Assignement with a Returned Value 
  //Example 1 
var changed = 0; 

function change(num) { //Pass in a number and it returns this mathematical expression
  return (num + 5) / 3; 
}

changed = change(10); 

var processed = 0;

function processArg(num) { 
  return (num + 3) / 5; 
}
 processed = processArg(7); 

//Stand in Line
    //Cue: is an abstract data structure where items are kept in order
  //Example 1 
function nextInLine(arr, item) { //This can add an item to the array that's passed in then return the first item on the list 
  //Your Code here 
  arr.push(item);
  return arr.shift(); //Shift moves the first item and returns the first item

}
var testArr = [1, 2, 3, 4, 5]; //Array

console.log("Before: " + JSON.stringify(testArr)); //JSON.stringify is a way to change the array in to a string for easy view
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr)); 

//Console return is:
//"Before: [1, 2, 3, 4, 5]
// 1
//After [ 2, 3, 4, 5, 6]

//Boolean Values 
    //Boolean: datatype in javascript; only two values: True or False
      //They are on/off switches; true = ON & false = OFF
//Example 1
function welcomeToBooleans() {
  return false; 
}
//Example 2 
function welcomeToBooleans() {
  return true; 
}

//Use Conditional Logic with If Statements



























