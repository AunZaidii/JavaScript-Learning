// const user = {
//     username : "Aun",
//     LoginCount : 20,
//     isLoggedIn : true,
//     Greeting : function(){
//         console.log(`Welcome ${this.username}`);
        
//     }
    
// }

function user (username,LoginCount, isLoggedIn ){
    this.username = username;
    this.LoginCount = LoginCount;
    this.isLoggedIn = isLoggedIn;
}

const userOne = new user('aun',33,true)
console.log(userOne);
const userTwo = new user('aun',33,true)
console.log(userTwo);