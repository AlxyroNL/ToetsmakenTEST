let quiz = [];

let currentQuestion = 0;
let score = 0;

// ➕ Vraag toevoegen
function addQuestion() {
    const vraag = document.getElementById("vraagInput").value;
    const a1 = document.getElementById("antwoord1").value;
    const a2 = document.getElementById("antwoord2").value;
    const a3 = document.getElementById("antwoord3").value;
    const a4 = document.getElementById("antwoord4").value;
    const correct = document.getElementById("juisteAntwoord").value - 1;

    if (!vraag || !a1 || !a2 || !a3 || !a4) {
        alert("Vul alles in!");
        return;
    }

    quiz.push({
        question: vraag,
        answers: [a1, a2, a3, a4],
        correct: correct
    });

    alert("Vraag toegevoegd!");
}

// ▶️ Start toets
function startQuiz() {
    if (quiz.length === 0) {
        alert("Voeg eerst vragen toe!");
        return;
    }

    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

// 📥 Vraag laden
function loadQuestion() {
    const q = quiz[currentQuestion];

    let html = `<h3>${q.question}</h3>`;

    q.answers.forEach((ans, index) => {
        html += `<button onclick="selectAnswer(${index})">${ans}</button>`;
    });

    document.getElementById("quiz").innerHTML = html;
}

// ✅ Antwoord kiezen
function selectAnswer(index) {
    if (index === quiz[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quiz.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// 📊 Resultaat + cijfer
function showResult() {
    const totaal = quiz.length;

    let cijfer = (score / totaal) * 9 + 1;
    cijfer = cijfer.toFixed(1);

    const weight = document.getElementById("weight").value;

    document.getElementById("quiz").innerHTML = "";
    document.getElementById("result").innerHTML = `
        ✅ Score: ${score}/${totaal}<br>
        📊 Cijfer: ${cijfer}<br>
        ⚖️ Gewicht: ${weight}x
    `;
}
