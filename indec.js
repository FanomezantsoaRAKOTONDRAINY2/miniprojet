
let btn = document.querySelector('button'),
    body = document.querySelector('body') ;
    spn = document.querySelector('#sapan')

const halako = ['red','rgb(68, 9, 48)', 'green', 'blue','pink'];

let currentIndex = 0;


 btn.onclick = function(){
  body.style.background = halako[currentIndex];
  spn.textContent = halako[currentIndex];
  currentIndex = (currentIndex + 1) %  halako.length;

  console.log(halako[currentIndex]);
 };

