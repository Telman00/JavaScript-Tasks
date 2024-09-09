const API_URL = 'http://localhost:3000/products'; 
const productsContainer = document.getElementById("products");

async function getProducts() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const productData = await response.json();

        let result = "";

        productData.forEach(item => {
            result += `
            <div class="product">
                <em>${item.status}</em>
                <a href="${item.link}" target="_blank"><img src="${item.image}" alt="${item.name}"></a>
                <h1>${item.name}</h1>
                <p>${item.price}</p>
                <button onclick="removeProduct('${item.id}')">Delete</button>
            </div>
            `;
        });

        productsContainer.innerHTML = result;
    } catch (error) {
        console.error('Error fetching data:', error);
        productsContainer.innerHTML = '<p>Failed to fetch products. Please try again later.</p>';
    }
}

getProducts();

async function removeProduct(id) {

  if (confirm("Silmək istədiyinizə əminsiniz?")){

    const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
  }
  else{return};
    
    
}

document.getElementById('myForm').addEventListener('submit', async(event) =>{
    event.preventDefault()

   const name = document.getElementById('ProductName').value
   const price = '$' + document.getElementById('ProductPrice').value
   const image = document.getElementById('ProductImage').value
   const newProduct = {
       name,
       price,
       image,
   }

   try {
       const res = await fetch(API_URL, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(newProduct)
       });

       const data = await res.json();
       console.log('Product Added hired:', data);
       alert('Successfully!');
       document.getElementById('myForm').reset();

   } catch (err){
       console.error('Error is:', err);
       alert('Failed')
       
   }
}) 