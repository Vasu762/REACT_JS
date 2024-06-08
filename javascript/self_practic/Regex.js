{
    // /^a...s$/

    // const regularExp = /^a....s$/
    // console.log(regularExp.test ("asdsds"));
}


// name
// {
// const vasu = /^V..U$/
// console.log(vasu.test("VASU")); 

// }


/* [] - Square brackets */


// Here, [abc] will match if the string you are trying to match contains any of the a, b or c.

// You can also specify a range of characters using - inside square brackets.

// [a-e] is the same as [abcde].

// [1-4] is the same as [1234].

// [0-39] is the same as [01239].


// let yy = /[VASU]/
// console.log(yy.test("VASU VAGHASIYA")); 


// let uu = /[123]/
// console.log(uu.test('1234345445545'));




/* . - Period */


{
    // const Regex = /..../
    // console.log(Regex.test('vasu'));
}

/* ^ - Caret */

// {
//     const Regex = /^v..+x(c)+h$/
//     console.log(Regex.test('vbvxch'));
// }



/* $ - Dollar */

// {
//     const Regex = /s$/
//     console.log(Regex.test('pass'));
// }




/* * - Star */

{
    // const Regex = /ma*n/
    // console.log(Regex.test('mn'));
}



/* + - Plus */  // all string compulasury man 
{
    // const Regex = /ma+n/
    // console.log(Regex.test('woman'));


    // let uu = /ma+n/
    // console.log(uu.test('woman'));
}

/* {} - Braces *//////////////

{
    // const Regex = /[1-4]{2,4}/
    // console.log(Regex.test('1234334'));
}





// {
//     const Regex = /^vagha+siya_v+a(s)u_(13)+(_10)+_2003$/
//     console.log(Regex.test('vaghasiya_vasu_13_10_2003'));
// }



// const regex2 = /(\d{4})\D(\d{4})(\d{2})/g;
// const result3 = regex2.exec('My phone number is: 5551 234567.');
// console.log(result3);



/* 123 123 12 12 */

// const regex5 =/^\d{3}-\d{3}-\d{4}$/;
// const result6 = regex5.exec('My phone number is: 555 234 56  72');
// console.log(result3);



/* example@gmail.com */

const resultr = /^...+[0-9]@+[gmail|yahoo]+.com$/
console.log(resultr.test('vaghasiyavasu10@gmail.com'));
console.log(resultr.test('tusharkanet10@gmail.com'));
// // console.log(resultr.test('vaghasiyavasu@gmail.com')); //false
// // console.log(resultr.test('vaghasiyavasu10@gmail.com'));
// console.log(resultr.test('vaghasiyavasu3@gmail.com'));
// console.log(resultr.test('vaghasiyavasu10@gmail.com'));

/* 123 123 12 12 */
{
    const regex2 = /(\d{3})\D(\d{3})\D(\d{2})\D(\d{2})/g;
    const result3 = regex2.exec('My phone number is: 123 123 12 12');
    console.log(result3);
}

/* 12 12 12 12 12*/
{
    const regex4 = /(\d{2})\D(\d{2})\D(\d{2})\D(\d{2})\D(\d{2})/g;
    const result5 = regex4.exec('My phone number is: 12 12 12 12 12');
    console.log(result5);
}

/* 1234 1234 12*/
{
    const regex6 = /(\d{4})\D(\d{4})\D(\d{2})/g;
    const result7 = regex6.exec('My phone number is:1234 1234 12');
    console.log(result7);
}

/* 12-12-12-12-12 */
{
    const regex8 = /(\d{2})-(\d{2})-(\d{2})-(\d{2})-(\d{2})/g;
    const result9 = regex8.exec('My phone number is: 12-12-12-12-12');
    console.log(result9);
}

/* 123-123-12-12 */
{
    const regex10 = /(\d{3})-(\d{3})-(\d{2})-(\d{2})/g;
    const result11 = regex10.exec('My phone number is: 123-123-12-12');
    console.log(result11);
}

/* 1234-1234-12*/
{
    const regex12 = /(\d{4})-(\d{4})-(\d{2})/g;
    const result13 = regex12.exec('My phone number is:1234-1234-12');
    console.log(result13);
}




