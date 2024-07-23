// for (const iterator of object) {
//     console.log(" ");
// }
//iterator is just a variable
//=>iterator refers to anything which is iterable like array string object .
//=>object is iterable but not all object are iterable.
//=>object is iterable if it has a method called [Symbol.iterator] which returns an iterator.
// const greetings="hello world";

// for(greet of greetings){
//     console.log(`each char of greetings is ${greet}`);
// }

//Maps
const map= new Map();
map.set("name","sachin");
map.set("age",25);
map.set("city","mumbai");
map.set("country","india");
// for(const [key,value] of map){
//     console.log(key,value);
// }


// =>only maps can be iterated in this manner
// for (const iterator of object) {
//     //for arrays to give values direct;y
// }
// for (const key in object) {
//     //for objects to give values direct;y by keys giving key value and object[key ]giving value
// }
// for (const key in object) {
//    //for array
// }
//traversing objects
// const obje1 =  {1:"a",2:"b",3:"c"}
// for(const key in obje1){
//     console.log(key,obje1[key]);
// }
//=>1 a
// 2 b
// 3 c
//key gives key and mybje1[key] gives value of that key


//traversing arrays
// const obje2=['10',20,30,400,5];
// for(const key in obje2){
//     console.log(key);
// }
//=>0
// 1
// 2
// 3
// 4
//key (iterator)gives index of the array and obje2[key] gives value of that index.
// for(const key of obje2){
//     console.log(key);
// }
//=>10
// 20
// 30
// 400
// 5
// for of loop gives values by iterators


// const arr= [1,2,3,4,5,6,7]
// for(const key of arr){
//     console.log(key);
// }
//same result
// arr.forEach(function(item){
//     console.log(item);
// })
