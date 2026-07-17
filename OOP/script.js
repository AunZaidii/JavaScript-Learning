// const user = {
//     username : "Aun",
//     LoginCount : 20,
//     isLoggedIn : true,
//     Greeting : function(){
//         console.log(`Welcome ${this.username}`);
        
//     }
    
// }

// function user (username,LoginCount, isLoggedIn ){
//     this.username = username;
//     this.LoginCount = LoginCount;
//     this.isLoggedIn = isLoggedIn;
// }

// const userOne = new user('aun',33,true)
// console.log(userOne);
// const userTwo = new user('aun',33,true)
// console.log(userTwo);


const users = {
   totalUsers : []
}

function user(userId, username, userAge){
    this.userId = userId;
    this.username = username;
    this.userAge = userAge;
}

function addUsers(userId, username, userAge){
    const newUser = new user(userId, username, userAge)
    users.totalUsers.push(newUser)

}
addUsers(1,'batool', true);
addUsers(2,'Aun', true);
addUsers(3,'Haris', true);

console.log(users.totalUsers);
