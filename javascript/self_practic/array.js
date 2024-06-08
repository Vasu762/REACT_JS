/* Javascript Array */

// let newarry = [1,false,"string"]
// console.log(newarry);                            //[1,false,"string"]
// console.log(newarry.length);                   //3


// let newarry2 = ["apple" , "banana" , "watermelon" ,  , "lichi"]
// console.log(newarry2);
// console.log(newarry2[4]);                      //lichi
// console.log(Object.keys(newarry2));            // key object is not empty value show position values    ==>['0', '1', '2', '4']
// console.log(newarry2.length);                 //5

// newarry2.length = 10;
// console.log(newarry2);                      //['apple', 'banana', 'watermelon', empty, 'lichi', empty × 5]
// console.log(Object.keys(newarry2));         //['0', '1', '2', '4']

// newarry2[0] = "Graps"                        //array2 0 index change name apple to  Graps
// console.log(newarry2);                       // ['Graps', 'banana', 'watermelon', empty, 'lichi']
// let newstring  = newarry2.toString();        //arrray to string
// console.log(newstring);                       //  Graps,banana,watermelon,   ,lichi
// console.log(typeof(newstring));               //string  





// ------------------------------------------------


// Array indexes start with 0:

// [0] is the first array element
// [1] is the second 
// [2] is the third ...




/* Array length properties */

// let arry = ["option-1" , "gamit" , false , 1 , "skill" , "development"];
// console.log(arry);
// console.log(arry[0]);                    //   option-1    
// console.log(arry[5]);                    //   development
// arry.push("frontend");                                       
// console.log(arry);                      // last add to fronted 
// arry.pop()                              // last frontend remove
// arry.pop()                              //last development 
// arry.pop()                              //last skill
// console.log(arry);

// arry[0] = "one"

// console.log(arry);                     //  ['option-1', 'gamit', false, 1]  change value   ['one', 'gamit', false, 1]






/* The length property provides an easy way to append new elements to an array without using the push() method. */



/* The join() method also joins all array elements into a string. */

{
    // let arry = ["option-1", "gamit", false, 1, "skill", "development"];
    // let arry2 = arry.join("+")      
    // console.log(arry2);               //joint of array
    // console.log(typeof(arry2));        //string


}

/* Popping in javascript Array */

// {
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits;
// fruits.pop();
// document.getElementById("demo-1").innerHTML = fruits;

// console.log(fruits);                //Banana,Orange,Apple,Mango
//Banana,Orange,Apple

// console.log(fruits.length);
// }

/* The pop() method returns the value that was "popped out" */

// {
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// document.getElementById("demo").innerHTML = fruits;

// document.getElementById("demo-1").innerHTML = fruits.pop();
// document.getElementById("demo-2").innerHTML = fruits.pop();
// document.getElementById("demo-3").innerHTML = fruits.pop();




// console.log(fruits);                //banana
// }


/* Pushing in javascript Array */

/* The push() method adds a new element to an array (at the end) */

// {
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// document.getElementById("demo").innerHTML = fruits;

// fruits.push("Kiwi");                                //Banana,Orange,Apple,Mango,Kiwi

// document.getElementById("demo-1").innerHTML = fruits;

// console.log(fruits);
// }

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];

    // document.getElementById("demo").innerHTML = fruits.push("Kiwi");

    // document.getElementById("demo-1").innerHTML = fruits.length;             ////////////////////////////////
}

/* Shifting Elements */

/* JavaScript Array shift() */

/* The shift() method removes the first array element and "shifts" all other elements to a lower index */

{
    // let arry = ["option-1", "gamit",  false, 1, "skill", "development"];
    // let arry2 = arry.shift();
    // let arry3 = arry.shift();
    // console.log(arry2);               //option-1
    // console.log(arry);              // ['gamit', false, 1, 'skill', 'development']
    // console.log(arry3);            //gamit
    // console.log(arry);             // [false, 1, 'skill', 'development']
}

/*  The shift() method returns the value that was "shifted out" */
// 1) method shift()

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // console.log(fruits);
    // document.getElementById("demo").innerHTML = fruits.shift();             //Banana
    // document.getElementById("demo-1").innerHTML = fruits;                   //Orange,Apple,Mango
}

// 2) method shift()
{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // console.log(fruits);
    // document.getElementById("demo").innerHTML = fruits;         //Banana,Orange,Apple,Mango
    // fruits.shift();
    // document.getElementById("demo-1").innerHTML = fruits;     //Orange,Apple,Mango
}


/*  JavaScript Array unshift() */
/* The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements */

{
    //  let arry = ["option-1" , "gamit" , false , 1 , "skill" , "development"];
    //  arry.unshift("OneAuthor");
    //  console.log(arry);         // ['OneAuthor', 'option-1', 'gamit', false, 1, 'skill', 'development']
}

/* The unshift() method returns the new array length */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];           //////////////////////////////////
    // document.getElementById("demo").innerHTML = fruits.unshift("Lemon");
    // document.getElementById("demo-1").innerHTML = fruits;
}

