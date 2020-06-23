// on veut un texte sur la page web
// 		"on aime je jQuery"
// il faut que le mot jQuery clignote (il disparait toutes les secondes et reapparait toutes les secondes)

$(document).ready(function () {
setInterval(function(){
	if ($("#text").is(":visible"))//si c'est visible on le montre
	{ 
		$("#text").hide()
	}

	else if ($("#text").is(":hidden")) // si c'est invisible on le montre toutes les 800millisecondes
	{ 
		$("#text").show()
	}

	},800);

})



/* DEUXIEME METHODE façon http://jsfiddle.net/Ajey/25Wfn/

$(document).ready(function () {

setInterval(function(){blink()}, 1000);
                
              
    function blink() {
        $("#text").fadeTo(100, 0.1).fadeTo(200, 1.0);
    }

})
*/