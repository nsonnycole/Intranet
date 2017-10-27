$(function() {
    $(document).ready(function(){

        var checkCookie = localStorage.getItem('connecter'); 
        console.log(checkCookie);
        if (checkCookie != null || checkCookie != false) {
            $('#connexion').html('Déconnexion');
            var d = document.getElementById("connexion"); 
            d.setAttribute("href", "http://localhost/intranet");

        }else{
            $('#connexion').html('Connexion');
            var d = document.getElementById("connexion"); 
            d.setAttribute("href", "http://localhost/intranet/connexion.html");

        }
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

<<<<<<< HEAD
        function checkCookie() {
            var user = getCookie("username");
            if (user != "") {
                alert("Welcome again " + user);
                $('#connexion').html('Déconnexion');
       // document.location.href="http://localhost/intranet";
   } else {
    $('#connexion').html('Connexion');
}
=======
function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
       // alert("Welcome again " + user);
            
            $('#connexion').html('Déconnexion');
            $('#connexion').getAttribute("href", "http://localhost/intranet");
    } else {

            $('#connexion').html('Connexion');
    }
>>>>>>> b6e8e6c8958d9c6bd70ddad11a2299f21fe6022e
}


$("#send").click(function(e) {
    e.preventDefault();
    localStorage.setItem('connecter', '');    
    var email = $('#email').val();
    var mdp = $('#mdp').val();


    $.getJSON('https://api.myjson.com/bins/i0kwb',function(data){
        $.each(data,function(index,d){

            if (email == d.identifiant && mdp == d.mdp) 
<<<<<<< HEAD
            {
             localStorage.setItem('connecter', 'true');       
             setCookie(d.identifiant, d.mdp);
             $('#connexion').html('Déconnexion');
             $('.connecter').html('<div class="pageHeader" style="background-image: url(images/content/events.jpg);">'+
               ' <h1>Bienvenue '+email+'</h1> </div>');
           //  document.location.href="http://localhost/intranet";

       }
       else
          localStorage.setItem('connecter', 'false');       

  });
    });
=======
              {

                setCookie(d.identifiant, d.mdp);
                document.location.href="http://localhost/intranet"
                console.log(user);
               
              }
              else
               $('#error').html('Mot de passe ou identifiant invalide');;

            });
          });
>>>>>>> b6e8e6c8958d9c6bd70ddad11a2299f21fe6022e

});




});
});