function initGame(){
    var minefiledTag = document.getElementById("minefield");
    generateMinefield(minefiledTag, minefieldSizeX, minefieldSizeY);
}

function onFieldClick(fieldId){
    console.log("kliknięto pole " + fieldId);
}

function onFieldRightClick(fieldId){
    console.log("kliknieto pole prawym prszycikiem myszy " + fieldId);
}

initGame();