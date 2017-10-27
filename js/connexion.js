$(function() {
$(document).ready(function(){

checkCookie();

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
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
       // alert("Welcome again " + user);
            
            $('#connexion').html('Déconnexion');
    } else {
            $('#connexion').html('Connexion');
    }
}


$("#send").click(function(e) {
e.preventDefault();

var email = $('#email').val();
var mdp = $('#mdp').val();


 $.getJSON('https://api.myjson.com/bins/i0kwb',function(data){
    $.each(data,function(index,d){
    
    if (email == d.identifiant && mdp == d.mdp) 
      {

        setCookie(d.identifiant, d.mdp);
        document.location.href="http://localhost/intranet"
        $('#connexion').text('Déconnexion');
        console.log(user);
       
      }
      else
        removeCookie("username");

    });
  });

});




    });
});