// const nums = [1, 2, 3, 4]

// const vv = nums.reduce((prev, next) => {
//     return prev+ next;
// })

// console.log(vv);





// JavaScript Variable


// var

// var boy = 'raj'
// var boy = 'raju'
// console.log(boy);

// let

// let toy = "car"
// toy = "bike"

// console.log(toy);

// const

// const toy ='bicycle' 
// console.log(toy);

// let x = "wor'ld";
// let y = 'wor"ld';
// let z = "wor\"ld";
// let zz = 'wor\'ld';              //same quote  black shash
// let zzz = 'hello \n world'
// let zzzz = "he\tllo"
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(zz);
// console.log(zzz);
// console.log(zzzz);   


{
    // let a = 10;
    // let b = 11;
    // let c = 10;

    // if (a <= b && b <= c);
    // {
    //     console.log("hello word");
    // }
}


// ((a > b) ? 100 : 200) => 200
// ((a < b) ? 100 : 200) => 100


// let aggriment = 0;
// let age = aggriment == 0 ? "Login" : "Logout";
// document.write(age);


// var age = 18
// var vv = age == 0 ? "loging" : "logout";
// console.log(vv);





/* if statement */


// let age = prompt()

// if(age >= 18){
//     console.log("you are aligable");
// }
// else{
//     console.log("you are not algable");
// }



/* if...else if... statement */

// var book = prompt();

// if (book === 'histroy') {
//     console.log('this is histroy');
// }

// else if (book === 'stat') {
//     console.log('this book stat');
// }

// else if (book === 's.s') {
//     console.log('this is book s.s ');
// }

// else {
//     console.log("Not available");
// }


// let input = prompt()

// switch (input) {
//     case '1':
//         console.log("this number is 1");    
//         break;
//     case 'y':
//         console.log("this  y");
//         break;
// }


// BCN

// for(let i=0 ; i<=10; i++){
//     if(i==5){
//         break;
//     }
//     document.write(i)
// }


// for (let i = 0; i <= 10; i++) {

//     if (i === 5) {
//         continue;
//     }
//     if (i === 7) {
//         continue
//     }
//     if (i === 9) {
//         continue
//     }
//     document.write(i)
// }

{

    // const Data = new Map(
    //     [
    //         ["option-1", 20],
    //         ["option-2", 22],
    //         ["option-3", 23],
    //         ["option-4", 24],
    //         ["option-5", 25]
    //     ])
    // console.log(Data);
    // console.log(Data.size);

}


// get
{
    // const newmap = new Map(
    //     [
    //         ["option-1", 20],
    //         ["option-2", 22],
    //         ["option-3", 23],
    //         ["option-4", 24],
    //         ["option-5", 25]
    //     ])
    // console.log(newmap);
    // console.log(newmap.size);
    // // console.log(newmap.get('option-1'));
    // console.log(newmap.delete('option-1'));
    // console.log(newmap);

}

// has

// const newmap = new Map(
//     [
//         ["option-1", 20],
//         ["option-2", 22],
//         ["option-3", 23],
//         ["option-4", 24],
//         ["option-5", 25]
//     ])

//     console.log(newmap);
//     const has =  newmap.has('option-1')
//     console.log(has);       


// maths object

//Math.E

// let math1 = Math.E
// console.log(math1); 


// Math.round()

// let math2 = Math.round(10.2)
// console.log(math2);


// let math1 = Math.ceil(10.1)
// console.log(math1);

// let math2 = Math.floor(10.9)
// console.log(math2);


//Math.trunc():-

// let math1 = Math.trunc(-122323242.24242424)
// console.log(math1);



// Math.sign

// let math1 = Math.sign(-1345553)
// console.log(math1);



// let math1 = Math.sign(1345553)
// console.log(math1);




// Math.pow()

// let math2 = Math.pow(3 , 4)
// console.log(math2);


// Math.sqrt()

// let math4 = Math.sqrt(25)
// console.log(math4);


//Math.abs():-

// let math10 = Math.abs(-200);
// console.log(math10);   //not show nagativ value


// Math.min() and Math.max():-

// let  math22 = Math.min(101 , -20 , 60  , 87  , 50)
// let  math23 = Math.max(101 , -20 , 60  , 87  , 50)
// console.log(math22);
// console.log(math23);


// Math.random()

// let math13 = Math.random()
// console.log(math13);



// javascript String Method

// let String1 = "Hello World"
// let String2 = 'Hello World'
// let String3 = `Hello World`

// console.log(String1);
// console.log(String2);
// console.log(String3);

// 1) String length

// let String1 = "WHAT ARE MOST SIMPLE FOO."
// console.log(String1.length);


// let String1 = 'WHAT ARE MOST SIMPLE FOO.'
// let String2 = String1.charAt(2)
// console.log(String2);


// String replaceAll()

// let String1 = 'WHAT ARE MOST SIMPLE FOO.'
// let String2 = String1.replace("WHAT" , "vasu")
// console.log(String2);


/****** String toUpperCase() ******/

// let String1 = "This is most common langauage"
// let String2 = String1.toUpperCase();
// console.log(String2);



/******  String toLowerCase() ******/

// let String4 = "This is most common langauage"
// let String1 = String4.toLowerCase();
// console.log(String1);

/******  String concat() ******/

// let String11 = "Hello"
// let String12 = "world"
// let String13 = String11.concat(String12)
// console.log(String13);


/******  String trim() ******/

// let String11 = "   This is most common lecture!   "
// console.log(String11);
// let String2 = String11.trim()
// console.log(String2);

/******  String trimStart() ******/

// let String12 = "   This is most common lecture!   "
// console.log(String12);
// String13 = String12.trimStart()
// console.log(String13);


/******  String trimEnd() ******/


// let String1 = "   This is most common lecture!   "
// console.log(String1);
// let String11 = String1.trimEnd();
// console.log(String11);


/******  String padStart() ******/  

let String1 = "This is Common langauage!"
console.log(String1);

