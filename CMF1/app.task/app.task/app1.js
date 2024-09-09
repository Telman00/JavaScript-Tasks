const products = document.getElementById("products");
    
        const productData = [
            {id: "On Sale", image: "https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic18.webp", link: "https://themes.muffingroup.com/betheme-store2/product/benotebook2/", name: "BeNotebook2", price: "$2,500.00 – $5,300.00"},
            {id: "On Sale", image: "https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic17.webp", link: "https://themes.muffingroup.com/betheme-store2/product/benotebook2/", name: "BeHeadphones2", price: "$430.00"},
            {id: "On Sale", image: "https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic16.webp", link: "https://themes.muffingroup.com/betheme-store2/product/besmartphone2/", name: "BeSmartphone2", price: "$220.00 – $320.00"},
            {id: "On Sale", image: "https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic15.webp", link: "https://themes.muffingroup.com/betheme-store2/product/besmartwatch3/", name: "BeSmartWatch3", price: "$118.00 – $180.00"}
        ];
    
        let result = "";
    
        productData.forEach(function(item, index) {
           result += ` <div class="product">
           <em>${item.id}</em>
           <a href="${item.link}" target="_blank"><img src="${item.image}" alt="${item.name}"></a>
           <h1>${item.name}</h1>
           <p>${item.price}</p>
           </div>`;
        });
    
        products.innerHTML = result;
    