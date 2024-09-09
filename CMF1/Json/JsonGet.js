// const products = document.getElementById("products");
// let result = ""; 

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => res.json())
//   .then(data => {
//     data.forEach(item => {
//       result += `<div class="product">{
//                   <p>"userId": ${item.userId},</p>
//                   <p>"id": ${item.id},</p>
//                  <p> "title": "${item.title}",</p> 
//                   <p>"body": "${item.body}"</p> 
//       }</div>`;
//     });
//     products.innerHTML = result; 
//   })
async function getPosts() {
    

  const products = document.querySelector('.products');
  
  
  
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
      const posts = await res.json()
    posts.forEach(item =>{
  
  
  products.innerHTML +=
  `<div class="products">{
                      <p>"userId": ${item.userId},</p>
                     <p>"id": ${item.id},</p>
                    <p> "title": "${item.title}",</p> 
                     <p>"body": "${item.body}"</p> 
         }</div>`;
    });
  }
  
  
  getPosts();