// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver


// Function to uncheck the alternate radio if one is clicked.
// For example iff RPS is clicked RPSLS would unclick.
function swapClicks() {
    var rps = document.getElementById('rps').checked;
    var rpsls = document.getElementById('rpsls').checked;
    var rd = document.getElementById('rd').checked;
    var opp = document.getElementById('opp').checked;

    if (rps)
        document.getElementById('rpsls').prop("checked", false);
    else
        document.getElementById('rps').prop("checked", false);
    if (rd)
        document.getElementById('rd').prop("checked", false);
    else
        document.getElementById('opp').prop("checked", false);
}

function play() {
    // See which radios are selected
    var rps = document.getElementById('rps').checked;
    var rpsls = document.getElementById('rpsls').checked;
    var rd = document.getElementById('rd').checked;
    var opp = document.getElementById('opp').checked;
}

function showShots() {

}

function showRules() {

}
function restart() {

}