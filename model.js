model = {
    minefieldSizeX: 16, 
    minefieldSizeY: 10,
    
    minefield: [],

    lives: 1,
    points: 0,

    // export these functions as model API
    initMinefiled: initMinefiledModel2,
    
    revielField: revielField2,
    isRevield: isRevield,
    isTreasure: isTreasure2,
    isBomb: isBomb2,

    addLives: addLives,
    takeLive: takeLive,
    addPoints: addPoints
}

function isRevield(x, y){
    var cell = model.minefield[x][y];
    if(cell.revield){
        return true;
    }else{
        return false;
    }
}

function isTreasure2(x, y){
    var cell = model.minefield[x][y];
    if(cell.treasure){
        return true;
    }else{
        return false;
    }
}
function isBomb2(x, y){
    var cell = model.minefield[x][y];
    console.log(cell);
    if(cell.bomb){
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
                bomb: false,
                treasure: false,
                revield: false
            }        
            if (Math.random() < 0.2){
                cell.bomb=true;
            }else if (Math.random() < 0.1){
                cell.treasure=true;
            }
            row.push(cell);
        }
        
       model.minefield.push(row);
    }
}

function revielField2(x,y){
    model.minefield[x][y].revield=true;
}

function addLives(l){
    model.lives = model.lives + l;
    return model.lives;
}

function takeLive(){
    model.lives = model.lives - 1;
    return model.lives;
}

function addPoints(p){
    model.points = model.points + p;
    return model.points;
}

