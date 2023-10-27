var questions = [   // les questions s'affichent dans <p>
	{
		question : "Combien de points apparaissent sur une paire de dés ?",
		rs: [  //les crochets pour indicer les reponses
			"42",
			"48"
		],
		correct: 0  //la reponse correcte est l'indice 0
	},
	{
		question : "Quel est le groupe sanguin le plus rare ? ",
		rs: [
			"A négatif",
			"AB négatif"
		],
		correct: 1  //la reponse correcte est l'indice 1
	},
	{
		question  : "Où se trouve le muscle humain le plus fort ?",
		rs: [
			"Jambe",
			"Mâchoire"
		],
		correct: 1
	},
	{
		question  : "Combien y a-t-il de minutes dans une semaine complète ?",
		rs: [
			"10 080",
			"10 800"
		],
		correct: 0
	},
	{
		question  : "Combien y a-t-il d’éléments chimiques dans le tableau périodique ?",
		rs: [
			"118",
			"128"
		],
		correct: 0
	}
];

var resultat = 0;
var aQuestion = 0; //question actuelle

// Fonction pour afficher la question et les réponses
function displayQuestion() {
	var qElement = document.getElementById("question");
	qElement.textContent = questions[aQuestion].question;  // qElement=question de la liste des questions

	var rsElement = document.getElementsByTagName("ul")[0]; //on affecte à l'ul les reponses
	rsElement.innerHTML = "";  //les reponses s'affichent dans le fichier html en li
	questions[aQuestion].rs.forEach(function(r, index) {  //La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
		var rElement = document.createElement("li"); // une reponse par li
		var bElement = document.createElement("button");  //on affecte au bouton la variable bElement qui recevra une reponse proposée
		bElement.textContent = r;
		bElement.onclick = function() { checkAnswer(index); };
		rElement.appendChild(bElement);
		rsElement.appendChild(rElement);
	});
}

// Fonction pour vérifier la réponse choisie
function checkAnswer(rIndex) {
	if (rIndex === questions[aQuestion].correct) {
		resultat++;  //permet de mettre à jour le résultat final
	}

	aQuestion++; //permet de passer a la question suivante 

	if (aQuestion === questions.length) {
		// Le quiz est terminé
		var scoreElement = document.getElementById("score");
		scoreElement.textContent = "Votre score est de " + resultat + " sur " + questions.length + ".";
	} else {
		// Afficher la prochaine question
		displayQuestion();
	}
}

// Afficher la première question
displayQuestion();
