const Arrayh=[1,2,3,4,5,6,7,8,9,10];
const mynums= Arrayh.filter( (it)=> it>2);
console.log(mynums);

//not happening 
// This line is trying to use filter() to add 10 to each element in the array, but filter() is not the right method for this. filter() is used to create a new array iswith only the elements that pass a test,

// const newnums= Arrayh.filter((it)=>{return it+10});
// console.log(newnums);
//  alternative 

const newnums= Arrayh.map( (it)=>it+10);
console.log(newnums);
// const Bookarray =[{Book:"book1",title:"haunteed",genre:"ghosts",setting:"horror"},
//     {Book:"book2",title:"the great gatsby",genre:"romance",setting:"ships"},
//         {Book:"book3",title:"the great gatsby",genre:"romance",setting:"rats"}
// ]
// const filteredBooks =Bookarray.filter( (bk)=>bk.Book==="book1");
// console.log(filteredBooks);
// const filteredBooks=Bookarray.filter((bk)=>bk.title==="the great gatsby");
// console.log(filteredBooks);


//map 
// const newBookarray =Bookarray.map((bk)=>bk.title+1);
// console.log(newBookarray);
//prints all titles+1

//chaining
const ex1=[1,2,3,4,55,6,7,8,9,20];
const mapexample= ex1.map( (bk)=>bk+10).map((bk)=>bk+1).filter((bk)=>bk>18);
console.log(mapexample);
