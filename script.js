document.addEventListener('DOMContentLoaded', () => {
    const quizQuestions = [
        {
            question: "Tanggal Berapa Kamu Nembak Aku? ∘ ∘ ∘ ( °ヮ° ) ?",
            options: ["14", "15", "10", "20"],
            answer: "15"
        },
        {
            question: "Di Bulan Apa Kamu Nembak Aku? ( ˶°ㅁ°) !!",
            options: ["Juni", "April", "Mei", "Juli"],
            answer: "Mei"

        },
        {
            question: "Kapan Kita Pertama Chat di WhatsApp? (∩˃o˂∩)♡",
            options: ["24 Oktober 2023", "10 November 2023", "02 Desember 2023", "26 Oktober 2023"],
            answer: "24 Oktober 2023"
        },
        {
            question: "Lagu Apa Yang Ada Di Bio Instagram Aku? ₍ᐢ. .ᐢ₎ ₊˚⊹♡",
            options: ["You Belong With Me - Taylor Swift", "Shape of You - Ed Sheeran", "Lucky To Be Loved - TWS", "T.B.H - QWER"],
            answer: "Lucky To Be Loved - TWS"
        },
        {
            question: "Dulu Aku Nyangka Kamu Itu.... (ᵕ—ᴗ—)ִ ࣪𖤐",
            options: ["Cewek", "Dosen", "Kating", "Orang Random"],
            answer: "Cewek"
        },
        {
            question: "Tanggal Berapa Kita By One ML? (aku yg menang btw, gamau tau (¬⤙¬ ))",
            options: ["27 Mei", "25 Mei", "24 Mei", "28 Mei"],
            answer: "25 Mei"
        },
        {
            question: "Gimana Aku Nerima Kamu Waktu Ditembak? ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧",
            options: ["Jawab Lewat WA", "Jawab Besoknya", "Jawab Langsung", "Jawab Pake Foto Meme"],
            answer: "Jawab Pake Foto Meme"
        },
        {
            question: "Chat WhatsApp Siapa Yang Gak Boleh Kamu Buka di HP Aku? (╭ರ_•́)⚠",
            options: ["Chat Sama Laki-laki", "Chat Sama Ncip", "Chat Sama Mama", "Chat Sama Kating"],
            answer: "Chat Sama Ncip"
        },
        {
            question: "Siapa Orang Yang Paling Aku Suka? (づᴗ _ᴗ)づ♡",
            options: ["Kamu", "Shin Junghwan", "Lee Know", "Kazuha"],
            answer: "Kamu"
        },
        {
            question: "Semester 1 Kita Pernah Satu Kelompok, Kelompok Berapa? (๑'ᵕ'๑)⸝*",
            options: ["2", "4", "3", "5"],
            answer: "5"
        }
    ];

    const elements = {
        quizContainer: document.querySelector('.quiz-container'),
        resultContainer: document.querySelector('.result-container'),
        questionText: document.querySelector('.question-text'),
        optionsContainer: document.querySelector('.options-container'),
        nextButton: document.querySelector('.next-btn'),
        progressBar: document.querySelector('.progress-bar'),
        questionCount: document.querySelector('.question-count'),
        resultTitle: document.querySelector('.result-title'),
        resultScore: document.querySelector('.score'),
        resultMessage: document.querySelector('.result-message'),
        restartButton: document.querySelector('.restart-btn'),
    };

    let currentQuestionIndex = 0;
    let score = 0;
    let shuffledQuestions = [];

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        shuffledQuestions = [...quizQuestions];
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    }

    function showQuestion(question) {
        elements.questionText.textContent = question.question;
        elements.optionsContainer.innerHTML = '';
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-btn');
            button.addEventListener('click', () => selectAnswer(option, question.answer));
            elements.optionsContainer.appendChild(button);
        });
        updateProgress();
    }

    function selectAnswer(selectedOption, correctAnswer) {
        const options = elements.optionsContainer.querySelectorAll('.option-btn');
        options.forEach(button => {
            button.disabled = true;
            if (button.textContent === correctAnswer) {
                button.classList.add('correct');
            } else if (button.textContent === selectedOption && selectedOption !== correctAnswer) {
                button.classList.add('wrong');
            }
        });

        if (selectedOption === correctAnswer) {
            score++;
        }

        elements.nextButton.disabled = false;
    }

    function updateProgress() {
        const progressPercentage = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
        elements.progressBar.style.setProperty('--progress', `${progressPercentage}%`);
        elements.progressBar.style.width = `${progressPercentage}%`;
        elements.questionCount.textContent = `Pertanyaan ${currentQuestionIndex + 1} dari ${quizQuestions.length}`;
    }

    function showNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            showQuestion(shuffledQuestions[currentQuestionIndex]);
            elements.nextButton.disabled = true;
        } else {
            showResults();
        }
        updateProgress();
    }

    function showResults() {
        elements.quizContainer.classList.add('hidden');
        elements.resultContainer.classList.remove('hidden');
        elements.resultScore.textContent = score;
        
        if (score >= 8) {
            elements.resultMessage.textContent = "Kamu Inget, Lucu Deh! BTW, Happy Birthday Sayang ❤️! Hope you have a wonderful day filled with love and happiness.";
        } else if (score >= 5) {
            elements.resultMessage.textContent = "Yaa, Bolehlah. BTW, Happy Birthday Sayang ❤️! Hope you have a wonderful day filled with love and happiness.";
        } else {
            elements.resultMessage.textContent = "Seriusan Segini? BTW, Happy Birthday Sayang ❤️! Hope you have a wonderful day filled with love and happiness.";
        }
    }

    elements.nextButton.addEventListener('click', showNextQuestion);
    elements.restartButton.addEventListener('click', () => {
        elements.quizContainer.classList.remove('hidden');
        elements.resultContainer.classList.add('hidden');
        startQuiz();
    });

    startQuiz();
});

