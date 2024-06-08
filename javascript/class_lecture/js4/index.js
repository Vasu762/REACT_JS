/*  JavaScript Statement */

/* In JavaScript, there are three forms of the if...else statement. */

/* 

if statement
if...else statement
if...else if...else statement  

*/

/* Flow Chart of if-else */

/*  JavaScript supports the following forms of if..else statement */

/*
   1. if statement
      
   2. if...else statement
   
   3. if...else if... statement.

   4. switch statement

*/

/* if statement */

{
   //  if (expression) {
   //      Statement(s) to be executed if expression is true
   //   }
}

/* if...else statement */

//  let age = 17;

//  if(age >= 18){
//     console.log("You Are Aligible");
//  }
//  else{
//     console.log("Not Aligible");
//  }
//  console.log("Hello");


{
   //  if (expression) {
   //      Statement(s) to be executed if expression is true
   //   } else {
   //      Statement(s) to be executed if expression is false
   //   }
}


/* if...else if... statement */

/* The if...else if... statement is an advanced form of if…else that allows JavaScript to make a correct decision out of several conditions. */


{
   //  if (expression 1) {
   //      Statement(s) to be executed if expression 1 is true
   //   } else if (expression 2) {
   //      Statement(s) to be executed if expression 2 is true
   //   } else if (expression 3) {
   //      Statement(s) to be executed if expression 3 is true
   //   } else {
   //      Statement(s) to be executed if no expression is true
   //   }
}


/* There is nothing special about this code. It is just a series of if statements, where each if is a part of the else clause of the previous statement. Statement(s) are executed based on the true condition, if none of the conditions is true, then the else block is executed. */

//  {
//      var r = prompt();

//      if( r === 'history' ) {
//         document.write("<b>History Book</b>");
//      }

//      else if( r == "maths" ) {
//         document.write("<b>Maths Book</b>");
//      }

//      else if( r == "economics" ) {
//         document.write("<b>Economics Book</b>");
//      }
//      else {
//         document.write("<b>Unknown Book</b>");
//      }
//  }


// {
//    var t = prompt();

//    if(t === "vasu"){
//       console.log("this is vasu");
//    }
//    else if (t == "raju"){
//       console.log("this is raju");
//    }
//    else{
//       console.log("plase enter valid name");
//    }
// }

/* switch statement */

// if input = 1, "y", "yes" output = Continue....
// if input = 0, "n", "no" output = End...

//  {

//     let input = "n";

//     if (input === "1"){
//        document.write("Continues..")
//     } else if (input === "y"){
//        document.write("Continues..")
//     }
//     else if (input === "yes"){
//        document.write("Continues..")
//     }
//     else if (input === 0){
//        document.write("End..")
//     }
//     else if (input === "n"){
//        document.write("End..")
//     }
//     else if (input === "no"){
//        document.write("End..")
//     }
//     else{
//        document.write("Wrong input")
//     }
//  }

/*  === comparison */

{
   let input = 0;

   switch (input) {
      case 1:
         document.write("Continue...");
         break;
      case "y":
         document.write("Continue...");
         break;
      case "yes":
         document.write("Continue...");
         break;
      case 0:
         document.write("End...");
         break;
      case "n":
         document.write("End...");
         break;
      case "no":
         document.write("End...");
         break;
      default:
         document.write("Wrong input");
   }
}


// {
//    let input = 2;
//    switch (input) {
//       case 1:
//          let v = 12;
//          let m = 2;
//          let h = v * m;
//          document.write(h);
//          break;

//          case 2:
//             let vv = 12;
//             let vvv= 15;
//             let vvvv = vv * vvv;
//             document.write(vvvv);
//             break;

//             case 3:
//                let ll = 12;
//                let lll= 4;
//                let llll = ll * llll;
//                document.write(llll);
//                break;



//    }
// }


// {

//    let i = prompt("enter i number")
//    if (i < 88) {
//       alert("i is small")
//    }
//    else {
//       alert("i is big")
//    }
// }


// 1) write a javascript program funtion to check if a give string is a palidrome or not

// function palidrome(vasu) {
//    const split = vasu.split('');
//    const reverse = split.reverse()
//    const join = reverse.join('')


//    if (vasu == join) {
//       console.log("it is palindrome");
//    }
//    else {
//       console.log("it is not palindrome");
//    }
// }
// palidrome('lkpkpl')