//functions in javascript


// juser.greeting= function(){
//     console.log(`hello ${juser.name}`)
// }
// console.log(juser.greeting()); 
// console.log(typeof(juser[mysym]));
// ///
// function userloggedin(username="sam"){
   // if(!username){
   //    console.log("enter a username!")+



   // }
   
//    return  `${username}logged in`

// }
// console.log(userloggedin("hiii"))


// denno("sakshi")
// function denno(username){
//    console.log(`${username}`)
// }
// const den= function(username){
//    console.log(`${username}`)
//  }


//hoisting: cant access a function before declaration if it is stored in a variable
// den("sakshi")
//can call a function before initialiisation when syntax is 
// function(parameter){
   // }
//but cannot call a function when const abc= function(){}



// function addtwonumbers(num1,num2){
//    let num= num1+num2;
//    console.log( num);
//    return num;
// }

// cannot access a console line after return statement inside a function's code block. 
// console only prinrts 


// console.log(addtwonumbers(2,3))//=>function call


// function calculateprice(...num1){
//    return num1;
// }   //=> rest operator (...parameter) wraps all the arguements in an array.


// console.log(calculateprice(2,3,4))   //=>[2,3,4]


//pasing object as arguement to function.
// const user={
//    username:"fey",
//    price:34
// }
// function disp(obj){
//    return(`${obj.username} price is ${obj.price} `)
// }

// console.log(disp(user))

//passing object as arguemnt directly

//function disp( { username:"fey",
//    price:34} ){
//    return(`${obj.username} price is ${obj.price} `)
// }

//passing array to functionsis also similar .


// function one(){
//    const web= "youtube"
//    console.log(web)
//    function two(){
//       const website= "whatsaap"
//       console.log(website)
//    }
//    two()
//    website="what"
//    console.log (website)
// }
// one()
// const user={  username: "sakshi",
// price:123,
// wel: function(){
//    console.log(`${this.username}`)

// }
// }
//=> this keyword is used to get current context which is object in which it is being written to 
//access that objects properties. 
// this keyword cant be used by independednt functions to acess functions's local proprty 


// user.wel()
// 

// arrow function
//()=>{}
//const usersum=(n1,n2) => n1+n2 //implicit =>because it implicitly assumed that return keyword 
// const usersum=(num1,num2)=>{ return num1+num2} //=> {} return keyword is important () return not imp
// const addtwo= (num1,num2)=>({username:"hi"}) // object can only be wrapped in (). not{}
// console.log(addtwo(2,3));

//normal function
// function usersum1 (n1,n2) {
//    return n1+n2;
// }
//explicit function

// const usersum2= (n1,n2)=>{
//    return n1+n2}
// console.log(usersum(23,33))
// console.log(usersum1(23,33))
// console.log(usersum2(23,33))

//  const one=(n1,n2)=>({
//      username: "sakhsi"
    

//  })
//  console.log(one(1,2))




