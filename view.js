view = {
    openCell: openCell,
    showBomb: showBomb,
    showTresure: showTresure,
    showFlag: showFlag,
    
    updateLiveCounter: updateLiveCounter,
    updatePointsCounter: updatePointsCounter,

}


function openCell(field){
    field.style.backgroundColor = "white";
}

function showBomb(field){
	field.innerHTML = "<img src='bomb.svg'>";
}

function showTresure(field){
    field.innerHTML = "<img src='treasure.svg'>";
}

function showFlag(field){
    field.innerHTML = "<img src='flag.svg'>";
}


function updateLiveCounter(liveNo) {
    document.getElementById('livesmeter').innerHTML  = liveNo;    
}

function updatePointsCounter(points){
    document.getElementById('pointsmeter').innerHTML = points;
}

