// const change = function(){
//     document.querySelector('h1').innerHTML = "aunnn"    
// }

// const changeME = setTimeout(change, 3000)

// const button = document.querySelector(".stop").addEventListener('click',function(e){
//     clearTimeout(changeME);
//     console.log("stopped");
    
// })

const start = document.querySelector(".start")
const stop = document.querySelector(".stop")
let interval;
start.addEventListener('click',function(e){
    function st (){console.log("Aun", Date.now());
    }
    interval = setInterval(st, 1000);
})

stop.addEventListener('click',function(e){
    clearInterval(interval)
    console.log("stopped");
    
})


