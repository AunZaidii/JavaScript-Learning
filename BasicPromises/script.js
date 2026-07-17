const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Function");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise completed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Promise Executed");
        resolve({"username":"aun"})
    },1000)
}).then(function(user){
    console.log(user.username);
    
})

new Promise(function(resolve,reject){
    let error = true;
    setTimeout(function(){
        if(!error){
            resolve({name : "aun"})
        }
        else{
            reject("There is an error")
        }
    },1000)
}).then(function(user){
    console.log(user.name);
    
})
.catch(function(error){
    console.log(error);
    
})
.finally(function(){
    console.log("promise is either resolved or rejected");
    
})