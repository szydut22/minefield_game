
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
         var cellText = document.createTextNode("1");
         cell.appendChild(cellText);
         row.appendChild(cell);
       }
       tblBody.appendChild(row);
     }

   tbl.appendChild(tblBody);
   minefiled.appendChild(tbl);
}
    