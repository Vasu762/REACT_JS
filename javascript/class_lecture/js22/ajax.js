// function loadData(){
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange=function(){
//         if(this.readyState == 4 && this.status == 200){
//             document.getElementById("demo").innerHTML = this.responseText;
//         }
//     };

//     xhttp.open("GET", "./index.txt",true);
//     xhttp.send();


// }



// async function f(){
//     console.log("Async Action");
//     return Promise.resolve(1);
// }


/* promise in javascript */

// let promise = new Promise(function(resolve,reject){
//     resolve("Promise Resolve");
//     console.log(result);
//  })
//  .then(function(result){
//     console.log(result);
//  })

//  .catch(error){

//  }




/* Promise with and await method */


let Promises = new Promise(function (resolve, reject) {
    setTimeout(
        function () {
            resolve("promise Resolve")
        }, 4000
    );
});


// async funtion

async function asyncfuntion(){
    let result = await Promises;
    console.log(result);
    console.log("hello");
}


asyncfuntion()