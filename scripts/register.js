// create a User constructor
let count = 0;
localStorage.setItem("count", count);

class User{
    constructor(id, firstName, lastName, email, password, gender, age, address, phoneNum, payment, favColor){
        this.id = count++;
        this.firstName = firstName,
        this.lastName = lastName,
        this.email = email,
        this.password = password,
        this.gender = gender,
        this.age = age,
        this.address = address,
        this.phoneNum = phoneNum,
        this.payment = payment,
        this.favColor = favColor
    }
}
function isValid(user){
    let valid = true;
    $("input").removeClass("input-error");
    if(user.email.length == 0){
        $("#invalid-check-email").addClass("input-error");
        msg = "You must enter an email address!";
        displayError(msg);
        valid = false;
        console.error("Email missing!");
    }
    if(user.password.length == 0){
        valid = false;
        return valid;
    }
    if(!validatePassword()){
        $("#invalid-check-password").addClass("input-error");
        valid = false;
        return valid;
    }
    return valid;
}
let msg = "";

function validatePassword(){
    // get the value from the form
    let valid = true;
    let pass = $("#txtPassword");
    let password = pass.val();
    if(password.length < 6){
        pass.css("border", "2px solid red");
        valid = false;
        console.log(valid);
        msg = "Your password is too short!";
        displayError(msg);
        return valid;;
    }
    pass.css("border", "2px solid green");
    hideError();
    return valid;
}

function register(){
    console.log("createUser() button was clicked");
    let count = localStorage.getItem("count");
    localStorage.setItem("count", count++);
    let newUser = new User(
        localStorage.getItem("count"),
        $("#txtFirstName").val(),
        $("#txtLastName").val(),
        $("#txtEmail").val(),
        $("#txtPassword").val(),
        $("#txtGender").val(),
        $("#txtAge").val(),
        $("#txtAddress").val(),
        $("#txtPhoneNumber").val(),
        $("#txtPaymentMethod").val(),
        $("#txtFavoriteColor").val(),
    )
    if(isValid(newUser)){
        saveUser(newUser);
        $('input').val("");
        alert("You have successfully registered! Exit this window to login!");
        document.location.href = "index.html";
    }
}

function displayError(msg){
    $("#alertError").removeClass("hide").text(msg);
}

function hideError(){
    $("#alertError").addClass("hide");
}

function init(){
    console.log("register");
    // hook events
    $("#txtPassword").change(validatePassword);
}

window.onload = init;