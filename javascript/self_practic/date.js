// new Date()
// new Date(date string)
// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// // new Date(milliseconds)



// let Date1 = new Date()
// console.log(Date1);                 //show corrent Date Today


// let  date2 = new Date("1-1-2024")
// console.log(date2);


// let date3 = new Date(2024 , 2)
// console.log(date3);


// let date4 = new Date(2024 , 2 , 26)                            // Tue Mar 26 2024 00:00:00 GMT+0530 (India Standard Time)
// console.log(date4);                                          // month started always index number (0-11)


// let date5 = new Date(2024 , 9 , 13 , 12)                        // month started always index number (0-11)
// console.log(date5);                                               //Sun Oct 13 2024 12:00:00 GMT+0530 (India Standard Time)


// // let date6 = new Date(2024 , 8 , 9 , 9 , 9)                     // Mon Sep 09 2024 09:09:00 GMT+0530 (India Standard Time)
// console.log(date6);                                              // month started always index number (0-11)



// let date7 = new Date(2024 , 8 , 9 , 9 , 9 , 59)
// console.log(date7);                                                // Mon Sep 09 2024 09:10:00 GMT+0530 (India Standard Time)


// let Date8 = new Date(120000)                                        milliseconds since 1 January 1970 UTC
// console.log(Date8);                                             Thu Jan 01 1970 05:32:00 GMT+0530 (India Standard Time)



/* javascript ISO standard time */

// const dates = new Date(2023 ,  3 , 16 , 6 , 15 , 20)
// console.log(dates);
// console.log(dates.toString());
// console.log(dates.toDateString());
// console.log(dates.toUTCString());
// console.log(dates.toISOString());



/* JavaScript Date Formats */

/* ISO Date , Short Date  , Long Date */


// const date = new Date("2024")                   //Mon Jan 01 2024 05:30:00 GMT+0530 (India Standard Time)
// console.log(date);                               always started date 1-1-year and always time started 05:30:00




/* ShortDate */

{
    // const date = new Date("03/02/2024")     //Sat Mar 02 2024 00:00:00 GMT+0530 (India Standard Time)
    // console.log(date);
}

/* LongDate */

{
    // const date = new Date("march 23 2023")
    //  console.log(date);                      //Thu Mar 23 2023 00:00:00 GMT+0530 (India Standard Time)
}

// 
{
    // const date = new Date("23 march 2022")
    // console.log(date);                      //Wed Mar 23 2022 00:00:00 GMT+0530 (India Standard Time)
}



/*  Date Input - Parsing Dates */

//   {
//     let msec = Date.parse("october 21, 2002");        ///////////////////       
//     console.log(msec);
//   }






/* JavaScript Get Date Methods */

/*
 
getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970)
 
*/


let date1 = new Date();
console.log(date1);

let date2 = date1.getFullYear();
console.log(date2);

// let date3 = date1.getMonth();
// console.log(date3);

// let date4 = date1.getDate();
// console.log(date4);


// let date5 = date1.getDay();
// console.log(date5);

// let date6 = date1.getHours();
// console.log(date6);

// let date7 = date1.getMinutes();
// console.log(date7);


// let date8 = date1.getSeconds();
// console.log(date8);


// let date9 = date1.getMilliseconds();
// console.log(date9);


// let date10 = date1.getTime();
// console.log(date10);

/*  JavaScript Set Date Methods */


/*
 
setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (optionally month and day)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970)
 
*/


let date11 = new Date();
console.log(date11);

// let date12 = date11.setDate(12);
// console.log(date11);

// let date13 = date11.setFullYear(2023);
// console.log(date11);


// let date14 = date11.setHours(22);
// console.log(date11);

// let date15 = date11.setMilliseconds(3000)       //current date to 3 minuters pules because 1000 Milliseconds to 1 second
// console.log(date11);


// let date16 = date11.setMinutes(34)
// console.log(date11);

// let date17 = date11.setSeconds(59);
// console.log(date11);


        







