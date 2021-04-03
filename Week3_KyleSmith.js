var ages = [3, 9, 23, 64, 2, 8, 28, 93]; 

// Programmatically subtract the value of the first element in the array from the value in the last
// element of the array (do not use numbers to reference the last element, find it programmatically,
// ages[7] – ages[0] is not allowed). Print the result to the console.

var firstAge = ages[0];
var lastAge = ages[ages.length-1];

console.log(lastAge - firstAge);

console.log("-------------------------------------------------------------");

// Add a new age to your array and repeat the step above to ensure it is dynamic
// (works for arrays of different lengths).

// added numbers 21, 59, 101
ages.push(21);
ages.push(59);
ages.push(101);

var firstAge = ages[0];
var lastAge = ages[ages.length-1];

console.log(lastAge - firstAge);

console.log("-------------------------------------------------------------");

// Use a loop to iterate through the array and calculate the average age.
// Print the result to the console.

let sum = 0;

for(age of ages){
    sum += age;
}

let total = ages.length;
let avg = sum/total;

console.log(avg);

console.log("-------------------------------------------------------------");

// Use a loop to iterate through the array and calculate the average number of
// letters per name. Print the result to the console.
                   
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

  let allNamesLength = 0;

  for (let i = 0; i < names.length; i++) {
    allNamesLength += names[i].length;
  }

  const average = allNamesLength / names.length;
  console.log('average', average);

console.log("-------------------------------------------------------------");

// Use a loop to iterate through the array again and concatenate all the names together,
// separated by spaces, and print the result to the console.

let allNamesWithSpaces = '';

  for (let i = 0; i < names.length; i++) {
    if (i === names.length - 1) {
      allNamesWithSpaces += names[i];
    } else {
      allNamesWithSpaces += `${names[i]} `;
    }
  }

  console.log('allNamesWithSpaces', allNamesWithSpaces);

console.log("-------------------------------------------------------------");

// Create a new array called nameLengths. Write a loop to iterate over the previously
// created names array and add the length of each name to the nameLengths array.

const nameLengths = [];

  for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
  }

  console.log('nameLengths', nameLengths);

console.log("------------------------------------------------------------");

// Write a loop to iterate over the nameLengths array and calculate the sum of all 
// the elements in the array. Print the result to the console.

let sumOfAllElements = 0;

  for (let i = 0; i < nameLengths.length; i++) {
    sumOfAllElements += nameLengths[i];
  }

  console.log('sum', sumOfAllElements);

console.log("------------------------------------------------------------");

// Write a function that takes two parameters, word and n, as arguments and returns 
// the word concatenated to itself n number of times. 
// (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function spam(givenWord, numberOfTimes){

    for(let q = 0; q < numberOfTimes; q++){
        console.log(givenWord);
    }
}

spam("Hello", 3);

console.log("------------------------------------------------------------");

// Write a function that takes two parameters, firstName and lastName, and returns a full name 
// (the full name should be the first and the last name separated by a space).

function createFullName(firstName, lastName){
    console.log(firstName + ' ' + lastName);
}

createFullName('Kyle', 'Smith');

console.log("----------------------------------------------------------------");

// Write a function that takes an array of numbers 
// and returns true if the sum of all the numbers in the array is greater than 100.

 function arrayOf100(array0, array1, array2, array3, array4){

    var sumOf100 = [];

    sumOf100.push(array0);
    sumOf100.push(array1);
    sumOf100.push(array2);
    sumOf100.push(array3);
    sumOf100.push(array4);

    if(array0 + array1 + array2+ array3+ array4 >= 100){
        console.log("True")
    }
    else console.log("False")

 }

 arrayOf100(20, 20, 20, 20, 19);


console.log("------------------------------------------------------------");

// Write a function that takes an array of numbers and returns the average of all the elements in the array.

