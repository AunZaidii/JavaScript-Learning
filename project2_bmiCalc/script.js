const form = document.querySelector("form")
form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = (document.querySelector("#height").value)
    const weight = (document.querySelector("#weight").value)
    const result = document.querySelector("#result")


    if (height == "" || height == 0 || isNaN(height)) {
        result.innerHTML = "Please Give a Valid Height"
    }
    else if (weight == "" || weight == 0 || isNaN(weight)) {
        result.innerHTML = "Please Give a Valid weight"
    }
    else{
        const bmi = ((weight/(height/100)**2)).toFixed(2)
        
        if(bmi < 18.6){
            result.innerHTML = `your bmi is ${bmi}, you are underweight`
        }
        else if(bmi > 18.6 && bmi <= 24.9){
            result.innerHTML = `your bmi is ${bmi}, you are normal`
        }
        else{
            result.innerHTML = `your bmi is ${bmi}, you are overweight`
        }
    }


}) 
