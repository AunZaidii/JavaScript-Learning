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


// const users = {
//    totalUsers : []
// }

// function user(userId, username, userAge){
//     this.userId = userId;
//     this.username = username;
//     this.userAge = userAge;
// }

// function addUsers(userId, username, userAge){
//     const newUser = new user(userId, username, userAge)
//     users.totalUsers.push(newUser)

// }
// addUsers(1,'batool', true);
// addUsers(2,'Aun', true);
// addUsers(3,'Haris', true);

// console.log(users.totalUsers);

// class user {
//     constructor(name, email, password){
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }

//     encryption(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.name.toUpperCase()}`
//     }
// }

// const user1 = new user('aun', 'aun@gmail.com', 123)
// console.log(user1.encryption());
// console.log(user1.changeUsername());



class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`hi ${this.username} you have been logged in`);
        
    }
}

class teacher extends user{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    isTeaching(){
        console.log(`${this.username} is teaching`);
        
    }
}
const u = new user('aun')
const t = new teacher('aun', 'aun@gmail.com', 123)
console.log(t);
console.log(t.isTeaching());
console.log(t.logMe());
console.log(u);
console.log(u.logMe());


