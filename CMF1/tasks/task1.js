const mobileMenu = document.querySelector('.mobile-menu');
const btn = document.querySelector('.btn');
const close = document.querySelector('.close');

btn.addEventListener('click', ()=>{
    if( !mobileMenu.classList.contains('open')){
        mobileMenu.classList.add('open')
    }
        else{
   mobileMenu.classList.remove('open')
    } 
})

close.addEventListener('click',() => {
    mobileMenu.classList.remove('open')
})