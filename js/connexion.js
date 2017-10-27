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
         /*var email = $('.email').val();
        var mdp = $('.mdp').val();

        setCookie(email, mdp);

        console.log( getCookie(email) );*/

        var email = $('.email').val();
        var mdp = $('.mdp').val();

        console.log(email);
        console.log(mdp);



         $.getJSON('https://api.myjson.com/bins/1cuu17',function(data){
            $.each(data,function(index,d){
            
            if (email == e.Prenom && mdp == e.Nom) 
              {
                console.log("Success");
              }
              else
                console.log("Echec");

            });
          });

    /*      $.getJSON('https://api.myjson.com/bins/1cuu17',function(etudiants){
            $.each(etudiants,function(index,e){
                console.log(e.Prenom);
              });
          });*/
       
        

});



        /*if (email == e.Prenom && mdp == e.Nom) 
              {
                console.log("Success");
              }
              else
                console.log("Echec");
            */


    });
});