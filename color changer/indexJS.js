let hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let hexArrayPush = [];

let button = document.querySelector(".button");


function changer(){

    for (let i = 0; i < 6; i++) {
        let my = document.querySelector(".myPass");
        hexArrayPush.push(hexColor[Math.floor(Math.random() * hexColor.length)]);
        my.textContent = `#${hexArrayPush.join("")}`;
        my.style.backgroundColor = my.textContent;
    }       

    return my.style.backgroundColor;


}

button.addEventListener("click", changer());

