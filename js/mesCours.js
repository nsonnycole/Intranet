$(document).ready(function(){


	$(function() {
		$('#lecture').on('click', function(){

			console.log("je passe");
			$.getJSON('json/etudiants.json',function(data){
				$('#zone').append('Prénom : ' + data.Prenom + '<br>');
				$('#zone').append('Nom : ' + data.Nom + '<br>');
				$('#zone').append('Age : ' + data.Age + '<br>');
			});
		});
	});

});
