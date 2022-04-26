// selecting the txtEmail
// selector types:
// id, class, tag
// jQuery = $

// selecting by ID
//let email = document.getElementById("txtEmail");
email = $("#txtEmail").val();
console.log(email);

// selecting by className and hiding 
// let formControl = document.getElementsByClassName("form-control");
// for(let i = 0; i<formControl.length; i++){
//     formControl[i].style.display = "none";
// }
let formControl = $(".form-control");
formControl.hide();

// console.log(formControl);  // can access like an array like:  console.log(formControl[0])

// selecting by tagName
// let inputs = document.getElementsByTagName("label");
let labels = $("label");
console.log(labels);