/*  Changing Elements */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // console.log(fruits);             //   ['Banana', 'Orange', 'Apple', 'Mango']
    // fruits[10] = "Kiwi";
    // console.log(fruits);            //['Banana', 'Orange', 'Apple', 'Mango', empty × 6, 'Kiwi']
}

/* JavaScript Array add element */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];           ///////////////////
    // document.getElementById("demo").innerHTML = fruits;         //Banana,Orange,Apple,Mango
    // fruits[fruits.length] = "Kiwi";
    // document.getElementById("demo-1").innerHTML = fruits;
}

/* JavaScript Array delete() */

/* Array elements can be deleted using the JavaScript operator delete. */

/* Using delete leaves undefined holes in the array. */

/* Use pop() or shift() instead. */

{
    // let arry = ["option-1" , "gamit" , false , 1 , "skill" , "development"];
    // console.log(arry);                  //["option-1" , "gamit" , false , 1 , "skill" , "development"]
    // console.log(arry.length);           //6  
    // delete arry[4]          
    // console.log(arry);                  // ['option-1', 'gamit', false, 1, empty, 'development']
    // console.log(arry.length);           //6   

    // arry.length = 20;
    // console.log(arry);                  // ['option-1', 'gamit', false, 1, empty, 'development', empty × 14]

    // arry[16] = "skillQode"
    // console.log(arry);                  //["option-1" , "gamit" , false , 1 , "skill" , "development" , empty *10 , "skillQode",empty*3]
}

/* Merging (Concatenating) Arrays */

{

    // let arry1 = ["javascript" , "c" , "c++" , "python" , "html" , "css"];
    // let arry2 = ["kotlin" , "dart" , "nodejs"  , "php" , "wordpress"];
    // let arry3 = ["boostrap" , "tailwind" , "reactjs" , "nextjs"];

    // let arry4 = arry1.concat(arry2 , arry3)

    // console.log(arry4);

}

/* The concat() method does not change the existing arrays. It always returns a new array. */

/* Splicing and Slicing Arrays */

/* JavaScript Array splice() */


// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)

{
    // let arry1 = ["javascript", "c", "c++", "python", "html", "css"];
    // console.log(arry1);                         //['javascript', 'c', 'c++', 'python', 'html', 'css'] 
    // arry1.splice(2, 3, "reactjs", "nextjs")     //start index= 2 and   delete =3 and  add to "reactjs", "nextjs"
    // console.log(arry1);                         // ['javascript', 'c', 'c++', 'reactjs', 'nextjs']


}

// -----------------------method -2 ----------------------

{
    // let arry1 = ["javascript", "c", "c++", "python", "html", "css"];
    // console.log(arry1);
    // let arry2 = arry1.splice(3, 3, "reactjs", "nextjs")
    // console.log(arry2);         
    // console.log(arry1);
}



/* JavaScript Array slice() */

// slice()
// slice(start)
// slice(start, end)

{
    // let arry1 = [45 , 89 , 21 , 2 , 57 , 23]
    // console.log(arry1);
    // let arry2 = arry1.slice(0 , 3)          //start index 0 and end index = 3  but end index is not count
    // console.log(arry2);                 //[45, 89, 21]
    // console.log(arry1);
}


{
    // var vasu = ["raj" , "raja" , "rajan" , "raju"];
    //         //  -4    ,   -3   ,   -2    ,    -1
    // console.log(vasu);
    // var vasu1 = vasu.slice(-3 , -1)                 ////start index -3 and end index = -1  but end index is not count
    // console.log(vasu1);                             ////["raja" , "rajan"]
}

/*  Array.isArray */

{

    // var vasu = ["raj" , "raja" , "rajan" , "raju"];
    // var result1 = Array.isArray(["rose" , "kunal"])
    // console.log(result1);                       //true
    // var result2 = Array.isArray("hello how are you")
    // console.log(result2);                       //false


}

/*  javascript Sorting Array */

{
    //     let arry1 = ["javascript" , "c" , "c++" , "python" , "html" , "css"];
    //     console.log(arry1);

    //     let arry2 = arry1.sort()
    //     console.log(arry2);
    // }

    {

        // let vv = ["6", "8" , "3" , "9" ,  "5" , "1" , "7" , "2" , "4"];
        // console.log(vv);
        // let vvv = vv.sort()
        // console.log(vvv);           //['1', '2', '3', '4', '5', '6', '7', '8', '9']
    }

    /*  Reversing array */

    // {
    //     let arry1 = ["javascript" , "c" , "c++" , "python" , "html" , "css"];
    //     console.log(arry1);
    //     let arry2 = arry1.reverse();
    //     console.log(arry2);             //['css', 'html', 'python', 'c++', 'c', 'javascript']
}

/*  Number Sort *//////////////////

{
    // let arry1 = [189 , 45 , 56 , 128  , 10 , 150 ]
    // console.log(arry1);
    // let numbersorted = arry1.sort((a  , b) => a - b)
    // console.log(numbersorted);
}

/*  javascript array map() */

{
    //  const number1 = [56 , 798 , 345  ,35];
    //  console.log(number1);
    //  const number2 = number1.map(myFunction);

    //  const number3  = number2.sort((a, b) => a - b)

    //  console.log(number2);

    //  function myFunction(value){
    //      return value * 2;
    //  }
}


