// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async Function");
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise completed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Promise Executed");
//         resolve({"username":"aun"})
//     },1000)
// }).then(function(user){
//     console.log(user.username);
    
// })

// new Promise(function(resolve,reject){
//     let error = true;
//     setTimeout(function(){
//         if(!error){
//             resolve({name : "aun"})
//         }
//         else{
//             reject("There is an error")
//         }
//     },1000)
// }).then(function(user){
//     console.log(user.name);
    
// })
// .catch(function(error){
//     console.log(error);
    
// })
// .finally(function(){
//     console.log("promise is either resolved or rejected");
    
// })

// const prom = new Promise(function(resolve,reject){
//     let error = true;
//     setTimeout(function(){
//         if(!error){
//             resolve({name : "aun"})
//         }
//         else{
//             reject("There is an error")
//         }
//     },1000)
// })

// async function promiseFive() {
//     try {
//         const ans = await prom
//         console.log(ans);
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }
// promiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
    
//     } catch (error) {
//         console.log("there is an error: ", error);
        
//     }
// }
// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users").then(function(response){
    return response.json()
}).then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log("the error is: ",error);
    
})