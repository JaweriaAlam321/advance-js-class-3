// write a function which returns array. call the function and destructure array values and print the value

// function f() {
//     return [1, 2];
//   }
  
//   let a, b; 
//   [a, b] = f(); 
//   console.log(a); // 1
//   console.log(b); // 2
  


  // Make a car object with model, year, color. display all the values by destructuring
//   const car = {
//     car_Name : "civic",
//     car_Model: 2019,
//     Color: "white"

// }
// //data destructuring:
// let { car_Name, car_Model, Color} = car;
// console.log(`My car name is ${car_Name}.
//  car Model is ${car_Model}. My car colour name is ${Color}`);

// use three variable name, greeting and display value using template literals
// let introduction = "i am";
// let greeting = "frontend";
// let frName = "developer";
// console.log(`${greeting} ${introduction} ${frName}`);



// use array [1,2,3,4,5,6,7,8,9,10] 
//assign first three values in seperate variables
// and all remaining in one element as an array


// let a, b, c, rest;
// [a, b, c] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(a);
          

// console.log(b);
          

// console.log(c);
          


// [a, b, c, ...rest] =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(rest);
            
 

// if car speed is less than 80 display "car speed is slow", if greater than 80 but less than 120 than display 
// " car speed is moderate" and if greater than 120 display "car speed is fast"

// var x =prompt("enter car speed")
// x = prompt("enter a vallue")

// if(x < 80){
//     console.log("Car speed is Slow");
// }

// if(x > 80 && x < 120 ){
//         console.log("Car speed is Moderate");
// }
// if(x > 120 ){
//     console.log("Car speed is fast");
// }

// Assignment 2
// write a function which takes your name and displays the greeting with your name



// var greet_name = function(my_name, greet) {
//   console.log(greet + " " + my_name);
// };
// greet_name(prompt("Enter Your Name : ","Enter Name"),"Welcome");

// function myFunc(){
//    return [1,2,3,4]
// }
// let a = myFunc();

// myFunc1 = () => {    return 2+2 }
//  myFunc1 = () =>   2+2 

// let b = myFunc1();

// console.log(b)









//print simple array of [1,2,3,4,5] with the help of array map funtion

// let arr = [1,2,3,4,5];
// let new_Array = arr.map(function(value, i){
// console.log(value);
// });



// let arr = [{id:1,name:"abc"},{id:1,name:"efg"},{id:2,name:"hij"},{id:3,name:"xyz"}]
// iterate the given array through map function and print the name and id



// let arr = [{id:1,name:"abc"},{id:1,name:"efg"},{id:2,name:"hij"},{id:3,name:"xyz"}]

// let new_Array = arr.map(function(id, name){
// console.log(id);
// console.log(name);

// });