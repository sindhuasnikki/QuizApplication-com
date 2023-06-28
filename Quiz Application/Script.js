// Questions that will be asked
const Questions = [{
	q: "Which is the smallest continent in the world?",
	a: [{ text: "Asia", isCorrect: false },
	    { text: "Australia", isCorrect: true },
	    { text: "Arctic", isCorrect: true },
	    { text: "Africa", isCorrect: false }
	]

},
{
	q: "The Grand Canyon located in which country? ",
	a: [{ text: "Ghana", isCorrect: false, isSelected: false },
	   { text: "Canada", isCorrect: false },
	   { text: "Bolivia", isCorrect: false },
	   { text: "The US", isCorrect: true }
	]

},
{
	q: "What is the capital of Gujarat",
	a: [{ text: "Surat", isCorrect: false },
	    { text: "Vadodara", isCorrect: false },
	    { text: "Gandhinagar", isCorrect: true },
	    { text: "Rajkot", isCorrect: false }
	]

},
{

   q:"Who Invented the 3-D printer?",
    a:[
        {text:"Nick Holonyak",isCorrect:false},
        {text:"Elias Howe",isCorrect:false},
	    {text:"Chuck Hull",isCorrect:true},
        {text:"Christiaan Huygens",isCorrect:false},
        ]
    
}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
