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
        revielField(x, y);
    }
}


function revielField(x, y) {
    if ( x < 0 ){
        return;
    }

    if( x >= model.minefieldSizeX ){
        return;
    }

    if(y < 0 ){
        return;
    }

    if( y >= model.minefieldSizeY ) {
        return;
    }

    var field = view.getViewField(x, y);
    if(!model.isRevield(x, y)){
        model.revielField(x, y);
        view.openCell(field);

        if (model.isBomb(x,y)) {
            view.showBomb(field);
            takeLive(); 
        } else {
            view.showBombsCount(field, model.countBombs(x,y));
            if(model.isTreasure(x, y)){
                view.showTresure(field);
                giveLive();
            }
            givePoint();
               
            if (model.countBombs(x,y)==0){
                revielField(x, y-1);
                revielField(x, y+1);
                revielField(x-1, y);
                revielField(x+1, y);
                revielField(x+1, y+1);
                revielField(x-1, y-1);
                revielField(x+1, y-1);
                revielField(x-1, y+1);
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
        if(!model.isRevield(x, y)){
            if(model.isFlagged(x,y)==false){ 
                view.showFlag(field);
                model.setFlag(x,y);
            }else{
                model.unsetFlag(x, y);
                view.noFlag(field);
            }
        }
    }
}
    

function givePoint(){
    var currentPoints = model.subPoints(1);
    view.updatePointsCounter(currentPoints);
    if(currentPoints == 0){
        view.showGameOver(' You won!');
        model.finishGame();
    }
}

function takeLive(){
    var current = model.takeLive(1);
    view.updateLiveCounter(current);
    if(current < 1){
        view.showGameOver(' You lost!');
        model.finishGame();    
    }
}

function giveLive(){
    view.updateLiveCounter(model.addLives(1));
}


