//Custom-cursor

const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove',(event)=> {


cursor.style.left = `${event.clientX}px`;
cursor.style.top = `${event.clientY}px`



console.log(event.clientX);
console.log(event.clientY);
})

btn.addEventListener('click',()=>console.log("Salam"))