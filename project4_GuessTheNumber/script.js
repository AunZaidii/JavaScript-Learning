const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()

    const userNum = document.querySelector('#num').value;
    const num = (Math.random()*10).toFixed(0)
    const result = document.querySelector('#result')

    if(userNum != num){
        result.innerHTML = `Wrong! Please try again and the correct number was ${num}`
    }
    else{
        result.innerHTML = `You have guessed the correct number which is ${num}`
    }

})



   

