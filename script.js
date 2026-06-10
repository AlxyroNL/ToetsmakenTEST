const quiz = [
    {
        question: "Wat zijn productiefactoren?",
        answers: ["Arbeid, kapitaal, natuur", "Alleen geld", "Alleen machines"],
        correct: 0
    },
    {
        question: "Wat is een CAO?",
        answers: ["Persoonlijk contract", "Afspraken voor groep werknemers", "Belastingregel"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = quiz[currentQuestion];

    document.getElementById("question").innerText = q.question;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.innerText = answer;

        btn.onclick = () => {
            if (index === q.correct) {
                score++;
            }
        };

        answersDiv.appendChild(btn);
    });
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quiz.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const totaal = quiz.length;

    let cijfer = (score / totaal) * 9 + 1;
    cijfer = cijfer.toFixed(1);

    const weight = document.getElementById("weight").value;

    document.getElementById("quiz").style.display = "none";

    document.getElementById("result").innerHTML = `
        ✅ Score: ${score}/${totaal} <br>
        📊 Cijfer: ${cijfer} <br>
        ⚖️ Gewicht: ${weight}x
    `;
}

loadQuestion();
