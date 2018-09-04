view = {
    openCell: openCell,
    showBomb: showBomb,
    showTresure: showTresure,
    showFlag: showFlag,
    showBombsCount: showBombsCount,
    noFlag: noFlag,

    updateLiveCounter: updateLiveCounter,
    updatePointsCounter: updatePointsCounter,

    showGameOver: showGameOver,
    hideGameOver: hideGameOver,

    generateMinefield: generateMinefield,

    startGame: startGame,

    getViewField: getViewField
}

// funkcja zwraca tag html o id field.x.y
function getViewField(x, y){
    var id = 'field.' + x + '.' + y;
    return document.getElementById(id);
}

function openCell(field){
    field.style.backgroundColor = "white";
}

function showBomb(field){
	field.innerHTML = "<img src='bomb.svg'>";
}

function showTresure(field){
    var currentHtml = field.innerHTML;
    field.innerHTML = "<img src='treasure.svg'>";
    setTimeout(function(){ hideTreasure(field, currentHtml); }, 1500);
}

function hideTreasure(field, previousHtml = ""){
    field.innerHTML = previousHtml;
}

function showBombsCount(field, count){
    if(count > 0){
        field.innerHTML = count;
    }
}

function showFlag(field){
    field.innerHTML = "<img src='flag.svg'>";
}

function noFlag(field){
    field.innerHTML = "";
}

function showGameOver(message){
    document.getElementById('gameover').innerHTML = message + " GAME OVER!";
}

function hideGameOver(){
    document.getElementById('gameover').innerHTML = "";
}


function updateLiveCounter(liveNo) {
    document.getElementById('livesmeter').innerHTML  = liveNo;    
}

function updatePointsCounter(points){
    document.getElementById('pointsmeter').innerHTML = points;
}

function generateMinefield(sizeX, sizeY) {
    var minefiled = document.getElementById("minefield");
      // get the reference for the body
        
      // creates a <table> element and a <tbody> element
      var tbl = document.createElement("table");
      var tblBody = document.createElement("tbody");
     
      // creating all cells
      for (var i = 0; i < sizeX; i++) {
        // creates a table row
        var row = document.createElement("tr");
     
        for (var j = 0; j < sizeY; j++) {
          // Create a <td> element and a text node, make the text
          // node the contents of the <td>, and put the <td> at
          // the end of the table row
          var id = "field." + i + "." + j;
          var cell = document.createElement("td");
          cell.setAttribute("width","40px");
          cell.setAttribute("height","40px");
          cell.setAttribute("bgcolor","grey");
          cell.setAttribute("onclick","onFieldClick(this)");
          cell.setAttribute("oncontextmenu","onFieldRightClick(this)");
          cell.setAttribute("id",id);
          var cellText = document.createTextNode("");
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
        tblBody.appendChild(row);
      }
 
    tbl.appendChild(tblBody);
 
    clearMinefieldView(minefiled);
    minefiled.appendChild(tbl);

 }

 function clearMinefieldView(minefiled){
    for(var i = 0; i < minefiled.childNodes.length; i++){
          minefiled.removeChild(minefiled.childNodes[0]); 
    }
}

function startGame(sizeX, sizeY, lives, points){
    view.generateMinefield(sizeX, sizeY);
    view.updateLiveCounter(lives);
    view.updatePointsCounter(points);
    view.hideGameOver();
}