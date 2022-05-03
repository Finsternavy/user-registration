function login(){
    let email = $("#loginEmail").val();
    let password = $("#loginPassword").val();
    let users = readUsers();
    let flag = false;
    for(let i = 0; i < users.length; i++){
        let checkUser = users[i];
        console.log(users[i]);
        if(email == checkUser.email && password == checkUser.password){
            console.log("good answer");
            flag = true;
            document.location = "users.html";
            return flag;
        }
        if(!flag){
            $("#alertError").removeClass("hide");
            setTimeout(() => {
                $("#alertError").addClass("hide");
            }, 3000);
        }
        
    }
}

function init(){
    $("#loginButton").click(login)
}

window.onload=init;