function light(){
   const container= document.getElementById('container');
   const islit=container.style.background =='white';
   if(islit){
    container.style.background='black';
    container.style.color='white';
   }
   else{
    container.style.background='white';
    container.style.color='black';
   }
};