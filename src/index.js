// // import logger, {appName as name, dummyFunction as dummy} from './tools';
// // logger("Welcome to Chapter 10! The application name is \'" + name + "\'. There is a function that returns \'" +
// // dummy() + "\'.");

// import logger, {appName, dummyFunction} from './tools.js';
// logger(`Welcome! The application name is "${appName}".
// There is a function that returns "${dummyFunction()}".`);

// var variableName = function(parameters-separated-by-commas-if-any) {
//     statements()
// }

// //By direct declaration
// function addTwoNumbersA(number1, number2){
//     return number1 + number2; //Add the two numbers passed when function is called
//     }
//     //By expression
//     var addTwoNumbersB = function(number1, number2){
//     return number1 + number2;
// }
    
// function square(number){
//     number = number**2;
//     return number;
//    }
//    var number = 20; //Declare variable that holds number to be squared
//    var numberSquared = square(number); //Pass number (by value) to the square() function
//    console.log(numberSquared); //The function returns 400
//    console.log(number); //The value of number variable outside the function remains 20

// var myObject = {
//     name: {
//     firstName : "Pius",
//     surname: "Onobhayedo"
//     },
//     expertise: "Software design and development",
//     languages: ["Python","JavaScript","Java","C++"],
//     isRetired: false,
//     favouriteCombination: 3 + 3
// }
   
// console.log(myObject.name); //Prints out { firstName: 'Pius', surname: 'Onobhayedo' }.
// console.log(myObject['name']); //Also prints out { firstName: 'Pius', surname: 'Onobhayedo' }.
// console.log(myObject.expertise); //Prints out Software design and development
// console.log(myObject['expertise']); //Also prints out Software design and development
// console.log(myObject.languages); //Prints out [ 'Python', 'JavaScript', 'Java', 'C++' ]
// console.log(myObject['languages']); //Also prints out [ 'Python', 'JavaScript', 'Java', 'C++' ]
// console.log(myObject.isRetired); //Prints out false
// console.log(myObject['isRetired']); //Also prints out false
// console.log(myObject.favouriteCombination); //Prints out 6
// console.log(myObject['favouriteCombination']); //Also prints out 6

function multiplier() {
    var product = 1;
    if (arguments.length < 2) {
        throw new Error("Illegal arguments counts. Arguments must be greater than 1")
    }
    for (var x = 0; x < arguments.length; x++) {
        product = product * arguments[x];
    }
    return product
}

try{ 
    console.log(multiplier()) 
   }catch(error){ 
    console.log(error.message); //This will output the message 'Illegal arguments counts. Arguments must be greater than 1' 
   } 
   //Call function with arguments. No error here. 
   try{ 
    console.log(multiplier(2,3)); //This will output 6 
   }catch(error){ 
    console.log(error.message); 
   }