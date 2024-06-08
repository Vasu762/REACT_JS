// JavaScript Number Methods

/*

toString()	      Returns a number as a string
toExponential()	  Returns a number written in exponential notation
toFixed()	        Returns a number written with a number of decimals
toPrecision()	    Returns a number written with a specified length
ValueOf()	        Returns a number as a number

*/

/* toString() */


let Number1  = 150  

// let Number2 = Number1.toString()
// console.log(Number2)
// console.log(typeof(Number2))

// let Number3 = (89+20).toString()
// console.log(Number3)
// console.log(typeof(Number3));

// let Number4 = Number1.toString()
// console.log(Number4)
// console.log(typeof(Number4));


// {
//   let t= 120;

//   let r = (2*2).toString();
//   console.log(r);
//   console.log(typeof(r));
// }

/*  toExponential() */


// toExponential() returns a string, with a number rounded and written using exponential notation.

  // let  a = 225000

  // let b  = a.toExponential()
  // console.log(b)
  // let c = a.toExponential(10)   
  // console.log(c)                 //2.2500000000e+7 
  

  // let y = a.toExponential(2)
  // console.log(y);

  // let a = 512486
  // console.log(a.toExponential(3));

/*  toFixed() */
let fix1 = 54545

let fix2 = fix1.toFixed()
console.log(fix2)                    //5
let fix3  = fix1.toFixed(10)
console.log(fix3)                   //5.4545000000




/* toPrecision()pre */


// {
  let pre1 = 5
  let pre2 = pre1.toPrecision(1)
  let pre3 = pre1.toPrecision(2)     ////////////////
  let pre4 = pre1.toPrecision(3)
  let pre5 = pre1.toPrecision(4)
  let pre6 = pre1.toPrecision(5)
  let pre7 = pre1.toPrecision(6)

  // console.log(pre1)   //5
  // console.log(pre2)   //5
  // console.log(pre3)   //5.0
  console.log(pre4)   //5.00
  console.log(pre5)   //5.000
  console.log(pre6)   //5.0000
  console.log(pre7)   //5.00000
// }


/* ValueOf()  */

// {
  // const numbers = 150
  // let Number1  = numbers.valueOf()
  // let Number2  = (15-26).valueOf()
  // let Number3  = (255*5).valueOf()
  // console.log(Number1)
  // console.log(Number2)
  // console.log(Number3)
  // console.log(typeof(Number3))

// }



  // let vv= 122;
  // let v = vv.valueOf()
  // console.log(v);
  // console.log(typeof(v));


  // var l = (22-9).valueOf()
  // console.log(l); 
  // console.log(typeof(l));
// }


