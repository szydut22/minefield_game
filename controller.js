function initGame(){
    var minefiledTag = document.getElementById("minefield");
    generateMinefield(minefiledTag, model.minefieldSizeX, model.minefieldSizeY);
    model.initMinefiled(model.minefieldSizeX, model.minefieldSizeY);
    view.updateLiveCounter(model.addLives(0));
    view.updatePointsCounter(model.addPoints(0));
}

function onFieldClick(field){
    var temp = field.id.split(".");
    var x = temp[1];
    var y = temp[2];
    x = parseInt(x);
    y = parseInt(y);
    
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

function onFieldRightClick(field){
    view.showFlag(field);
}


function generateMinefield(minefiled, sizeX, sizeY) {
    console.log("generate_table");
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

function givePoint(){
    var currentPoints = model.addPoints(1);
    view.updatePointsCounter(currentPoints);
}

function takeLive(){
    var current = model.takeLive(1);
    view.updateLiveCounter(current);
    if(current < 1){
        
    }
}

function giveLive(){
    view.updateLiveCounter(model.addLives(1));
}

