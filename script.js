var href = window.location.href;
var sims = href.substr(href.lastIndexOf("=")+1) * 1;
if (sims == 0 || isNaN(sims)) sims = 500;

$("#in").val(sims);

var stayWin = 0;

for (var i = 0; i < sims; i++) {
    // var doors = [0, 1, 2];
    var doorCar = Math.floor(Math.random() * 3);
    var doorChosen = Math.floor(Math.random() * 3);

    var stay = 0;
    var swtch = 0;
    if (doorChosen == doorCar){
        stay = 1;
        stayWin++;
    }
    else swtch = 1;

    // console.log(doorCar + " " + doorChosen + " " + stay + " " + swtch);
}

var stayWinRatio = stayWin/sims;

console.log("Stay: "+stayWin+" "+stayWinRatio+"; Switch: "+(sims-stayWin)+" "+(1-stayWinRatio));
$('#sims').text(sims);
$('#switch').text((1-stayWinRatio));
$('#stay').text(stayWinRatio);
