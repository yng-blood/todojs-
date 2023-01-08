let displaythis = document.getElementById('displaythis');
let button1 = document.getElementById('button1');
let flwin = document.getElementById('flwin');
let cards = document.createElement("cards");
let boxnme = document.getElementsByClassName("boxview");
displaythis.addEventListener('click', function visible() {
    let togglethis = document.getElementById('togglethis');
    let button2 = document.getElementById('button2');
    if (togglethis.style.display = 'none') {
        togglethis.style.display = 'block';
    }

})
let button2 = document.getElementById('button2');
button2.addEventListener('click', function visible() {
    let togglethis = document.getElementById('togglethis');
    if (togglethis.style.display = 'block') {
        togglethis.style.display = 'none';
    }

})

var input_heading = document.getElementById("input_heading");
button1.addEventListener('click', function mydivcard() {
    let divElements = document.createElement("div");
    let h1Element = document.createElement("h1");
    divElements.className = "cardview";
    divElements.style = "display:inlinebock"
    divElements.innerHTML = h1Element;
    boxnme[0].appendChild(divElements);
    //add btn
    let adddiv = document.createElement("div");
    adddiv.setAttribute("id", "add+div");
    //delbtn
    let deletediv = document.createElement("div");
    deletediv.setAttribute("id", "del-div");

})
divElements.appendChild(h1Element);
divElements.appendChild(deletediv);
divElements.appendChild(adddiv);

function addDataObj() {
    let inputElement = document.getElementById("input_heading").innerText;
    let objData = {
        id: Date.now(),
        input: value,
    }


    arrayObj.push(inputElement);

}