/*  JavaScript Date Objects  */

// In JavaScript, date and time are represented by the Date object. The Date object provides the date and time information and also provides various methods.

// A JavaScript date defines the EcmaScript epoch that represents milliseconds since 1 January 1970 UTC. This date and time is the same as the UNIX epoch (predominant base value for computer-recorded date and time values).

// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

// The epoch, timestamps, and invalid date
// A JavaScript date is fundamentally specified as the time in milliseconds that has elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC (equivalent to the UNIX epoch). This timestamp is timezone-agnostic and uniquely defines an instant in history.

// Note: While the time value at the heart of a Date object is UTC, the basic methods to fetch the date and time or its components all work in the local (i.e. host system) time zone and offset.

// The maximum timestamp representable by a Date object is slightly smaller than the maximum safe integer (Number.MAX_SAFE_INTEGER, which is 9,007,199,254,740,991). A Date object can represent a maximum of ±8,640,000,000,000,000 milliseconds, or ±100,000,000 (one hundred million) days, relative to the epoch. This is the range from April 20, 271821 BC to September 13, 275760 AD. Any attempt to represent a time outside this range results in the Date object holding a timestamp value of NaN, which is an "Invalid Date".

// As a UTC time, it is midnight at the beginning of January 1, 1970, UTC,
// As a local time in New York (UTC-5), it is 19:00:00 on December 31, 1969.


/*

new Date()
new Date(date string)
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(milliseconds)

*/


// let Date1 = new Date();
// console.log(Date1);
// let Date2 = new Date("02-08-2024")
// // // month and date
// console.log(Date2);
// let Date3 = new Date(2023 , 4)
// console.log(Date3);
// let Date4 = new Date(2025 , 4 , 26)
// console.log(Date4);
// let Date5 = new Date(2023 , 4, 26 , 16)
// console.log(Date5);
// let Date6 = new Date(2023 , 4, 26 , 16 , 12)
// console.log(Date6);
// let Date7 = new Date(2023 , 4, 26 , 16 , 12  , 59)
// console.log(Date7);
// let Date8 = new Date(120000)
// console.log(Date8);










/* javascript ISO standard time */

// {
//     const dates = new Date(2023 ,  3 , 16 , 6 , 15 , 20)
//     console.log(dates);
//     console.log(dates.toString());
//     console.log(dates.toDateString());
//     console.log(dates.toUTCString());
//     console.log(dates.toISOString());
  // }
  
  /* JavaScript Date Formats */
  
  /* ISO Date , Short Date  , Long Date */
  


  // ISO Date
  // {
    // const dates = new Date("2024");
    // console.log(dates);                         //1 january 
  // }  
  
  /* ShortDate */
  
  // {
    // const dates = new Date("03/25/2023");
    // console.log(dates);
  // }
  
  /* LongDate */
  
  // {
    // const dates = new Date("march 23 2023");
    // console.log(dates);
  // }
  
  // {
  //   const dates = new Date("23 march 2023");
  //   console.log(dates);
  // }
  
  /*  Date Input - Parsing Dates */
  
  // {
  //   let msec = Date.parse("october 21, 2002");
  //   console.log(msec);
  // }
  
  
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

let date3 = date1.getMonth();
console.log(date3);

let date4 = date1.getDate();
console.log(date4);


let date5 = date1.getDay();
console.log(date5);

let date6 = date1.getHours();
console.log(date6);

let date7 = date1.getMinutes();
console.log(date7);


let date8 = date1.getSeconds();
console.log(date8);


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

let date12 = date11.setDate(12);
console.log(date11);

let date13 = date11.setFullYear(2023);
console.log(date11);


let date14 = date11.setHours(22);
console.log(date11);

// let date15 = date11.setMilliseconds(3000)       //current date to 3 minuters pules because 1000 Milliseconds to 1 second
// console.log(date11);


let date16 = date11.setMinutes(34)
console.log(date11);

let date17 = date11.setSeconds(59);
console.log(date11);

  
  
    
    