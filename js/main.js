let main = document.getElementById('main')
let btn = document.querySelector('.mood')
let list = document.querySelector('#linkat')
let nav = document.querySelector('nav')
let cardq = document.querySelector('.cardq')
btn.onclick = ()=>{
    if(main.classList.contains('dark')){
        main.classList=" "
        btn.classList="btn btn-secondary ml-2"
        btn.textContent="Dark Mode"
        nav.classList.add('navbar-light')
        nav.classList.remove('navbar-dark')
     
    }else
    {
        main.classList="dark"
        btn.classList=" btn btn-light ml-2"
        btn.textContent="Light Mode"
        nav.classList.add('navbar-dark')
        nav.classList.remove('navbar-light')
       
    }
}
let cards = document.getElementsByClassName('cardz')
let Blog = document.getElementById('Blog')
new WOW().init();

$(document).ready(function(){
    $(window).scroll(function(){
        let x = $(window).scrollTop()
        if(x>100 || x<1900){
            $(cards).addClass('wow animate__backInRight')
        } 
        console.log(x)
    }) 
    , function(){
        if(x>1900){
            $(Blog).addClass('wow animate__backInLeft')
        }
    }

})

// $(document).ready(function(){
//          $(window).scroll(function(){
//             let x = $(window).scrollTop()
//             if(x>1900){
//             $(Blog).addClass('wow animate__backInLeft')
//             }})})