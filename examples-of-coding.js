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






