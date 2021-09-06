const btn = document.querySelector('#btn1');
const header1 = document.querySelector('.header1');
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')


btn1.addEventListener('click',()=>{
    header1.style.color = 'red';
    console.log('text change 2');
})

btn2.addEventListener('click',()=>{
  header1.style.color = 'blue';
  console.log('text change');
})

btn3.addEventListener('click',()=>{
    header1.style.color = 'white';
    console.log('text change');
  })