/*  javascript Array flatMap() */

{

    // let flatmap = [1 , 2 , 3 , 4]

    // let flatmap1 = flatmap.flatMap((num) => num === 3 ? [1,1] : 2)

    // console.log(flatmap1);
}

/* Javascript Array flat() */

{
    // let flatarray  = [10 , 20 , [22 , 33 , [44  , 55 ,[66 , 77]
    // let flatmap2  = flatarray.flat(3)
    // console.log(flatmap2);
}

/* javascript array filter() */

{

    // let filterarry = ["tennis" , "baseball" , "cricket"  , "khokho" , "vollyball" , "chess"]
    // let filterarry2  = filterarry.filter((word)  => word.length < 10)
    // console.log(filterarry2);

    // let filterarry3 = filterarry2.sort()
    // console.log(filterarry3);

}

/* Array Map */

{
    //  let maparry = [20 , 56, 2 , 101 , 50];
    //  let maparry2 = maparry.map((item) => item*2);
    //  console.log(maparry);         //[20, 56, 2, 101, 50]
    //  console.log(maparry2);        //[40, 112, 4, 202, 100]
}


//{
//     let array1 = [23 , 45, 77 , 99];
//     let array2 = array1.map((item) => item *2);
//     console.log(array1);            //[23 , 45, 77 , 99]
//     console.log(array2);           //[46, 90, 154, 198]
// }

/*  javascript array fill method */

{
    // let fillarray  = [46 , 89 , 101 , 122 , 45]
    // console.log(fillarray);
    // let fillarray2 = fillarray.fill("None" , 1 , 3)
    // console.log(fillarray2);            // [46, 'None', 'None', 'None', 'None']

    // let fill = fillarray.fill("vasu", 1 , 4)
    // console.log(fill);                  // [46, 'vasu', 'vasu', 'vasu', 45]
}

/* javascript array copywithin() method */

// copyWithin(target, start)
// copyWithin(target, start, end)

{
    //  const fruits = ["A" , "B" , "C" , "D" , "E" , "F"];
    //  console.log(fruits);
    //  const newcopy = fruits.copyWithin(1 , 3);
    //  console.log(newcopy);

    //  console.log([1, 2, 3, 4, 5 , 6].copyWithin(0, 3));

    // console.log([1, 2, 3, 4, 5 , 6  , 7].copyWithin(2, 4 , 5));

    // console.log([7,6,5,4,3,2,1].copyWithin(2, 3));
    // [1, 2, 3, 3, 4]
}

/* javascript valueof() method */

{
    // let arry = [1,2,3,4,5,6,7,8,9]
    // console.log(arry.valueOf());
}

/*  JavaScript Multidimensional Array */

/* A multidimensional array is an array that contains another array. */

{
    // multidimensional array
    //  const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];
}

/* Access Elements of an Array */

// {
// const data = [[1, 2, 3], [1, 9, 4], [4, 5, 6]];
// let data1 = data[1][1];
// console.log(data1);   //9
//}

{
    // const data = [[2,3,4],[5,6,7],[1,2,3]];
    // let fata = data[2][2];
    // console.log(fata);  //3
}




/* Add an Element to a Multidimensional Array */

// {
// Adding Element to the Outer Array

//      let studentsData = [['Jack', 24], ['Sara', 23]];
//      studentsData.push(['Peter', 24]);

//      let data = studentsData[1][1]

//      console.log(studentsData);
//      console.log(data);         //23
// }



{
    // let ss = [["2"] ,  ["3"]];
    // ss.push(["4"]);

    // console.log(ss);

    // let rr = ss[1][0];
    // console.log(rr);    //3
}



{
    // Adding Element to the Inner Array
    {
        //using index notation
        //  let studentsData = [['Jack', 24], ['Sara', 23],];
        //  studentsData[1][2] = 'hello';

        //  console.log(studentsData);
    }



    {
        // // using push()
        // let studentsData = [['Jack', 24], ['Sara', 23],];
        // studentsData[1].push('hello');

        // console.log(studentsData);
    }
    {
        // the Array's splice() method to add an element at a specified index.

        //  let studentsData = [['Jack', 24], ['Sara', 23],];

        // //  // adding element at 1 index
        //  studentsData.splice(0, 2 , ["peter"  , 58]);

        //  console.log(studentsData);
    }

    /*  Remove an Element from a Multidimensional Array */

    {
        // remove the array element from outer array
        // let studentsData = [['Jack', 24], ['Sara', 23],];
        // studentsData.pop();

        // console.log(studentsData);
    }
    {
        //  // remove the element from the inner array
        //  let studentsData = [['Jack', 24], ['Sara', 23]];
        //  studentsData[1].pop();

        //  console.log(studentsData); // [["Jack", 24], ["Sara"]]
    }
    {
        //  // the splice() method to remove an element at a specified index.
        //  let studentsData = [['Jack', 24], ['Sara', 23],];

        //  // removing 1 index array item
        //  studentsData.splice(0,1);
        //  console.log(studentsData);
    }
}