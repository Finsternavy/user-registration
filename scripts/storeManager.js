const STORE_KEY = "users";

function saveUser(user){
    // load the old data
    let oldData = readUsers(); // getting localStorage info
    oldData.push(user);
    let val=JSON.stringify(oldData);
    localStorage.setItem(STORE_KEY, val); // -> JSON
}

function readUsers(){
    let data = localStorage.getItem(STORE_KEY);
    console.log(data); // <- JSON
    if(!data){// if there is no data
        return [];// create the array
    }
    // if there is data
    let list = JSON.parse(data);
    return list; // list of objects (users)
}

function login(){
    let users = readUsers();
    let email = $("#loginEmail").val();
    let password = $("#loginPassword").val();
    for(let i = 0; i < users.length; i++){
        let checkUser = users[i];
        console.log(users[i]);
        if(email == checkUser.email){
            console.log("Email found.");
            if(password == checkUser.password){
                console.log("Matched password");
                document.location.href = "users.html";
                return;
            }
            alert("Incorrect password");
            return;
        }
        alert("Email not found. Please register or try again.");
    }
}
