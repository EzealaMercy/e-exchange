var menu1 = document.querySelector('#menu1');
var l1 = document.querySelectorAll('.l1');
var h1 = document.querySelector('#select1 h5');
var rotate1 = document.querySelector('#select1');
var bit = document.querySelector('.bit');
var eth = document.querySelector('.eth6');

var menu2 = document.querySelector('#menu2');
var l2 = document.querySelectorAll('.l2');
var h2 = document.querySelector('#select2 h5');
var rotate2 = document.querySelector('#select2');

var swap = document.querySelector('.fa-retweet');

var menu = document.querySelector('.menu-but');
var side = document.querySelector('.side-bar');

var search = document.querySelector('.search-cont');
var search2 = document.querySelector('.search2');
var inp = document.querySelector('.search-cont .inp1');
var inp2 = document.querySelector('.search2 .inp');
var mag = document.querySelector('.fa-magnifying-glass')
var mag2 = document.querySelector('.search2 .fa-magnifying-glass');



rotate1.addEventListener('click', () =>{
    menu1.classList.toggle('active');  
    rotate1.classList.toggle('rotate')
})

l1.forEach(lis => {
    lis.addEventListener('click', () =>{
        h1.innerHTML = lis.innerHTML;
        bit.innerHTML = lis.innerText;
        menu1.classList.add('active')
        rotate1.classList.remove('rotate')
    })
})

rotate2.addEventListener('click', () =>{
    menu2.classList.toggle('live');  
    rotate2.classList.toggle('rotate2')
})

l2.forEach(list => {
    list.addEventListener('click', () =>{
        h2.innerHTML = list.innerHTML;
        eth.innerHTML = list.innerText; 
        menu2.classList.add('live')
        rotate2.classList.toggle('rotate2')
    })
})

swap.addEventListener('click', () =>{
    h1.innerHTML = h2.innerHTML;
    h2.innerHTML = h1.innerHTML;
})

menu.addEventListener('click', () =>{
    side.classList.toggle('active');
})

mag.addEventListener('click', () => {
    search.classList.toggle('active')
})
inp2.addEventListener('click', () => {
    search2.classList.toggle('active')
})
inp.addEventListener('click', () => {
    search.classList.toggle('active')
})
mag2.addEventListener('click', () => {
    search2.classList.toggle('active')
})

