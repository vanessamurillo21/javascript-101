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
