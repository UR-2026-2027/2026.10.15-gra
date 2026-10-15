let haslo = "javascript";
haslo = haslo.toUpperCase();

let ukryteHaslo = "";

let skuchy = 0;

for(let i = 0; i < haslo.length; i++) {
    if(haslo.charAt(i) === " ") {
        ukryteHaslo += " ";
    } else {
        ukryteHaslo += "-";
    }
}

const litery = [..."AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUVWXYZ"];

window.onload = start;

function start() {
    setPassword();
    generate_letters();
}

function setPassword() {
    document
    .getElementById('haslo')
    .innerHTML = ukryteHaslo;
}

function generate_letters() {
    let html = "";
    for(let i = 0; i < litery.length; i++) {
        let element = 
        "<div class='letter' onClick='check(" + i + ")'>" 
        + litery[i] + "</div>";
        html += element;
        if((i+1) % 8 == 0) {
            html+= "<br>";
        }
    }

    document.getElementById('litery').innerHTML = html;
}

function check(letter_no) {
    let letter = litery[letter_no];
    let trafienie = false;

    for(let i = 0; i < haslo.length; i++) {
        if(haslo.charAt(i) === letter) {
            ukryteHaslo = 
            ukryteHaslo.slice(0, i) + 
            letter + 
            ukryteHaslo.slice(i + 1);

            trafienie = true;
        }
    }

    setPassword();

    if(!trafienie) {
        skuchy++;
        document
        .getElementById('szubienica')
        .innerHTML = 
        "<img src='img/s" + skuchy + ".jpg'>";
    }

    if(skuchy >= 9) {
        document
        .getElementById('litery')
        .innerHTML = "Przegrałeś! Hasło to: " + haslo;
    }

    if(ukryteHaslo === haslo) {
        document
        .getElementById('litery')
        .innerHTML = "Gratulacje! Odgadłeś hasło!";
    }
}