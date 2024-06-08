// Javascript String Method

// let v  =  "hello world";
// let vv = 'hello world';
// let vvv = `hello world`;

// console.log(v);
// console.log(vv);
// console.log(vvv);



// string Object

// let bb = new String("hello world")
// console.log(bb);

/******  javascript string method ******/

// String length
// String charAt()
// String slice()
// String substring()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charCodeAt()
// String split()
// String includes()


// follow this String :- hello how are you;

// let  rr =  "hello how are you"
// console.log(rr.length);



/******  String charAt() ******/

// let rr = "hello how are you"

// let rrr = rr.charAt(6)
// console.log(rrr);



/****** String slice() return New String ******/

// let  oo = "hello how are you"
// let ooo1 = oo.slice(4)
// let ooo2 = oo.slice(-5)
// let ooo3 = oo.slice(-3 , 6)
// let ooo4 = oo.slice(3 , -6)   //lo how a
// console.log(ooo1);
// console.log(ooo2);
// console.log(ooo3);
// console.log(ooo4);



/****** String replace() ******/

// let oooo = "hello how are you"
// let v1 = oooo.replace("hello", "hi")
// console.log(v1);




/******  String substring() return New String ******/


// let y6 = "hello how are you"
// let y7 = y6.substring(3)
// let y8 = y6.slice(3)
// let y9 = y6.substring(-3)
// let y10 =  y6.slice(-10)
// let y11 = y6.slice(10 , -1)
// let y12 = y6.slice(-10, 1)
// console.log(y12);
// console.log(y11);


/****** String replace() ******/


// let ll = "WHAT ARE MOST SIMPLE FOO."
// let vv = ll.replace("Most" , "index")
// let vvv = ll.replace("MOST" , "index")
// console.log(vv);
// console.log(vvv);



/****** String toUpperCase() ******/

// let vasu =  "hello how are you vasu"
// let v1 = vasu.toUpperCase();
// console.log(v1);



/******  String toLowerCase() ******/


// let vasu =  "HELLO HOW ARE YOU VASU"
// let v1 = vasu.toUpperCase();
// console.log(v1);



/******  String concat() ******/

// let vasu = "HELLO HOW"
// let vihar = "ARE YOU VASU"

// let v2 = vasu.concat( " "+ vihar);
// console.log(v2);


/******  String trim() ******/

// let vasu = "   HELLO HOW ARE YOU VASU   "
// console.log(vasu);
// console.log(vasu.length);
// let v4 = vasu.trim();      // use a trim funtion not count space in string only count content
// console.log(v4);
// console.log(v4.length);


/******  String trimStart() ******/

// let vasu = "   HELLO HOW ARE YOU VASU   "
// console.log(vasu);
// console.log(vasu.length);
// let v4 = vasu.trimStart();      // not count stat spaces
// console.log(v4);
// console.log(v4.length);


/******  String trimEnd() ******/


// let vasu = "   HELLO HOW ARE YOU VASU   "
// console.log(vasu);
// console.log(vasu.length);
// let v5 = vasu.trimEnd()
// console.log(v5);             // not count end spaces
// console.log(v5.length);



/******  String padStart() ******/

// let v = "VAGHASIYA VASU"
// console.log(v);
// console.log(v.length);

// let v1 = v.padStart(19 , "V")
// console.log(v1);


/******  String padEnd() ******/

// let v = "VAGHASIYA VASU"
// console.log(v);
// console.log(v.length);

// let v1 = v.padEnd(19 , "V")
// console.log(v1);




/******  String charCodeAt() ******/



// let String46 = "This is most CoMmon!"
// let String47  = String46.charCodeAt(15);
// console.log(String47);    /////////////////////////////////////////////////////////





/****** String split() ******/


// let kk = "HELLO EVERYONE BRO"
// console.log(kk);
// let kkk = kk.split("")    // split funtion word convert string to arraty formate
// console.log(kkk);




/******  String includes() , true and false ******/



// let vv= "vaghasiya vasu"
// console.log(vv);

// let bbb =  vv.includes("vasu")
// console.log(bbb);





/* JAVASCRIPT STRING METHOD */

// String indexOf()
// String lastIndexOf()
// String search()
// String includes()
// String startsWith()
// String endsWith()
// String match()
// String matchAll()


/******   String indexOf() ******/

// let pp= "VAGHASIYA VASU"
// console.log(pp);

// let ll = pp.indexOf("V" , 5)  //  V IS INDEX NUMBER 10 AND START 5 INDEX NUMBER
// console.log(ll);



/******   String lastIndexOf() ******/


// let uu =  "VAGHASIYA VASUV"
// console.log(uu);
// let oo = uu.lastIndexOf("V" , 11)       last V index=10     //  11 means 11 index thi start and last V
// console.log(oo);



/******  String search() ******/


// let g1 = "VAGHASIYA VASU"
// console.log(g1);  
// let yy = g1.search("S")     // search a string and show index number
// console.log(yy);


/******  String startsWith() ******/

// let g1 = "VAGHASIYA VASU"

// console.log(g1);
// let yy = g1.startsWith("V");    // Find a start string and return ture and false ==> V is start string and return true  
// console.log(yy);


// /******  String endWith() ******/

// let String58 = "Why Need Form Valiadation In Web Development  "
// console.log(String58);
// let String59 = String58.endsWith(" "); // Find a end string and return ture and false ==> "space" is end string and return true  
// console.log(String59);

// -----------------------------------


// let String60 = "Why Need Form Valiadation In Web Development  "
// console.log(String60);
// let String61 = String60.endsWith("P");     // Find a end string and return ture and false ==> "space" is end string and return true  
// console.log(String61);




// const yyy = {
//         firstname : "vasu",
//         lastname : "vaghasiya"
// }
const yy = ["tt", "pppp"];
console.log(yy);
console.log(typeof(yy));