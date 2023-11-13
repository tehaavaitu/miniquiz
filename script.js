var questions = [
  {
    question: "Combien de points apparaissent sur une paire de dés ?",
    rs: [
      "42",
      "48",
    ],
    correct: 0,
  },
  {
    question: "Quel est le groupe sanguin le plus rare ? ",
    rs: ["A négatif", "AB négatif"],
    correct: 1,
  },

  {
    question: "Où se trouve le muscle humain le plus fort ?",
    rs: ["Jambe", "Mâchoire"],
    correct: 1,
  },

  {
    question: "Combien y a-t-il de minutes dans une semaine complète ?",
    rs: ["10 080", "10 800"],
    correct: 0,
  },
  {
    question:
      "Combien y a-t-il d’éléments chimiques dans le tableau périodique ?",
    rs: ["118", "128"],
    correct: 0,
  },
];

var resultat = 0;
var aQuestion = 0;

function afficheQuestion() {

  var qElement = document.getElementById("question");
  qElement.textContent = questions[aQuestion].question;
  var rsElement = document.getElementsByTagName("ul")[0];
  rsElement.innerHTML = ""; 

  questions[aQuestion].rs.forEach(function (r, index) {
		var rElement = document.createElement("li"); 
    var bElement = document.createElement("button"); 
    
		bElement.textContent = r;

    bElement.onclick = function () {
      reponse(index);
    };
    rElement.appendChild(bElement);
    rsElement.appendChild(rElement);	
	});
}

function reponse(rIndex) {
  if (rIndex === questions[aQuestion].correct) {
    resultat++; 
  }

  aQuestion++; 

  if (aQuestion === questions.length) {
    var scoreElement = document.getElementById("score");
    scoreElement.textContent =
      "Votre score est de " + resultat + " sur " + questions.length + ".";
  } else {
    afficheQuestion();
  }
}


afficheQuestion();
