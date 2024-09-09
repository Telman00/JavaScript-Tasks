

const API_URL = `http://localhost:3000/`





async function getCars() {

    const cars = document.querySelector('.cars');
    const res = await fetch(`${API_URL}cars`);
    const data = await res.json();

   let result = ''
   
    data.forEach(element => {

const {name, price,id} = element;



result +=`
<hr>
<div class="card">
<h2>${name}</h2>
<h3>${price}</h3>
<button onclick="removeCar('${id}')">Delete</button>


<hr>

</div>



`


    });

    cars.innerHTML = result;
}

getCars();

async function removeCar(id) {

    const res = await fetch(`${API_URL}cars/${id}`, {
        method: 'DELETE'
    });
    
    
}
removeCar();





// let names = ['iliakan', 'remy', 'jeresig'];

// let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

// Promise.all(requests)
  
//   .then(responses => Promise.all(responses.map(r => r.json())))
//     .then(users => users.forEach(user => alert(user.name)));

// minute 18:00 task - Promise.All

// minute 1:18:00 task - Modal Boxes

// minute 1:28:00 task


