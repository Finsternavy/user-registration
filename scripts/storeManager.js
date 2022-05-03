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
