const number=[1,2,3,4,5,6];
console.log(number);
// const n=number.reduce( function(acc,curr){ return acc+curr},0);
// console.log(n);
const total=number.reduce((acc,curr)=>acc+curr,0);
console.log(total);
const cart=[  {title:"dsa course",price:1222},
    {title:"java course",price:1234},
    {title:"python course",price:1234},
    {title:"javascript course",price:1234},
    {title:"react course",price:1234}];
   const totalprice= cart.reduce( (acc,item)=>acc+ item.price ,0);
   console.log(totalprice);
