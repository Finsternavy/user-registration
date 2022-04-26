// create a User constructor
class User{
    constructor(firstName, lastName, email, password, gender, age, address, phoneNum, payment, favColor){
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

function register(){
    console.log("createUser() button was clicked");
    let newUser = new User(
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
    console.log(newUser);
}
// display the new user on the console

function init(){
    console.log("Init function");
    let user1 = new User("Chris", "Finster", "finsternavy@gmail.com", "password", "M", 34, "867 lane", "867-5309", "Cash", "#FFFFFF");
    let user2 = new User("John", "Doe", "john.doe@gmail.com", "johnDoe123", "M", 24, "5309 blvd", "867-9305", "Master Card", "#000000");
    console.log(user1, user2);
}

window.onload=init;