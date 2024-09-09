const month = new Date().getMonth();
let seasons;

switch (month) {
    case 11:
    case 0:
    case 1:
        seasons = "Winter seasons - (December, January, February)";
        break;

    case 2:
    case 3:
    case 4:
        seasons = "Spring seasons - (March, April, May)";
        break;

    case 5:
    case 6:
    case 7:
        seasons = "Summer seasons - (June, July, August)";
        break;

    case 8:
    case 9:
    case 10:
        seasons = "Autumn seasons - (September, October, November)";
        break;

    default:
        break;
}

document.getElementById("season").innerHTML = seasons;

