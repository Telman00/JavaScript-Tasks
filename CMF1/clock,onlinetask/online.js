
const network = document.querySelector('.online-checker');

window.addEventListener('online', ()=>{
   setTimeout(() => network.style.transform="translateY(-100%)",2000);
   network.style.backgroundColor = "green"
   network.textContent ="Online"

})

window.addEventListener('offline', ()=>{
    network.style.transform="translateY(0)";
   
 
 })

