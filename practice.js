// // let myArray = [1,2,3,4,5];
// // console.log(myArray);
// // console.log(myArray[0]);
// // console.log(typeof(myArray));


// // let myObj = {
// //     name: "Aun",
// //     age: 22,
// //     rollNo: "SE-23095",
// // };
// // console.log(myObj.name);
// // console.log(myObj);


// // let myFunction = function(){
// //     console.log("Aun Zaidi");
    
// // }
// // myFunction();

// // console.log(myArray.unshift(4));
// // console.log(myArray.shift);

// // console.log(myArray);

// var id = Symbol("id")
// var myObj = {
//     [id]: 101,
//     name: "Aun",
//     age: 22,
//     LoggedIn: true,
//     email: "aunzaidi@gmail.com",
// };

// var myObjs = {
//     [id]: 101,
//     name: "Aunzee",
//     age: 22,
//     LoggedIn: true,
//     email: "aunzaidi@gmail.com",
// };


// // console.log(myObj.age);
// // // console.log(myObj[age]);
// // console.log(myObj["age"]);
// // console.log(myObj[id]);
// // // console.log(typeof mysym);
// // console.log(myObjs[id]);


// myObj.greeting = function(){
//     console.log(`hello ${myObjs.name}`);
    
// }

// // myObj.greeting();

// var course = {
//     coursename: "JavaScript",
//     courseprice: "1200rs",
//     courseteacher: "Hitesh"
// }

// var {coursename:names} = course;
// var {courseprice:price} = course;
// var {courseteacher:teacher} = course;

// // console.log(teacher);
// // console.log(names);
// // console.log(price);

// // ;
// // function add(a,b){
// //     console.log(a+b);
// // };

// // add(2,3);

// function loginMessage (username = "user"){
//     return `${username} just logged in!`;
    
// };

// console.log(loginMessage("aa"));

// function cartPrice(...price){
//     return price;
// }
// console.log(cartPrice(100,200,399,356,346,22,6,4,7,44,57,4,6,3,6,6,3,5,7,3,6,3,6,234));

// var arr1 = [1,2,3,4];
// var arr2 = [5,6,7,8];
// var arr = [...arr1,...arr2];
// // console.log(arr);

// var user = {
//     name: "Aun",
//     price: 200
// };

// function obj(anyobj){
//     console.log(`the name is ${anyobj.name} and the price is ${anyobj.price}`);
// }

// obj(user);

// obj({
//     name:"Ali",
//     price: 233
// })

// var newArr = [1,2,3,4,5];

// function getSecondValue(getArr){
//     return getArr[1];
// }

// console.log(getSecondValue(newArr));


// const myobj = {
//     name: "Aun",
//     price: 440,
    
//     welcomeMessage: function(){
//         console.log(`${this.name} and ${this.price}`);  
//     }
// }

// myobj.welcomeMessage();
// console.log(this);


// const arrow1 = function(){
//     let a = "aun";
//     console.log(this.a);
    
// }

// const arrow2 = () => {
//     let a = "zaidi";
//     console.log(this.a);
// }

// arrow1();
// arrow2();



// (function add(num1, num2){
//     console.log(num1+num2);
// }
// )(1,2);

// ((num1,num2) => {
//     console.log(num1+num2);   
// })(1,2);



let arr1 = [1,2,3,4,5,6,7,8];

for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    console.log(element);
}
