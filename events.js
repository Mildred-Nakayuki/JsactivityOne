const btn1 = document.querySelector('#btn1');
const header1 = document.querySelector('.header1');

const colors =["red","black","blue","Green"];
var i= 0;

btn1.addEventListener('click',()=>{
    document.body.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;  
  })

  /*let color = getrandomNo();
  getrandomNo(){
    Math.floor(Math.random()*colors.length)*/

  
