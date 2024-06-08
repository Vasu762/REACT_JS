
/* JavaScript JSON data */

/* Mutable Data */

// let Data = {name:"Jhon" , age : 50 , hobby : "Cricket"};

// console.log(Data);            //{name: 'Jhon', age: 50, hobby: 'Cricket'}

// let Jsondata = {"name":"John" , "age":50 , "hobby" : "cricket"};

// console.log(Jsondata);      //{name: 'John', age: 50, hobby: 'cricket'}


// let User = [
//     {
//         "Name": "John"
//     },
//     {
//         "Age": 45
//     },
//     {
//         "Hobby": {
//             "hobby1": "Baseball",
//             "hobby2": "Superball",
//             "hobby3": "Cricket",
//             "hobby4": "Travelling"
//         }
//     },
//     {
//         "Topic": ["Javascript", "SQL", "ReactJs", "Html", "Css"]
//     }
// ]


// console.log(User);
// console.log(User[0].Name);                           //John
// console.log(User[1].Age);                           //45
// console.log(User[2].Hobby);                         //{hobby1: 'Baseball', hobby2: 'Superball', hobby3: 'Cricket', hobby4: 'Travelling'}
// console.log(User[2].Hobby.hobby1);                  //Baseball
// console.log(User[2].Hobby.hobby2);                  //Superball
// console.log(User[2].Hobby.hobby3);                  //Cricket
// console.log(User[2].Hobby.hobby4);                  //Travelling
// console.log(User[3].Topic);                         //(5) ['Javascript', 'SQL', 'ReactJs', 'Html', 'Css']
// console.log(User[3].Topic[0]);                      //Javascript
// console.log(User[3].Topic[1]);                      //SQL
// console.log(User[3].Topic[2]);                      //ReactJs
// console.log(User[3].Topic[3]);                      //Html
// console.log(User[3].Topic[4]);                       //Css




// /* JSON.Parse Method */

let Object1 = [
    { "name": "Jhon", "age": 50, "hobby": "Cricket" }
];

let JsonObject1 = JSON.stringify(Object1);

console.log(JsonObject1);

console.log(typeof (JsonObject1));

// --------------------------====================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>================================================

let JsonObject = '{"name":"Jhon" , "age" : 50 , "hobby" : "Cricket"}';

console.log(JsonObject);

let Object = JSON.parse(JsonObject);                //JSON.parse is json data to object data tranfer

console.log(Object);

console.log(typeof (JsonObject));
console.log(typeof (Object));

// fetch('https://dummyjson.com/products')
// .then(response => response.json())
// .then(json => console.log(json));
