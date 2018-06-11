var stickers = [ "#ff00ff", "#00FF00", "#0000FF" ];
var stickerZone = document.querySelector("#stickers");
var drawingZone = document.querySelector("#drawingZone");

var placedStickers = 0;

//init stuff
stickers.forEach((st) => {
    let newEl = document.createElement("div");
    newEl.classList.add("sticker");
    newEl.style.backgroundColor = st;
    newEl.draggable = true;
    newEl.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("color", event.target.style.backgroundColor);
    })
    stickerZone.appendChild(newEl);
})

drawingZone.addEventListener("drop", (event) => {
    event.preventDefault();

    if(placedStickers < 3) {

        let newEl = document.createElement("div");
        newEl.classList.add("stucker");
        newEl.style.top = event.pageY - drawingZone.offsetTop;
        newEl.style.left = event.pageX - drawingZone.offsetLeft;

        console.log(event);

        newEl.style.backgroundColor = event.dataTransfer.getData("color");
        drawingZone.appendChild(newEl);
    }
})


function allowDrop(ev) {
    ev.preventDefault();
}


/*
//This is too much work for now.
var journal = new Journal();

class Journal {

    constructor(selector) {
        this.element = document.querySelector(selector);
    }


}
*/