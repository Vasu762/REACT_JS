// javascript Asyncronous Method

/* settimeout method */

// setTimeOut(funtion , delay , perameter1 ,  peramete2 , ......)


// setTimeout(
//     funtion(){

//     }, delaytime
// )


// 1 method
function print(){
    console.log("Hello Javascipt");
}

setTimeout(print , 5000)
//  (call , time)


// 2 method

// setTimeout(
//     function greet(){
//         console.log("hello vasu");
//     } , 5000
// )


// arrow

// setTimeout(
//     () => console.log("hello vasu"), 3000
// )


// parameter
// function greet(name , age){
//     console.log(`Your name is ${name} and age ${age}`);
// }

// setTimeout(greet , 5000 , "vasu" , 20)       




/* Intrerval method */

// Intrerval(funtion , delay , perameter1 ,  peramete2 , ......)


// setInterval(
//     function greet() {
//         console.log("hello vasu");
//     }, 2000
// )


// function print(){
//     console.log("hello how are you!");
// }

// setInterval(print , 1000)


// arrow
// setInterval(
//     () => console.log("hello vasu") , 3000
// )



// function vasu(name, age) {
//     console.log(`what is Your name ${name} and what is Your age ${age}`);
// }
// setInterval(vasu, 2000, "raja", 30)


// task
// current time print every 3 second


// function showTime() {

//     let dateTime = new Date();

//     let time = dateTime.toLocaleTimeString();

//     console.log(time)

//     setTimeout(showTime, 3000);
// }

// showTime();

// --------------------------------------


/* SetInterval Id */

// function raja(name , age){
//     console.log(`Your name is ${name} and age is ${age}`);
// }

// let yy = setInterval(raja , 2000 , "raj" , 50)
// let y = setInterval(raja , 5000 , "r" , 50)


// console.log("this is  ID raj" , yy);
// console.log("this is  ID r" , y);




































// JavaScript Promise Chaining

// Promise are useful when you have to handle more the one asynchronous task, one after another. For than one asynchronous task, one another. For that, we use promise chaining.


// You can perfome an operation after a Promise is resolved using method then() , catch() and finally().

// Javascipt then() method

// The then() method is used with the callbake when the promise is successfully fulfilled or rsolved.

//The syntax of then() method is

{
    // PromiseObject.then(onFulfilled, onRejected);
}

// Chainig the Promise with then()

{
    // let countValue = new Promise(function (resolve, reject) {
    //     resolve("Promise is  resolve");
    // });


    // countValue
    //     .then(function successValue(result) {
    //         console.log(result);
    //     })

    // .then(function successValue1() {
    //     console.log("You can call multiple funtions this way.");
    // });

}

// the then() method is used to chain the functions to the promise. The then() method is called when the promise is resolved  successfully

// You can chain multiple then() methods with the promise.


// JavaScript catch() method

// The catch() method is used with the callback when the promise is rejected or if an error occurs.


{
    let countValue = new Promise(function (resolve, reject) {
        reject('Promise is not rejected')
    });

    countValue.then(
        function successValue() {
            let vasu = 8 * 10
            let raja = 5 * 55
            console.log(raja);
            console.log(vasu);
        }
    )


        .catch(
            function successValue() {
                let vasu = 9 * 10
                // console.log(vasu);
            }
        );
}


// Javascipt Promise versus callback

// Promise are similar to callback funtions in a sense that they both can be used to handle  asynchronous tasks.

// JavaScipt callback funtions can also be used to perform asynchronous tasks.

// JavaScript Promise

// The syntax is user-friendly and easy to read.

// Error handling is easier to manage.


// JavaScipt Callback
// The syntax is difficult to understand.
// Error handling may be hard to manage.


// {
//     api(funtion(result){
//         api2(funtion(result2){
//             api3(funtion(result3){
//         //do work
//         if(error) {
//             // do something
//         }
//             else{
//             // do something
//         }
//     });
// });

//     });
// }


// JavaScipt finally() method

{
    // You can also use the finally() method with promise. The finally() method gets execute when the promise is eithwer resolved successfully or rejected.  

    // let countValue = new Promise(function(resolve ,reject){
    //     reject();
    // });


    // countValue.finally(
    //     function greet(){
    //         console.log('this code is execute.');
    //     }
    // );
}

// -----

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(
//         function () {
//             console.log('Hello Promise');
//             resolve();
//         }, 5000
//     )
// })



// promise.then(function () {
//     setTimeout(
//         function () {
//             console.log('First Then Funtion');
//         }, 1000
//     )
// })


//     .then(function () {
//         setTimeout(
//             function () {
//                 console.log('Second Then Funtion');
//             }, 2000
//         )
//     })


//     .then(function () {
//         setTimeout(
//             function () {
//                 console.log('Third Then Funtion');
//             }, 3000
//         )
//     })


//     .then(function () {
//         setTimeout(
//             function () {
//                 console.log('Fourth Then Funtion');
//             }, 4000
//         )
//     })


//     .then(function () {
//         setTimeout(
//             function () {
//                 console.log('fifth Then Funtion');
//             }, 5000
//         )
//     })


//     .catch(function (result) {
//         console.log(result);
//     })


//     .finally(function () {
//         console.log('task complete!.');
//     })

