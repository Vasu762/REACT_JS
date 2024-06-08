// 1. Countdown using  while loop

// for loop

// var i = 1;

// for(i, i<=10; i++;){
//     document.write("vaghasiya vasu n..");
// }


// while


// {
//     let i = 10;

//     while(i>=1){
//         document.write(i + "<br>")
//         i--;
//     }
// }


// do-while


// let i = 10;

// do{
//     document.write(i + "<br>")
//     i--;
// }while(i>=1);


// 2. Sum of numbers from 1 to 10 using a while loop


// var i = 1;
// var sum=0;

// for ( i, i<=10; i++;){
//     sum=sum+i;
// }
// document.write(sum);




// while
// {
//         var i = 1;
//         var sum = 0;

//         while (i <= 10) {

//             sum = sum + i;
//             i++;
//         }
//         document.write(sum);

//     }


// do-while

// var i = 1;
// var sum = 0;

// do {
//     sum = sum + i;
//     i++;
// } while (i <= 10 );
// document.write(sum);






// 3. Multiplication table for a given number using a while loop


// for

// var n  =  prompt();


// for(i=1;  i<=10; i++){



//    let  c = n * i;

//    document.write(c + "<br>");

// }



// while


// {
//     let n = 5;
//     let i = 1;

//     while (i <= 10) {

//         let c = n * i;

//         document.write(c + "<br>");
//         i++;
//     }
// }



// do - while

// let n = 5;
// let i = 1;
// do {

//     let c= n * i;

//     document.write(c + "<br>");
//     i++;
// } while (i <= 10)


// 1 * n = ans
// 2 * n = ans
// 3 * n = ans
// 4 * n = ans
// 5 * n = ans
// 6 * n = ans




// 5. fibonacci series


// for
// let a = 0;
// let b = 1;
// let c;

// let n = prompt()

// for(i = 0 ; i<=n ; i++){
//     document.write(a  + "<br>");
//         c = a + b;
//         a = b;
//         b = c;
// }




// while

// let a = 0;
// let b = 1;
// let c;
// let i = 1;

// let n = 20;

// while (i <= n) {
//     document.write(a + "<br>");
//     i++;
//     c = a + b;
//     a = b;
//     b = c;
// }



// do - while


// let a = 0;
// let b = 1;
// let c;
// let i = 1;

// let n = 20;

// do {
//     document.write(a + "<br>");
//     i++;
//     c = a + b;
//     a = b;
//     b = c;
// }while(i <= n);





// 6 factorial Number




// for
// let n = prompt();

// fact=1;

// for(i=1; i<=n; i++){
//     fact = fact * i;
// }
// document.write(fact);



// while
// let n = 5;
// let i = 1;

// fact = 1;

// while (i <= n) {

//     fact = fact * i;
//     document.write(fact + "<br>")
//     i++;

// }





// do - while
// let n = 5;
// let i = 1;

// fact = 1;

// do{
//     fact = fact * i;
//     document.write(fact + "<br>")
//     i++;

// }while(i<=n)



//    1*1    =>   1   
//    1*2    =>   2
//    2*3    =>   6
//    6*4    =>   24
//    24*5   =>   120



//8. Calculate the power of a number using a while loop














































// breack statment

// 10. search for a specific number using loop and brack statement


// {
//     let n = prompt();

//     for(i=0 ; i<=100; i++){
//         if(i==n){
//             break;
//         }
//         document.write(i + "<br>");
//     }

// }


// 11. find the first odd number using a for loop and breack statement

// {

//     // let n = prompt();

//     for(i=1; i<=10 ; i++){
//         if(i % 2!==0){
//             break;
//         }
//         document.write(i);
//     }
// }















































// continue statement

// 14. skip printing odd number using a for loop and continues satement


// let n = prompt();

// for(i=0; i<=n; i++){
//     if(i%2!==0){
//         continue;
//     }
//     document.write(i + "<br>");
// }



// 15. skips multipes of 3 using a while loop and conditional statement

// for(i=0; i<=100; i++){
//     if(i%3 == 0){
//         continue;
//     }
//     document.write(i + "<br>");
// }



// let i = 0;

// while (i <= 100) {
//     if (i % 3 == 0) {
//         i++;
//         continue;
//     }
//     document.write(i + "<br>");
//     i++;

// }




// 16. skip printing odd number using a for loop and continues satement


// let n = prompt();

// for(i=0; i<=n; i++){
//     if(i%2!==0){
//         continue;
//     }
//     document.write(i + "<br>");
// }



// 17. skip numbers divisible by 5 using do - while loop continue statement

// let n = prompt()

// for(i=0; i<=n; i++){
//     if(i%5 == 0){
//         continue;
//     }
//     document.write(i  + "<br>");
// }



// do-while

// let n = prompt()

// do {
//     if (i % 5 == 0) {
//         i++;
//         continue;
//     }
//     document.write(i + "<br>");
//     i++;

// } while (i <= n)




