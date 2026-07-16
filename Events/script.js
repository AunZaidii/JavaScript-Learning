document.querySelector('.images').addEventListener('click', function(e){
    console.log("images clicked");  
},false)

document.querySelector('.i2').addEventListener('click', function(e){
    console.log("image 2 clicked");  
    // e.stopPropagation()
}, false)

document.querySelector('.google').addEventListener('click', function(e){
    console.log("link clicked");  
    e.preventDefault()
    e.stopPropagation()
}, false)


document.querySelector('.images').addEventListener('click', function(e){
    console.log(e.target.parentNode); 
    let removeIt = e.target.parentNode;
    removeIt.remove() 
}, false)