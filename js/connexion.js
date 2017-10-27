$(function() {
$(document).ready(function(){


function setCookie(nom, mdp) {

    document.cookie = nom + "=" + ";" + mdp + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "yoo";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}

$("#send").click(function(e) {
e.preventDefault();
        console.log("je passe");
        var email = $('.email').val();
        var mdp = $('.mdp').val();

        setCookie(email, mdp);

        console.log( getCookie(email) );

});
    });
});