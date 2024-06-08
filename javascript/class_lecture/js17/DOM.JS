// Document Object Model in Javascript

// What is Document Object Model (DOM)
// The Document Object MOdel (DOM) is an application programing interface (API) for manipulating HTML document.

// The DOM represents an HTML document as a tree of nodes. The DOM provides funtion that allow you to add, remove, and modify parts of the document effectively.

// NOte that the DOM is cross-platform and language - independent way of manipulating HTML and XML document.

// A document as a hierarchy of nodes

// The DOM represents and HTML document as a hierarchy of nodes. Consider the following HTML document:

// <html>
//     <head>
//         <title>JavaScript DOM!</title>
//     </head>
//     <body>
//         <p>Hello DOM!</p>
//     </body>
// </html>

// In this DOM tree, the document is the root node. The root has one child node
// which is the <html> Element. the <html> Element is called the document Element.


// Each document can have only one document Element. In an HTML document, the document Element is the <html> element. Each markup can be represented by a node in the tree.


// Selecting elements

// getElementById() - select an element by id.
// getElementByTagNmae()  - select  element by a tag name.
// getElementByCalssName() - select  element by one or more class names.

// getElementById()

// {
    // document.getElementById('para1').innerHTML = "Hello Dom !"

    // document.getElementById('box-1').innerHTML = "This is Div tag"

    // const Model = document.getElementsByClassName('box');

    // console.log(Model);

    // const element = document.getElementsByClassName('box')
    // function addText() {
    //     for (let i = 0; i < element.length; i++) {
    //         element[i].innerHTML = "Hello Vasu"
    //         element[i].style.color = "orange"
    //         element[i].style.background = "green"
    //         element[i].style.border = "2px solid  red"

    //     }
    // }
    // addText();



//     const element = document.getElementsByTagName('h1');
//         function addText() {
//             for (let i = 0; i < element.length; i++) {
//                 element[i].innerHTML = "Hello Vasu"
//                 element[i].style.color = "orange"
//                 element[i].style.background = "green"
//                 element[i].style.border = "2px solid  red"

//             }
//         }
//         addText();
// }

{
    // const NewElement = document.createElement("marquee");
    // NewElement.textContent = "This is Marquee Tag"
    // document.body.appendChild(NewElement)



    // const NewElement = document.createElement("div");
    // NewElement.textContent = "This is Marquee Tag"
    // // NewElement.classList = "vasu"
    // NewElement.classList.add("vasu");
    // //add add to class name
    // NewElement.classList.remove("vasu");
    // //remove add to class name
    // document.body.appendChild(NewElement)






    // const NewElement = document.createElement("marquee");
    // NewElement.textContent = "This is Marquee Tag"
    // document.body.appendChild(NewElement)
}

// querySelector()

{
    document.querySelector('.box').style.color = "green";
    // document.querySelectorAll('.box').style.color = "green";
}

// querySelectorAll

{
    // const element = document.querySelectorAll('.box');
   
    // function changeColors() {
    //     for (let i = 0; i < element.length; i++) {
    //         element[i].style.color = "pink";
    //     }
    // }
    // changeColors(); 
}



{
    const element = document.getElementsByClassName('vasu')
    function addText() {
        for (let i = 0; i < element.length; i++) {
            element[i].innerHTML = "Hello javascipt"
            element[i].style.color = "orange"
            element[i].style.background = "green"
            element[i].style.border = "2px solid  red"

        }
    }
    addText();
}