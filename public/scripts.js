// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function selection() {
    var rpsls = document.getElementById('rpsls');

    var opp = document.getElementById('opp');

    if (opp.checked) {
        document.getElementById('rpsShots').style.display = "block";
        if (rpsls.checked)
        {
            document.getElementById('rpslsShots').style.display = "block";
        }
        else {
            document.getElementById('rpslsShots').style.display = "none";
        }
    }
}

function play() {

}

function reset() {

}

function rules() {
    
}