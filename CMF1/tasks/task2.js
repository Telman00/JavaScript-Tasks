// JavaScript For Loop
let car = [
    "Mercedec", "Niva", "Porshe",
    "Mercedec", "Niva", "Porshe","BMW","Ferrari"];

let outputCar = [];

let count = 0;

let start = false;

for (let i = 0; i < car.length; i++) {
    for (let j = 0; j < outputCar.length; j++) {
        if (car[i] == outputCar[j]) {
            start = true;
        }
    }
    count++;
    if (count == 1 && start == false) {
        outputCar.push(car[i]);
    }
    start = false;
    count = 0;
}

console.log(outputCar);

// Array filter() method

let herf = [
    'a', 'b', 'b', 'c', 'd', 
    't', 'o', 'r', 'a', 'e', 
    'e', 't', 's'
];

let outputHerf = [];

function removewithfilter(herf) {
    let outputHerf = herf.filter(function (v, i, self) {

    return i == self.indexOf(v);

    });

    return outputHerf;
}

console.log(removewithfilter(herf));

// set() Method

let web = [
    "PhP", "CSS", "JavaScript", "HTML", "Python",
    "JavaScript", "Java", "HTML", "CSS"
];

let outputWeb = [];

function removeusingSet(web) {
    let outputWeb = Array.from(new Set(web))
    return outputWeb
}

console.log(removeusingSet(web));
