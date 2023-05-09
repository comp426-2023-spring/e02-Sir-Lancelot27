// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver


// Handles button appearance for selected items
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

// Logic for game play with requests to api
async function play() {
    var baseurl = window.location.href.concat('app');

    if (document.getElementById('rpsls').checked) {
        baseurl = baseurl.concat('/rpsls');
    }
    else {
        baseurl = baseurl.concat('/rps');
    }

    document.getElementById('play').style.display = "none";
    document.getElementById('selection').style.display = "none";
    document.getElementById('rules').style.display = "none";
    var url = baseurl.concat('/play/');

    if (!document.getElementById('opp').check) {
        let response = await fetch(url);
        let result = await response.json();
        console.log(result.player);
        document.getElementById("results").innerHTML = result.player;
    }
    else {

        url = url.concat();
    }
    
    document.getElementById("results").style.display = 'block';
}

function reset() {

}

function rules() {

}