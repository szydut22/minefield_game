model = {
    minefieldSizeX: 16, 
    minefieldSizeY: 10,

    minefield: [],
    initMinefiled: initMinefiledModel2,
    revielField: revielField2,
    isRevield: isrevielField2,
    isTreasure: isTreasure2,
    isBomb: isBomb2,
}

function isrevielField2(x, y){
    var cell = model.minefield[x][y];
    if(cell.hasRevield){
        return true;
    }else{
        return false;
    }
}

function isTreasure2(x, y){
    var cell = model.minefield[x][y];
    if(cell.hasTreasure){
        return true;
    }else{
        return false;
    }
}
function isBomb2(x, y){
    var cell = model.minefield[x][y];
    console.log(cell);
    if(cell.hasBomb){
        console.log('isBomb zwraca true');
        return true;
    }else{
        console.log('isBomb zwraca false');
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
            if (Math.random() < 0.2){
                cell.hasBomb=true;
            }else if (Math.random() < 0.1){
                cell.hasTreasure=true;
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

