var bombs = bombCount(x,y);
if(bombs > 0){
    document.getElementById(nodeID).innerHTML = bombs;
}else{
    if (y > 0 && !isFieldOpen(x,y-1)) revealField(x,y-1);

    if (y < boardYSize && !isFieldOpen(x,y+1)) revealField(x,y+1);

    if (x > 0 && !isFieldOpen(x-1,y)) revealField(x-1,y);

    if (x < boardXSize && !isFieldOpen(x+1,y)) revealField(x+1,y);

    if (x > 0 && y > 0 && !isFieldOpen(x-1,y-1)) revealField(x-1,y-1);

    if (x < boardXSize && y < boardYSize && !isFieldOpen(x+1,y+1)) revealField(x+1,y+1);

    if (x > 0 && y < boardYSize && !isFieldOpen(x-1,y+1)) revealField(x-1,y+1);

    if (y > 0 && x < boardXSize && !isFieldOpen(x+1,y-1)) revealField(x+1,y-1);

}