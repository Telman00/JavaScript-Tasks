const accord = document.querySelectorAll('.accordion-items');

 accord.forEach(function(item){
    item.addEventListener('click',function(){
       

    if (!item.classList.contains('active')) {

        removeActives();
        
        this.classList.add('active')
        
    }

    else {
        this.classList.remove('active')
    }

    })
 })

 function removeActives(){

    accord.forEach((item) =>{
        item.classList.remove('active')
    })
 }