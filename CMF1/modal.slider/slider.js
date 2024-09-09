
const slide = document.querySelector('.slide img');
const next = document.querySelector('.next');
const delet = document.querySelector('.delete');


const images = [
    {
        src: 'https://iili.io/d36prss.jpg',
                                                                                                                                                                                                                       
    },
    {
        src: 'https://iili.io/d36pUzX.jpg',
       
    },
    {
        src: 'https://iili.io/d36p6qG.jpg',
        
    },
    {
        src: 'https://iili.io/d36pP1f.jpg',
        
    },
    {
        src: 'https://iili.io/d36pQ72.jpg',
        
    },
    {
        src: 'https://iili.io/d36pgXn.jpg',
       
    },
    {
        src: 'https://iili.io/d36pLdl.jpg',
        
    },
    {
        src: 'https://iili.io/d36p8bt.jpg"',
        
    },
    {
        src: 'https://iili.io/d36ptm7.jpg"',
       
    },
    {
        src: 'https://iili.io/d36pig4.jpg',
        
    },
];

let index = 0;



next.addEventListener('click',() => {
    
    changeSlide();    

});

delet.addEventListener('click', () => {
    deleteImage(index);
});

function changeSlide() {

    index++;

    if(index == images.length) {
        index = 0;
    }


    slide.src = images[index].src;
}
    function deleteImage(indexToDelete) {
        images.splice(indexToDelete, 1); 
        if (indexToDelete >= images.length) {
            index = 0; 
        }
        slide.src = images[index].src; 
    }

    let modal = document.querySelector('.modal');

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

