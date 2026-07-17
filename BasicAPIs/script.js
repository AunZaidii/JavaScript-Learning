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
    console.log(user);
    
})