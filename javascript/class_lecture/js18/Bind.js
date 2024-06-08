
const student1 = {
    name: "Jack",
    grade: "5",
    introduction: function () {
        console.log(this.name  +  "studies in grade" + this.grade + ".");
    },
};

const student2 = {
    name: "Jimmy ",
    grade: " 6",
};

const student3 = {
    name: "vasu",
    grade:"20",
};

let result = student1.introduction.bind(student3);

result();        //funtion


// const v1 = {
//     name:"raj",
//     age : "5",
//     vasu:function (){
//         console.log(this.name + "studies in grade" + this.age + ".");
//     },
// };

// const t1 = {
//     name : "raju",
//     age : "16"
// }

// let result1 = v1. vasu.bind(t1)
// result1();