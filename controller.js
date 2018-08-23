function initGame(){
    var minefiledTag = document.getElementById("minefield");
    generateMinefield(minefiledTag, minefieldSizeX, minefieldSizeY);
}

function onFieldClick(field){
    console.log("kliknięto pole " + field.id);
}

function onFieldRightClick(field){
    console.log("kliknieto pole prawym prszycikiem myszy " + field.id);
}

initGame();