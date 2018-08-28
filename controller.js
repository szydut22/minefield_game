function initGame(){
    var minefiledTag = document.getElementById("minefield");
    generateMinefield(minefiledTag, model.minefieldSizeX, model.minefieldSizeY);
    model.initMinefiled(model.minefieldSizeX, model.minefieldSizeY);
    console.log(model);
}

function onFieldClick(field){
    var temp = field.id.split(".");
    var x = temp[1];
    var y = temp[2];
    x = parseInt(x);
    y = parseInt(y);
    console.log(x, y);
    console.log("kliknięto pole " + field.id);
    model.revielField(x,y);
    view.openCell(openCell);
    
    //model.isBomb(x,y) 
    //model.isTresure(x,y)
    //model.isRevield(x,y)
    //view.showBomb(field);
    //view.showTresure(field)

  

}

function onFieldRightClick(field){
    console.log("kliknieto pole prawym prszycikiem myszy " + field.id);
}


initGame();