function arrayOfAveFun(array0, array1, array2, array3, array4){

    var arrayOfAve = [];

    arrayOfAve.push(array0);
    arrayOfAve.push(array1);
    arrayOfAve.push(array2);
    arrayOfAve.push(array3);
    arrayOfAve.push(array4);
    
    let sum = 0;

    for(age of arrayOfAve){
    sum += age;
    }

    let total = arrayOfAve.length;
    let avg = sum/total;

    console.log(avg);
}

 arrayOfAveFun(1, 2, 4, 8, 16);

console.log("------------------------------------------------------------");

// Write a function that takes two arrays of numbers and returns true if the average 
// of the elements in the first array is greater than the average of the elements in the second array.

function arrayOfGreaterAveFun(array0, array1, array2, array3, array4, array5, array6, array7, array8, array9){

    var arrayOfGreaterAveP1 = [];
    var arrayOfGreaterAveP2 = [];

    arrayOfGreaterAveP1.push(array0);
    arrayOfGreaterAveP1.push(array1);
    arrayOfGreaterAveP1.push(array2);
    arrayOfGreaterAveP1.push(array3);
    arrayOfGreaterAveP1.push(array4);

    arrayOfGreaterAveP2.push(array5);
    arrayOfGreaterAveP2.push(array6);
    arrayOfGreaterAveP2.push(array7);
    arrayOfGreaterAveP2.push(array8);
    arrayOfGreaterAveP2.push(array9);
    
    let sumP1 = 0;

    for(age of arrayOfGreaterAveP1){
    sumP1 += age;
    }
    let totalP1 = arrayOfGreaterAveP1.length;
    let avgP1 = sumP1/totalP1;

    // NEW THING

    let sumP2 = 0;

    for(age of arrayOfGreaterAveP2){
    sumP2 += age;
    }
    let totalP2 = arrayOfGreaterAveP1.length;
    let avgP2 = sumP2/totalP2;


    if(avgP1 > avgP2){
        console.log("True")
    }
    else if(avgP1 < avgP2){
        console.log("False")
    }
    else console.log("IDK what went wrong")
}

arrayOfGreaterAveFun(1, 2, 4, 8, 16, 1, 2, 4, 8, 30);

console.log("------------------------------------------------------------");

// Write a function called willBuyDrink that takes a boolean isHotOutside,
// and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket){

    if(isHotOutside == true && moneyInPocket >= 10.50){
        console.log("Its time to buy a drink!")
    }
    else if(isHotOutside == false || moneyInPocket < 10.50){
        console.log("No drink for me today.")
    }
}

willBuyDrink(true, 10.99);

console.log("------------------------------------------------------------");

// Create a function of your own that solves a problem. In comments, 
// write what the function does and why you created it.

// This is to tell if kyle is happy with his grade

function kyleIsHappy(gradeNumber, amountOfTime, effortPutIn){

    if(gradeNumber >= 90 && amountOfTime < 20 && effortPutIn == true){
        console.log("Kyle is a happy boi") // This is the best case for Kyles happyness with his grade
        // it checks if the grade is greater or = to 90 checks the amout of time he put in and if he put effort in
    }
    else if(gradeNumber <= 89 && amountOfTime > 20 && effortPutIn == true){
        console.log("Kyle is a sad boi as he tried very hard on this even tho he " //This is a sad kyle grade
        + "hates arrays in every coding language so plz find it in your heart to make it a 90 and dont crush his effort and dreams")
        // this once again checks if the grade is lower then or equal to 89, checks amout of time put in, and check effort
    }
    else if(gradeNumber <= 90 && amountOfTime > 3 && effortPutIn == false){
        console.log("Kyle understands why you would give him such a low grade and should stop playing Destiny 2 when he has HW to do")
        // This is if kyle didnt put effort into the HW but he probbly did so not likey to happen
        // checks the grade once again, checks the amount of time, and checks the effort put in
    }

}

kyleIsHappy(100, 6, true);
//This is where kyle puts in the grade, time, and effort to see if he is happy or not