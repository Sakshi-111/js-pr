// const accName= "employee";
// let accPass= "tewo12";
// var accstart="themin";
// console.log(accName);
// console.table([accName,accPass,accstart])

//  data conversion to number 
// let num="33";
// let num1= Number (num)
// console.log (num1)
// "33abs"=>NaN
// "abs"=>NaN
// TRUE=>1
// FALSE =>0;

// amswer is 33 typeof(num1)= >number
// TO BOOLEAN  ANS IS TRUE/FALSE
// 1=>true
// 0=>false
// ""=>false
// "HASDH"=>true
// console.log(Boolean("0"))
// =>true because its a string
// console.log(Boolean(0))===>false because number

//////////////////////////
// operations

//strings
// let name = "Sakshi"
// const name_1 = new String('sakshi')
// console.log(name_1.slice(3))
// console.log(name)
// SPLICE IS   A METHOD FOR ARRAYS
// console.log(name.includes('i'))
// console.log(name.charAt(1))
// // MATHS

// console.log (Math.ceil(4.1))// returns top value 
// console.log(Math.floor(4.9))// returns base value
// console.log(Math.max(2,3,3,44,5))

//date and time



// for fututre look at temporal 

//  let mydate=  Date.now();
// // console.log(typeof(mydate)) // object
// console.log (mydate.getHours());
// let date_rn= Date.now()// gives date in milliseconds right now from 1 jan 1970.
// console.log(date_rn/1000);// givess ans in deicmal to get in seconds
// console.log(Math.floor(date_rn/1000))
// console.log(mydate.toLocaleString('default',{
//     weekday:"narrow"

// }))

// arrays
//  const arr= [1,2,3,4,5,6]
// console.log(arr);
// shallow copy share the same reference point while deep copies share the different refrence point 
// const arr2=new Array (1,2,3,4,4)
//another way to make array
// methods
// console.log(arr.concat(arr2))
// slice(1,3)=>outout comes 1,2 og arrays stays 12344
//splice(1,3)=>output comes 1,2,3 but it changes the og array to 44 
// arr1.concat(arr2)// limitation only 2 arrays are concatinated
//[...arr1,...arr2,...arr3]// concatination of 3 arrays


//array ke andar array or arrays
// const arr1= [1,2,2,[1,1,1,[1,1,1]],6525]
// const realarr= arr1.flat(Infinity)// this infinity is the depth , upto which depth do we want the arrays to be flat out.


// to check weather its an array function used is isArray()
// to convert into an array fn used is .from()
// let jh ="abcde"+"SJD";
// console.log( Array.from(jh))
// console.log(newarr.flat(Infinity))


//objects
c//onst jsuser= {name:"sakshi", email:"sakshi@gmail.com", phno: "66", "address":"shimla", "isLogged in": "fr"}
// console.log(jsuser.email)//=> sakshi@gmail.com
// // console.log(jsuser[email])//=>error because internally it makes every key into a string 
// console.log (jsuser["email"])//=>prints correctlly
// console.log(jsuser[address])//=>prints not defined ,will only take string as input
// console.log(jsuser["address"])// correct
// console.log(jsuser.address)// correct

// console.log(jsuser["isLogged in"]) // wrong becuase  the keys with space can be acceed only using []
// console.log(jsuser[isLogged in])// error







