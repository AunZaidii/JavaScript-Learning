const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}
console.log(randomColor())

const start = document.querySelector('.start')
const stop = document.querySelector('.stop')

const colorChange = function(){
    document.body.style.backgroundColor = randomColor();
}

let int;
start.addEventListener('click', function(e){
    int = setInterval(colorChange,500)
})

stop.addEventListener('click', function(e){
    clearInterval(int)
}) 