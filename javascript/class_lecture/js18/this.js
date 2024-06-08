/* Global Use */
/* Length , toString , name */

let max = this;
console.log(max);
// windows{}


// this.name = "skillQode"

// console.log(this.name);
// console.log(name);



/* Inner Function */

// const Grow = () => {
//   console.log(this);
// }
// Grow();


// function Grow(){
//   console.log(this);
// }
// Grow();
// window{}


/* Constructor Function */


function grow() {
    this.name = 'Javascript'
    this.age = 28;
    console.log(name);         ///
    console.log(this.name);   ///

}

let NewObj = new grow()  //

console.log(NewObj);


/* this Keyword in Arrow Function */


// const newFunc = () =>{
//   console.log(this);
// }

// newFunc();

// window{}

// const Obj = () =>{
//   this.name = 'JQuery'
//   console.log(this.name);
//   console.log(name);

// }
// Obj();


/* function.length Method */

// function greet(){

// }

// console.log(greet.length);

// function greets1(a = 10  , b , c){

// }

// function greets2(a  , b = 10 , c){

// }

// function greets3(a  , b ,  c = 10){

// }


// console.log(greets1.length);
// console.log(greets2.length);
// console.log(greets3 .length);




/* function.toString() */

// function greet() {
//     console.log('SkillQode');
// }


// console.log(greet.toString());

// return all function but this funtion data type is string


// console.log(() => console.log('data').toString());

/* function.name */

// function vasu(){

// }

// console.log(vasu.name);


/* this Inside Inner Function */

{
    const person = {
        name: 'Jack',
        age: 25,
        greet() {
            console.log(this);
            console.log(this.age);


            const innerFun = () => {
                console.log(this);
                console.log(this.age);
            }
            innerFun();


            const innerFun1 = () => {
                console.log(10 * 20);
            }

            innerFun1();
        }
    }

    person.greet();

}

//funtion in funtion that is call inner funtion