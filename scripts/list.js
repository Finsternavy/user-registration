function displayUsers(users){
    // travel the array
    let tableData = $("#tbody");
        for(let i = 0; i < users.length; i++){
            let newUser = users[i];
            console.log(newUser);
            let row = `
            <tr class="table-row">
                <td>${newUser.firstName}</td>
                <td>${newUser.lastName}</td>
                <td>${newUser.email}</td>
                <td>${newUser.password}</td>
                <td>${newUser.gender}</td>
                <td>${newUser.age}</td>
                <td>${newUser.address}</td>
                <td>${newUser.phoneNum}</td>
                <td>${newUser.payment}</td>
                <td><input type="color" value="${newUser.favColor}">${newUser.favColor}</td>
            </tr>
        `;
        tableData.append(row);
        }
        console.log(tableData);
    // get each user

    // display the users

    // append the user on the html table
}

function init(){
    console.log("Listing users...");
    let users = readUsers(); // this fn is on the storeManager
    displayUsers(users);
}

window.onload=init;