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

    model.revielField(x, y);
    view.openCell(field);

    if (model.isBomb(x,y)) {
        view.showBomb(field);
        console.log()
    } else {
        if(model.isTreasure(x, y)){
            view.showTresure(field);
        }
    }
 
    //model.isRevield(x,y)


}

function onFieldRightClick(field){
    console.log("kliknieto pole prawym prszycikiem myszy " + field.id);
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

initGame();