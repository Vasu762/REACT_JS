/* Break , Continue and Nested Statements */


/*  The break statement is used to terminate the loop immediately when it is encountered. */

{
    for (let counter = 0; counter <= 10; counter++) {
        if (counter == 6) {
            break;
        }
        document.write(counter);
        document.write("<br>");
    }
}

{
     for(let counter = 1; counter <= 10 ; counter++){
     if(counter == 5){
          continue;
     }
     if(counter == 6){
          continue;
     }
     if(counter == 7){
        continue;
   }
     document.write(counter);
     document.write("<br>");
     }
}

// {
//     for(let i = 1; i<=10 ; i++){
//         if(i==5){
//             break;
//         }
//         document.write(i);
//         document.write("<br>");
//     }
// }


// {
//     for(let u = 1 ; u <= 10 ; u++){
//         if(u == 2){
//             continue;
//         }
//         if(u == 4){
//             continue;
//         }
//         document.write(u);
//     }
// }

// ---------------------
// {
//      link: for(let counter = 1; counter <= 10 ; counter++){

//      document.write(counter);
//      document.write("<br>");

//      for(let counter2 = 1; counter2 < 4; counter2++){

//           if(counter == 3){
//           break link;
//           }
//           document.write("Hello");
//           document.write("<br>");
//      }
//      }
// }