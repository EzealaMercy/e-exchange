var nav = document.querySelector('.navbar');
var main = document.querySelector('.main-p');

var menu = document.querySelector('.menu-but');
var menu2 = document.querySelector('.fa-xmark');
var ul = document.querySelector('.nav-ul');

var auto = document.querySelector('.auto-type');
var carier = ['Crypto','Usdts', 'Nfts', 'Giftcards'];
var carierIndex = 0;
var xterIndex = 0;
update();

var stepBtn = document.querySelectorAll('.btn');
var stepd1 = document.querySelectorAll('.stepdata1');
var steps = document.querySelector('.steps-but');

var stats = document.querySelectorAll('#stats');

var ans1 = document.querySelector('#cloa1');
var quest1 = document.querySelector('#clo1');

var ans2 = document.querySelector('#cloa2');
var quest2 = document.querySelector('#clo2');

var ans3 = document.querySelector('#cloa3');
var quest3 = document.querySelector('#clo3');

var ans4 = document.querySelector('#cloa4');
var quest4 = document.querySelector('#clo4');

var ans5 = document.querySelector('#cloa5');
var quest5 = document.querySelector('#clo5');

var ans6 = document.querySelector('#cloa6');
var quest6 = document.querySelector('#clo6');

var review = document.querySelector('#rev-slide');
var arrowUp = document.querySelector('.fa-arrow-up');
var arrowDown = document.querySelector('.fa-arrow-down');
var rev = document.querySelectorAll('.rev');


var currentImg = 1;
var timeout;



window.addEventListener('scroll', () =>{
    if(
        window.scrollY > main.offsetTop - nav.offsetHeight - 0
    ){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
})
menu.addEventListener('click', () => {
    ul.classList.toggle('active')
    
   
  })
  var changeIcon = function(icon){
      icon.classList.toggle('fa-times');
} 

function update(){
    xterIndex++;
    auto.innerHTML = `
       ${carier[carierIndex].slice(0, xterIndex)}
      `;
    if (xterIndex === carier[carierIndex].length){
        carierIndex++;
        xterIndex= 0;
    }
    if(carierIndex === carier.length){
        carierIndex = 0;
    }
    setTimeout(update, 300);
}

steps.addEventListener('click', (tabs) =>{
    const id = tabs.target.dataset.id;

    if (id){
        stepBtn.forEach((btn) =>{
            btn.classList.remove('active')
        })
        tabs.target.classList.add('active');

        stepd1.forEach((article) =>{
            article.classList.remove('active')
        })
        const element = document.getElementById(id)
        element.classList.add('active')
    }
})

stats.forEach((count) => {
    count.innerText = '0';
        incriment();
    
    function incriment(){
        let currentNum = +count.innerText;
        const dataCeil = count.getAttribute('data-ceil')
        const increase = dataCeil/15
        currentNum = Math.floor(currentNum + increase)

        if(currentNum < dataCeil){
            count.innerText = currentNum

            setTimeout(incriment, 100)
        }else{
            count.innerText = dataCeil
        }
    }
})

quest1.addEventListener('click', () => {
    ans1.classList.toggle('active');
    quest1.classList.toggle('active')
})
quest2.addEventListener('click', () => {
    ans2.classList.toggle('active');
    quest2.classList.toggle('active')
})
quest3.addEventListener('click', () => {
    ans3.classList.toggle('active');
    quest3.classList.toggle('active')
})
quest4.addEventListener('click', () => {
    ans4.classList.toggle('active');
    quest4.classList.toggle('active')
})
quest5.addEventListener('click', () => {
    ans5.classList.toggle('active');
    quest5.classList.toggle('active')
})
quest6.addEventListener('click', () => {
    ans6.classList.toggle('active');
    quest6.classList.toggle('active')
})

arrowUp.addEventListener('click', () =>{
    currentImg++
    clearTimeout(timeout)
    updateImg()
})
arrowDown.addEventListener('click', () =>{
    currentImg--
    clearTimeout(timeout)
    updateImg()
})

updateImg()
function updateImg(){
    if(currentImg > rev.length){
        currentImg = 1;
    }else if(currentImg < 1){
        currentImg = rev.length;
    }
    review.style.transform = `translateY(-${(currentImg - 1) * 300}px)`;
    timeout = setTimeout(()=>{
        currentImg++
        updateImg()
    }, 3000)

}
function send(){
    var contname = document.getElementById('contname').value;
    var subject = document.getElementById('subject').value;
    var textera = document.getElementById('textera').value;
    var leta = /^[a-zA-Z]*$/;


    if(contname.trim() == ""){
        document.getElementById('contname').style.border= '2px solid crimson';
        return false
    }
    else if(!contname.match(leta)){
        document.getElementById('contname').style.border= '2px solid crimson';
        return false;
    }
    else if(subject.trim()==""){
        document.getElementById('subject').style.border= '2px solid crimson';
        return false;
    }
    else if(textera.trim()==""){
        document.getElementById('textera').style.border= '2px solid crimson';
        return false;
    }
    else{
        alert('Thank you');
        return true;
    }
    
}


