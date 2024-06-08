// {
//     const list = [{
//         Mobile: {
//             Mobile1: {
//                 Model: "Phone",
//                 Price: "40000",
//             },
//             Mobile2: {
//                 Model: "Iphone",
//                 Price: "14000",
//             },
//             Mobile3: {
//                 Model: "Samsung",
//                 Price: "10000",
//             },
//             Mobile4: {
//                 Model: "Pixel",
//                 Price: "80000",
//             },
//             Mobile5: {
//                 Model: "Honor",
//                 Price: "40000",
//             }
//         },
//         school: {
//             school1: {
//                 Name: "ashadeep-1",
//                 medum: "gujarati",
//             },
//             school2: {
//                 Name: "ashadeep-2",
//                 medium: "english",
//             },
//             school3: {
//                 Name: "ashadeep-3",
//                 std: "1 to 12",
//             },
//             school4: {
//                 Name: "ashadeep-4",
//                 medium: "mix medium",
//             },
//             school4: {
//                 Name: "ashadeep-5",
//                 medium: "marathi",
//             }
//         },
//         stationary: {
//             stationary1: {
//                 Name: "pen",
//                 Price: "2",
//                 color: "blue",
//             },
//             stationary2: {
//                 Name: "book",
//                 Price: "200",
//                 size: "A4",
//             },
//             stationary3: {
//                 Name: "pencil",
//                 Price: "13",

//             },
//             stationary4: {
//                 Name: "eraser",
//                 Price: "8",
//             },
//             stationary5: {
//                 Name: "scale",
//                 Price: "10",
//             }
//         },
//         Bike: {
//             Bike1: {
//                 name: "shine",
//                 price: "90,000",
//             },
//             Bike2: {
//                 name: "slender",
//                 price: "90,000",
//             },
//             Bike3: {
//                 name: "slender++",
//                 price: "90,000",
//             },
//             Bike4: {
//                 name: "pulsar",
//                 price: "90,000",
//             },
//             Bike5: {
//                 name: "CD100",
//                 price: "20,000",

//             }
//         },
//         Car: {
//             Car1: {
//                 Model: "Alto",
//                 Price: "500000",
//             },
//             Car2: {
//                 Model: "Swift",
//                 Price: "450000",
//             },
//             Car3: {
//                 Model: "Xcent",
//                 Price: "650000",
//             },
//             Car4: {
//                 Model: "i10",
//                 Price: "400000",
//             },
//             Car5: {
//                 Model: "i20",
//                 Price: "500000",
//             }
//         }
//     }]

//     const input = prompt("Enter This Name List: ");

//     if (input == "Mobile") {
//         console.log("Mobile", list[0]["Mobile"]);
//     }
//     else if (input == "school") {
//         console.log("school", list[0]["school"]);

//     }
//     else if (input == "stationary") {
//         console.log("stationary", list[0]["stationary"]);

//     }
//     else if (input == "Bike") {
//         console.log("Bike:", list[0]["Bike"]);

//     }
//     else if (input == "Car") {
//         console.log("Car:", list[0]["Car"]);
//     }
//     else {
//         console.log("Please! Refresh The Page and Enter Valid Input For Result.");
//     }

// }


// {
//     // const number = [45, 17, 2, 46, 78, 15];
//     // const number1 = number.filter((myFunction));

//     // function myFunction(number) {
//     //     return number >= 50;
//     // }
//     // console.log(number1);
// }


// let list1 = [
//     { No1: "Moto", price: "$229", category: "mobile" },
//     { No2: "Apple", price: "$449", category: "mobile" },
//     { No3: "Poco", price: "$109", category: "mobile" },
//     { No4: "Samsung", price: "$329", category: "mobile" },
//     { No5: "Pixel", price: "$389", category: "mobile" },

//     { Car1: "Chevelle", price: "$140000", category: "car" },
//     { Car2: "Shelby", price: "$91450", category: "car" },
//     { Car3: "Mustang", price: "$328900", category: "car" },
//     { Car4: "Blazer", price: "$109945", category: "car" },
//     { Car5: "Corvette", price: "$119500", category: "car" },

//     { Fruit1: "Strawberry", price: "$23", category: "fruit" },
//     { Fruit2: "Brazil Nut", price: "$23", category: "fruit" },
//     { Fruit3: "Coconut", price: "$23", category: "fruit" },
//     { Fruit4: "Fig", price: "$38", category: "fruit" },
//     { Fruit5: "Persimmon", price: "$89", category: "fruit" },

//     { Tour1: "Rishikesh", price: "$39", category: "tour" },
//     { Tour2: "Ladak", price: "$38", category: "tour" },
//     { Tour3: "Spiti", price: "$89", category: "tour" },
//     { Tour4: "Goa", price: "$29", category: "tour" },
//     { Tour5: "Kerala", price: "$59", category: "tour" },

//     { Treak1: "Kedarkantha", price: "$87", category: "treak" },
//     { Treak2: "Brahmatal", price: "$56", category: "treak" },
//     { Treak3: "Tarsar", price: "$47", category: "treak" },
//     { Treak4: "Nandadevi", price: "$32", category: "treak" },
//     { Treak5: "Hampta", price: "$23", category: "treak" }
// ];

// let output = prompt("Enter This Name Mobile, Tour, Treak, Fruit, Car For Full List: ");
// let output1 = list1.filter(list1 => list1.category == output);

// console.log(output1);

{

    const obj1 = {
        name1: "vasu",
        age1: 20,
    }
    
    
    const obj2 = {
        name2: "vihar",
        age2: 20,
    }
    
    
    const obj3 = {
        name3: "vishal",
        age3: 25,
    }
    
    
    const oo = Object.assign({},obj1 , obj2 , obj3)
    
    console.log(oo);
}