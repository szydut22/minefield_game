/**
 * 
 * This is a model handler for minesweaper game 
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
/**
 * This function set true for flag 
 * It selects the filed by params value of x and y
 * 
 * @param {any} x 
 * @param {any} y 
 */
function setFlag(x,y){
    var cell = model.minefield[x][y];
    cell.flag=true;
}
/**
 * This function set false for flag 
 * It selects the filed by params value of x and y
 * @param {any} x 
 * @param {any} y 
 */
function unsetFlag(x,y){
    var cell = model.minefield[x][y];
    cell.flag = false;
}
/**
 * This fucntion returns true if particular model flag is currently set.
 * It selects the filed by params value of x and y
 * @param {any} x 
 * @param {any} y 
 * @returns bool true if the flag is set
 */
function isFlagged(x,y){
    var cell = model.minefield[x][y];
    if(cell.flag){
        return true;
    }else{
        return false;
    }
    
}
/**
 * This function returns true if Treasure is currently clicked.
 * It selects the filed by params value of x and y
 * @param {any} x 
 * @param {any} y 
 * @returns true/false
 */
function isTreasure(x, y){
    var cell = model.minefield[x][y];
    if(cell.treasure){
        return true;
    }else{
        return false;
    }
/**
 * This function returns true if Bomb is currently clicked.
 * It selects the filed by params value of x and y
 * @param {any} x 
 * @param {any} y 
 * @returns true/false
 */
function isBomb(x, y){
    var cell = model.minefield[x][y]; 
    if(cell.bomb){
        return true;
    }else{
        return false;
    }
}

/**
 * This fucntion 
 * 
 * @param {any} sizeX 
 * @param {any} sizeY 
 */
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
/**
 * This function set true for reviel Field.
 * It selects the filed by params value of x and y
 * @param {any} x 
 * @param {any} y 
 */
function revielField(x,y){
    model.minefield[x][y].revield=true;
}
/**
 * 
 * 
 * @param {any} l 
 * @returns 
 */
function addLives(l){
    model.lives = model.lives + l;
    return model.lives;
}
/**
 * 
 * 
 * @returns 
 */
function takeLive(){
    model.lives = model.lives - 1;
    return model.lives;
}
/**
 * 
 * 
 * @param {any} p 
 * @returns 
 */
function subPoints(p){
    model.points = model.points - p;
    return model.points;
}
/**
 * 
 * 
 */
function finishGame(){
    model.gameOver = true;
}
/**
 * 
 * 
 */
function startGame(){
    model.gameOver = false;
    model.lives = 1;
    model.points = model.minefieldSizeX * model.minefieldSizeY;
    model.initMinefiled(model.minefieldSizeX, model.minefieldSizeY);
}
/**
 * This function returns true if game is currently finished
 * 
 * @returns bool true if game is over 
 */
function isGameOver(){
    if(model.gameOver == true){
        return true;
    }else{
        return false;
    }
}
/**
 * 
 * 
 * @returns 
 */
function getLives(){
    return model.lives;
}
/**
 * This function adds points to your game
 * 
 * @returns points for your game 
 */
function getPoints(){
    return model.points;
}
/**
 * This function is counting bombs around your revield bracket
 * It selects the filed by params value of x and y
 * 
 * @param {any} x 
 * @param {any} y 
 * @returns 
 */
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
