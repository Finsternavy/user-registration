function saveUser(user){
    console.log(user);
    let val=JSON.stringify(user);
    console.log(val);
    localStorage.setItem(user.email, val);
}

function login(){
    let email = $("#loginEmail").val();
    let password = $("#loginPassword").val();
    let JSONValues = localStorage.getItem(email);
    let parsedJSON = JSON.parse(JSONValues);
    console.log(parsedJSON);
    if(parsedJSON == null){
        alert("Email not found. Please try again or register for an account!");
        return;
    }
    if(parsedJSON.password == password){
        // for(let i = 0; i<parsedJSON.length; i++){
        //     if(JSONValues[i].value == password){
        //         console.log("Matching password found");
        //         document.location.href = "/users.html";
        //     }
        // }
        console.log("Matching password found");
        document.location.href = "users.html";
        return;
    }
    alert("Incorrect password. Please try again or register for an account!");
}