model = {
    minefieldSizeX: 16, 
    minefieldSizeY: 10,

    minefield: null,
    initMinefiled: initMinefiledModel2,
    revielField: revielField2,
    isRevield: isrevielField2,
    isTresure: isTreasure2,
    isBomb: isBomb2,
}


function isrevielField2(x, y){
    var cell = model.minefield[x][y];
    if(cell.isRevield){
        return true;
    }else{
        return false;
    }
}

function isTreasure2(x, y){
    var cell = model.minefield[x][y];
    if(cell.isTreasure){
        return true;
    }else{
        return false;
    }
}
function isBomb2(x, y){
    var cell = model.minefield[x][y];
    if(cell.isBomb){
        return true;
    }else{
        return false;
    }
}


function initMinefiledModel2(sizeX, sizeY){
    model.minefield = [];
    
    for (var i = 0; i < sizeX; i++) {
        var row = [];

        for (var j = 0; j < sizeY; j++) {
            var cell = {
                hasBomb: false,
                hasTresure: false,
                isRevield: false
            }        
            if (Math.random() < 0.1){
                cell.Bomb=true;
            }else if (Math.random() < 0.3){
                cell.Treasure=true;
            }
            row.push(cell);
        }
        
       model.minefield.push(row);
    }
    console.log(model);
}

function revielField2(x,y){
    model.minefield[x][y].isRevield=true;
}

