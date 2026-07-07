// let myArray = [1,2,3,4,5];
// console.log(myArray);
// console.log(myArray[0]);
// console.log(typeof(myArray));


// let myObj = {
//     name: "Aun",
//     age: 22,
//     rollNo: "SE-23095",
// };
// console.log(myObj.name);
// console.log(myObj);


// let myFunction = function(){
//     console.log("Aun Zaidi");
    
// }
// myFunction();

// console.log(myArray.unshift(4));
// console.log(myArray.shift);

// console.log(myArray);

var id = Symbol("id")
var myObj = {
    [id]: 101,
    name: "Aun",
    age: 22,
    LoggedIn: true,
    email: "aunzaidi@gmail.com",
};

var myObjs = {
    [id]: 101,
    name: "Aunzee",
    age: 22,
    LoggedIn: true,
    email: "aunzaidi@gmail.com",
};


// console.log(myObj.age);
// // console.log(myObj[age]);
// console.log(myObj["age"]);
// console.log(myObj[id]);
// // console.log(typeof mysym);
// console.log(myObjs[id]);


myObj.greeting = function(){
    console.log(`hello ${myObjs.name}`);
    
}

// myObj.greeting();

var course = {
    coursename: "JavaScript",
    courseprice: "1200rs",
    courseteacher: "Hitesh"
}

var {coursename:names} = course;
var {courseprice:price} = course;
var {courseteacher:teacher} = course;

// console.log(teacher);
// console.log(names);
// console.log(price);

// ;
// function add(a,b){
//     console.log(a+b);
// };

// add(2,3);

function loginMessage (username = "user"){
    return `${username} just logged in!`;
    
};

console.log(loginMessage("aa"));

