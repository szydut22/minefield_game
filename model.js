/**
 * 
 *  
 * 
 * @author Szymon Dutka
 * @license: MIT
 * 
 */


model = {
    minefieldSizeX: 10, 
    minefieldSizeY: 10,
    
    minefield: [],

    lives: 1,
    points: 0,
    

    gameOver: false,

    // export these functions as model API
    initMinefiled: initMinefiledModel2,
    
    revielField: revielField,
    isRevield: isRevield,
    isTreasure: isTreasure,
    isBomb: isBomb,
    isFlagged: isFlagged,
    setFlag: setFlag,
    unsetFlag: unsetFlag,

    addLives: addLives,
    takeLive: takeLive,
    subPoints: subPoints,

    finishGame: finishGame,
    startGame: startGame,
    isGameOver: isGameOver,

    getLives: getLives,
    getPoints: getPoints,

    countBombs: countBombs,
}

/**
 * This function returns true if a particular model field is currently revieled.
 * It selects the filed by params value of x and y
 *
 * @param {int} x  
 * @param {int} y
 * @returns bool true if the field is revield
 */
function isRevield(x, y){
    var cell = model.minefield[x][y];
    if(cell.revield){
        return true;
    }else{
        return false;
    }
}

function setFlag(x,y){
    var cell = model.minefield[x][y];
    cell.flag=true;
}

function unsetFlag(x,y){
    var cell = model.minefield[x][y];
    cell.flag = false;
}

function isFlagged(x,y){
    var cell = model.minefield[x][y];
    if(cell.flag){
        return true;
    }else{
        return false;
    }
    
}
    
function isTreasure(x, y){
    var cell = model.minefield[x][y];
    if(cell.treasure){
        return true;
    }else{
        return false;
    }
}
function isBomb(x, y){
    var cell = model.minefield[x][y]; 
    if(cell.bomb){
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
                bomb: false,
                treasure: false,
                revield: false,
                flag: false,
            }        
            if (Math.random() < 0.3){
                cell.bomb=true;
                model.points = model.points - 1;
            }else if (Math.random() < 0.3){
                cell.treasure=true;
            }
            row.push(cell);
        }
        
       model.minefield.push(row);
    }
}

function revielField(x,y){
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

function subPoints(p){
    model.points = model.points - p;
    return model.points;
}

function finishGame(){
    model.gameOver = true;
}

function startGame(){
    model.gameOver = false;
    model.lives = 1;
    model.points = model.minefieldSizeX * model.minefieldSizeY;
    model.initMinefiled(model.minefieldSizeX, model.minefieldSizeY);
}

function isGameOver(){
    if(model.gameOver == true){
        return true;
    }else{
        return false;
    }
}

function getLives(){
    return model.lives;
}

function getPoints(){
    return model.points;
}

function countBombs(x, y){
    var bombsCount = 0;
    if(y > 0 && model.minefield[x][y - 1].bomb == true){
        bombsCount = bombsCount + 1; 
    }
    if(y < model.minefieldSizeY - 1 && model.minefield[x][y + 1].bomb == true){
        bombsCount = bombsCount + 1; 
    }
    if(x > 0 && model.minefield[x - 1][y].bomb == true){
        bombsCount = bombsCount + 1; 
    }
    if(x < model.minefieldSizeX - 1 &&  model.minefield[x + 1][y].bomb == true){
        bombsCount = bombsCount + 1; 
    }
    if(x > 0 && y > 0 && model.minefield[x - 1][y - 1].bomb == true){
        bombsCount = bombsCount + 1; 
    }
    if(x < model.minefieldSizeX - 1 && y < model.minefieldSizeY - 1 && model.minefield[x + 1][y + 1].bomb == true){
        bombsCount = bombsCount + 1; 
    }
    if(x > 0 && y < model.minefieldSizeY - 1 && model.minefield[x - 1][y + 1].bomb == true){
        bombsCount = bombsCount + 1; 
    }
    if(x < model.minefieldSizeX - 1 && y > 0 && model.minefield[x + 1][y - 1].bomb == true){
        bombsCount = bombsCount + 1; 
    }
    
    return bombsCount;
}           
