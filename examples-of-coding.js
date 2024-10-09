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
function myLocalScope() { 
  var myVar = //if we declare variable here 
  console.log(myVar);
}
myLocalScope();
console.log(myVar); 




























