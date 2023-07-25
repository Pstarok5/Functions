let usersId = [];

function acct(name, password) {

    let usersName = {
        username : name,
        userpassword : password,
    }

    usersId.push(usersName);
    return `Welcome back`;
    
}


let user1 = acct("Emmanuel", "2000");
let user2 = acct("Samuel", "2001")
let user3 = acct("Daniel", "2002");
let user4 = acct("Bright", "2003");
let user5 = acct("Courage", "2004");
let user6 = acct("Fajiro", "2005");
let user7 = acct("Kingsley", "2006");
console.log(usersId);