//javascript has attribute

// {
//     const vv = document.querySelector("div");
//     function vasu() {
//         if (vv.hasAttribute("id")) {
//             alert("Yes 'id' attribute exist!")
//         }
//         else {
//             alert("No 'id' attribute exist!")

//         }
//     }
// }


// const tt =  document.getElementById("title");
// function vasu1(){
//     if(tt.hasAttribute("class")){
//         alert("yaaaaa yaaaa")
//     }else{
//         alert("no no")
//     }
// }







//javascript get attribute

// const tt = document.querySelector('input')
// function vasu() {
//     const yy = tt.getAttribute("value")
//     console.log(yy);
// }
//get attribute is always html file enter value not browser


{
    const vv = document.getElementById('d1')
    function kk (){
      const yy = vv.getAttribute('action')
        console.log(yy);
    }
    kk();
}



// javascript set attribute

{
    const element = document.getElementById("demo");

    function checkAttr() {
        alert(element.hasAttribute("name"));
    }
    function addAttr() {
        element.setAttribute("type", "vasu");
    }
}




// javascript remove attribute

// {
//     const element = document.getElementById("demo");
//     function checkAttr() {
//         alert(element.hasAttribute('class'))
//     }
//     function remove() {
//         element.removeAttribute("class");
//         element.removeAttribute("name");
//         element.removeAttribute("id");
//     }
//     function addAttr() {
//         console.log(element.getAttribute("class", ))
//     }
// }


/* Html Object Accessible */

/*

document.body
document.documentElement
document.forms
document.images
document.links
document.scripts
document.title

*/

{
    // document.onload

    // function Function1(){
    //     const NewElement = document.createElement('marquee');
    //     NewElement.textContent="This Is Marquee Tag";
    //     document.body.appendChild(NewElement);

    //     document.querySelector('body').style.background = "orange"
    // }
}

{
    // document.getElementById("demo").innerHTML = document.body.innerHTML;
}

{
    // document.getElementById("demo").innerHTML = document.documentElement.innerHTML;
}

{
    // document.getElementById('demo').innerHTML = document.anchors.length
}
{
    // document.getElementById("demo").innerHTML = document.anchors.length;
}

/*
 
Description
The anchors property is deprecated. Do NOT use it.
 
The anchors property only returns those <a> elements with a name attribute.
 
The name attribute of the <a> element is not supported in HTML5.
 
*/

// }

{
    // document.getElementById("demo").innerHTML = "Number of forms tag: " + document.forms.length;
}

{
    // document.getElementById("demo").innerHTML = "Number of forms tag: " + document.head;
}





{
    document.getElementById("demo").innerHTML = "Number of images tag: " + document.images.length;
}

{
    document.getElementById("demo").innerHTML = "Number of links tag: " + document.links.length;
}

{
    document.getElementById("demo").innerHTML = "Number of scripts: " + document.scripts.length;
}

{
    document.getElementById("demo").innerHTML = "The title of this document is: " + document.title;
}

{
    // window.onload = () => {
    //     // create a couple of elements in an otherwise empty HTML page
    //     const heading = document.createElement("h1");
    //     const headingText = document.createTextNode("Big Head!");
    //     heading.appendChild(headingText);
    //     document.body.appendChild(heading);
    //   };           
}