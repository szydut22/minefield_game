function initGame(){
    model.startGame();
    minefieldSizeY: 10,
    view.startGame(model.minefieldSizeX, model.minefieldSizeY, model.getLives(), model.getPoints());
}


function onFieldClick(field){
    var temp = field.id.split(".");
    var x = temp[1];
    var y = temp[2];
    x = parseInt(x);
    y = parseInt(y);
 
    if(model.isGameOver()==false){
        if(!model.isRevield(x, y)){
            model.revielField(x, y);
            view.openCell(field);
            givePoint();

            if (model.isBomb(x,y)) {
                view.showBomb(field);
                takeLive(); 
            } else {
                if(model.isTreasure(x, y)){
                    view.showTresure(field);
                    giveLive();
                }
            }
        }
        
    }
}

function onFieldRightClick(field){
    var temp = field.id.split(".");
    var x = temp[1];
    var y = temp[2];
    x = parseInt(x);
    y = parseInt(y);
        
        if(model.isGameOver()==false){
        if(model.isFlagged(x,y)==false){ 
            view.showFlag(field);
            model.setFlag(x,y);
        }else{
            model.unsetFlag(x, y);
            view.noFlag(field);
        }
    }
}
    

function givePoint(){
    var currentPoints = model.addPoints(1);
    view.updatePointsCounter(currentPoints);
}

function takeLive(){
    var current = model.takeLive(1);
    view.updateLiveCounter(current);
    if(current < 1){
        view.showGameOver();
        model.finishGame();    
    }
}

function giveLive(){
    view.updateLiveCounter(model.addLives(1));
}


