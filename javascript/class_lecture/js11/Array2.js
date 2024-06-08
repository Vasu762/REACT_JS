/* Array.every */
/* Array.some */
/* Array.entries */
/* Array.reduse */
/* for each */
/* for in */
/* for of */
/* Array.keys */
/* Html dom events */

// -------------------------------------

// const value1 = (currentValue) => currentValue > 18;

// const Numbers1 = [45 , 89 , 18 , 19 ,5 ]

// console.log(Numbers1.every(value1));     //every means all value



// --------------------------------


// const value2 = (currentValue) => currentValue < 18;

// const Numbers2 = [95 , 99 , 91 , 99 , 20]

// console.log(Numbers2.some(value2));  //some mens only one only one  currentValue small to 18 o 

// -------------------------------


// const NewArray = ["javascript", "SQL", "Kite", "JQuery"]

// const values = NewArray.entries()


// console.log(values.next().value);      //value 
// console.log(values.next().value);        //next()
// console.log(values.next().value);
// console.log(values.next().value);
// console.log(values.next().value);


// ------------------------------------
// Array.reduse

// const Num = [1 , 2 , 3 , 4 , 5]

// // const init = 0;

// const vals = Num.reduce((val1 , val2) => val1 * val2);

// console.log(vals);

// ------------------------------------------------------
// reduce function



// const numbers = [1 , 2 , 3 , 4 , 5]

// function vasu(total, num) {
//     return total * num;
//   }
// console.log(numbers.reduce(vasu));







// // with initi value

// const val = Num.reduce((val1 , val2) => val1 * val2 , init);

// console.log(val);

// ---------------------------------------------------

// for of

// const NewArry = ["india", , "Austrlia", "canada", "brazil"];

// const output = NewArry.keys()

// // const output  = NewArry

// for (const keys of output) {
//     console.log(keys);
// }

// console.log(NewArry);




// ------------------------------------------
// forEach
// const NewArry1 = ["india", , "Austrlia", "canada", "brazil"];

// NewArry1.forEach(function(name , index){
//     console.log(name , index);
// })

// forEach////////////

// const NewArry = ["india" ,  , "Austrlia" , "canada" , "brazil"];

// const NewArray1 = [45 ,2 , 2 , 10]

// NewArry.forEach(item => console.log(item + item));      //item

// NewArray1.forEach(item => console.log(item * item));



/* For in loop */

// const object = {
//     FirstName : "Koladiya",
//     LastName : "Rajan",
//     Age : 25,
// }

// const NewArry = ["india" ,  , "Austrlia" , "canada" , "brazil"];

// for(const values in object){      // values
//   console.log(values);
// }


// const object = {
//     FirstName : "Koladiya",
//     LastName : "Rajan",
//     Age : 25,
// }

// const NewArry = ["india" ,  , "Austrlia" , "canada" , "brazil"];

// for(const values in NewArry){      // values
//   console.log(values);
// }

// --------------------------------------

// const Str = "Good Morning , how are You! you are lazy person"

// const Str1 = /[A-Z]/g;

// const Match = Str.match(Str1)

// console.log(Match);


/* Spred Oper */

// const NewArry = ["india" ,  , "Austrlia" , "canada" , "brazil"];

// // const Arry = [  "Norvay" ,...NewArry ]

// // const Arry = [...NewArry ,"Norvay"]


// console.log(NewArry);

// console.log(Arry);


// const regexp = /[a-z]/g;
// const str = 'test1test2';

// const array = [...str.matchAll(regexp)];

// console.log(array);
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
// console.log(array[5]);
// console.log(array[6]);
// console.log(array[1]);
// console.log(array[1]);
// console.log(array[1]);
// console.log(array[1]);

