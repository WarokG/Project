// ================================================== gestion du chronomètre ==================================================
start();

function fini() { 
	if(NQ<=9){
	clearInterval(intervalId);
	document.getElementById("Chrono").innerHTML = "TERMINÉ!";
	NQ = NQ + 1;
	cpt = 21;
	Qrun();
	}
	
}	
function chrono() {
    cpt--;
    if(cpt == 0) {fini();}
    else {	
        document.getElementById("Chrono").innerHTML = cpt + " secondes restantes";
    }	
}
function start(){
  intervalId = setInterval(chrono, 1000);
}
// ================================================== gestion de l'affichage des question, photos et réponses ==================================================

function Qrun() {
	if (NQ<=9){
	document.getElementById("question").innerHTML = questions[NQ];
	document.getElementById("repA").innerHTML = RA[NQ];
	document.getElementById("repB").innerHTML = RB[NQ];
	document.getElementById("repC").innerHTML = RC[NQ];
	document.getElementById("Q").innerHTML = '<img src="questions/'+NQ+'.jpg" class="question">' ;
	}	else{
		document.getElementById("all").style.display="none";
		document.getElementById("resultats").style.display="inline-block";
		document.getElementById("resultats").innerHTML= "Vous avez: " + points + "/10";
		document.getElementById("correction").style.display="inline-block";
		document.getElementById("all2").style.display="inline-block";
	}
}


// ================================================== listes des questions et réponses ==================================================

var questions = ['Dans cette situation, qui est prioritaire ?','Dans cette situation :','Dans cette situation :','Suite à ce panneau, je roulerai à :','Je suis verbalisé pour plusieurs infractions commises simultanément, j’encours une perte maximale de :','Des balais d’essuie-glace usés nuisent à la visibilité :','Avant de partir je déblai l’ensemble des vitres :',': Les passagers ont une incidence sur ma conduite ?','Maintenir un grand coussin d’espace permet :','Est-ce que je peux passer entre ces deux groupes de piétons ?']

var RA = ['A) La voiture A', 'A) J’accélère',  'A) Klaxon',                      'A) 60 km/h', 'A) 5 points', 'A) Oui', 'A) Oui', 'A) Oui', 'A) Une augmentation  du risque de collision', 'A) Oui']

var RB = ['B) La voiture B', 'B) Je double',   'B) Je ralentie',                 'B) 70k m/h', 'B) 4 points', 'B) Non', 'B) Non', 'B) Non', 'B)  Une réduction du risque de collision',    'B) Non']

var RC = ['C) La voiture C', 'C) Je ralentie', 'C) Je fais des appels lumineux ','C) 50 km/h', 'C) 8 points', 'C) Peut-être',       'C) Peut-être',       'C) Peut-être',       "C) De ne pas salir son pare-brise",                                            'C) Peut-être']

var reponses = ['A','C','B','C','C','A','A','A','B','B']








// ================================================== gestion événements ==================================================

var setupEvents = function() {
    // 
     var repA =  document.getElementById("repA");
    repA.addEventListener("click",action1);
	 var repB =  document.getElementById("repB");
    repB.addEventListener("click",action2);
	 var repC =  document.getElementById("repC");
    repC.addEventListener("click",action3);
	 var valider =  document.getElementById("Bouton");
    Bouton.addEventListener("click",action4);
}




// ================================================== gestion des couleurs des cases réponse ==================================================

var action1 = function() {
    document.getElementById("repA").style.backgroundColor ="#B22222";
	document.getElementById("repB").style.backgroundColor ="#EEEEEE";
	document.getElementById("repC").style.backgroundColor ="#EEEEEE";
}
var action2 = function() {
    document.getElementById("repB").style.backgroundColor ="#B22222";
	document.getElementById("repA").style.backgroundColor ="#EEEEEE";
	document.getElementById("repC").style.backgroundColor ="#EEEEEE";
}
var action3 = function() {
    document.getElementById("repC").style.backgroundColor ="#B22222";
	document.getElementById("repA").style.backgroundColor ="#EEEEEE";
	document.getElementById("repB").style.backgroundColor ="#EEEEEE";
}

// ================================================== gestion des points et passages de questions ==================================================

var action4 = function() {
	var fond = document.getElementById("rep"+reponses[NQ]);
	if(fond.style.backgroundColor == "rgb(178, 34, 34)"){
		alert("Vrai");
		points = points + 1;
		NQ = NQ + 1;
		cpt=21;
														} else {
																alert("Faux");
																NQ = NQ + 1;
																cpt=21;
															   }

	document.getElementById("repA").style.backgroundColor ="#EEEEEE";
	document.getElementById("repB").style.backgroundColor ="#EEEEEE";
	document.getElementById("repC").style.backgroundColor ="#EEEEEE";
	
	
Qrun();
}

//Initialisation et lancement du programme

var points = 0;
var NQ = 0;
var cpt = 21;

var intervalId = null;


window.addEventListener("load", Qrun);
window.addEventListener("load", setupEvents);