const data = [
    { country: "Türkiyə", population: 83000000 },
    { country: "ABD", population: 331000000 },
    { country: "Almaniya", population: 83100000 },
    { country: "Fransa", population: 65200000 },
    { country: "İngiltərə", population: 68100000 },
    { country: "İtaliya", population: 60300000 },
    { country: "Kanada", population: 37600000 },
    { country: "Yaponiya", population: 125000000 }
];

function sortByCountry() {
    data.sort(function(a, b){
        let x = a.country.toLowerCase();
        let y = b.country.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
    displayTable();
}

function sortByPopulation() {
    data.sort((a, b) => a.population - b.population);
    displayTable();
}

function displayTable() {
    let result = "<table>";
    result += "<tr><th>Country Name</th><th>Population</th></tr>";
    data.forEach(function(item, index) {
        result += `<tr><td>${item.country}</td><td>${item.population}</td></tr>`;
    });
    result += "</table>";
    document.getElementById("table").innerHTML = result;
}
displayTable();

