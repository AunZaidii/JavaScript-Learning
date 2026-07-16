const Currtime = document.querySelector('.time')
const Currdate = document.querySelector('.date')


setInterval(function(){
    let date = new Date()
    Currtime.innerHTML = date.toLocaleTimeString();
    Currdate.innerHTML = date.toLocaleDateString();

},1000)
