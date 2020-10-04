var orangeSquare = document.getElementById("drop-element");
var pinkSqaureContainer = document.getElementsByClassName("draggable-container")[0];

var div = document.createElement("div");

if("draggavle" in div || ("ondragstart" in div && "ondrop" in div))
console.log("Drag and Drop API is supported");

function onDragStartForPinkSquare(event){
    event.dataTransfer.setData("text/plain", event.target.id);
    event.dataTransfer.effectsAllowed = "move";
    event.target.style.cursor = "move";
    setTimeout(()=>{
        event.target.classList.add('hide')
    }, 0);
}

function onDragEndForPinkSquare(event){
    event.target.style.cursor = "pointer";
    event.target.classList.remove('hide');
}

function onDragOver(event){
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
}

function onDrop(event, color){
    event.preventDefault();
    var id = event.dataTransfer.getData("text/plain");
    var pinkSquare = document.getElementById(id);

    if(color === "pink"){
        if(!pinkSquare.parentNode.isSameNode(pinkSqaureContainer))
        event.target.appendChild(pinkSquare);
    }else{
        if(!pinkSquare.parentNode.isSameNode(orangeSquare))
        event.target.appendChild(pinkSquare);
    }
}

function onDragOverForOrangeSquare(event){
    onDragOver(event);
}

function onDropForOrangeSquare(event){
    onDrop(event, "orange");
}

function onDragOverForPinkSquareContainer(event) {
    onDragOver(event)
}

function onDropForPinkSquareContainer(event){
    onDrop(event, "pink");
}