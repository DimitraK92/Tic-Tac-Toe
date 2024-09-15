let move = 1;
let play = true;

$('table tr td').click(function () {
    if ($(this).text() === "" && play) {
        if ((move % 2) === 1) {
            $(this).append("X");
            $(this).css('color', '#61892f');
        } else {
            $(this).append("O");
            $(this).css('color', '#e85a4f');
        }
        
        let winner = findWinner()
        let winnerDiv =  $('#game .winner')
        if (winner !== -1 && winner !== "") {
            winnerDiv.css('visibility', 'visible');
            winnerDiv.append('<span>Winner</span>');
            if (winner === "X") {
                winnerDiv.append('X');
                winnerDiv.css('background-color', '#61892f');
            } else {
                winnerDiv.append('0');
                winnerDiv.css('background-color', '#da2b1e');
            }
            play = false;
        } else if (move === 9) { // last move without winner
            winnerDiv.css('visibility', 'visible');
            winnerDiv.append('<span>Draw</span>');
            winnerDiv.css('background-color', '#666666');
            play = false;
        }
        if(!play){
            $('#game').append('<button onclick = "location.reload()">Play Again</button>');
            $('button').css('color', '#61892f');
        }
        move++;
    }
})

function findWinner() {
    let sp1 = $('table tr:nth-child(1) td:nth-child(1)').text();
    let sp2 = $('table tr:nth-child(1) td:nth-child(2)').text();
    let sp3 = $('table tr:nth-child(1) td:nth-child(3)').text();
    let sp4 = $('table tr:nth-child(2) td:nth-child(1)').text();
    let sp5 = $('table tr:nth-child(2) td:nth-child(2)').text();
    let sp6 = $('table tr:nth-child(2) td:nth-child(3)').text();
    let sp7 = $('table tr:nth-child(3) td:nth-child(1)').text();
    let sp8 = $('table tr:nth-child(3) td:nth-child(2)').text();
    let sp9 = $('table tr:nth-child(3) td:nth-child(3)').text();
    // check rows
    if ((sp1 === sp2) && (sp2 === sp3)) {
        return sp3;
    }
    else if ((sp4 === sp5) && (sp5 === sp6)) {
        return sp6;
    }
    else if ((sp7 === sp8) && (sp8 === sp9)) {
        return sp9;
    }
    // check columns
    else if ((sp1 === sp4) && (sp4 === sp7)) {
        return sp7;
    }
    else if ((sp2 === sp5) && (sp5 === sp8)) {
        return sp8;
    }
    else if ((sp3 === sp6) && (sp6 === sp9)) {
        return sp9;
    }
    // check diagonals
    else if ((sp1 === sp5) && (sp5 === sp9)) {
        return sp9;
    }
    else if ((sp3 === sp5) && (sp5 === sp7)) {
        return sp7;
    }
    // no winner
    return -1;
}