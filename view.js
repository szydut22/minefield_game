view = {
    openCell: openCell,
    showBomb: showBomb,
    showTresure: showTresure
}


function openCell(field){
    field.style.backgroundColor = "white";
}

function showBomb(field){
	field.innerHTML = "<img src='bomb.svg'>";
}

function showTresure(field){
    field.innerHTML = "<img src='treasure.svg'>";
}