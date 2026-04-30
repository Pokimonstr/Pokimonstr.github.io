/* ===== TEST QUESTIONS DATABASE ===== */
const tests = {
    // --- A1 LEVEL ---
    'alphabet': {
        title: 'Alphabet & Pronunciation',
        level: 'A1',
        questions: [
            { question: 'How do you pronounce the letter "A"?', options: ['/e/', '/bi:/', '/si:/', '/di:/'], correct: 0 },
            { question: 'Which word starts with a vowel sound?', options: ['Cat', 'Apple', 'Dog', 'Book'], correct: 1 },
            { question: 'Choose the correct spelling:', options: ['Recieve', 'Receive', 'Receve', 'Receiv'], correct: 1 },
            { question: 'How many letters are in the English alphabet?', options: ['24', '25', '26', '27'], correct: 2 },
            { question: 'Which letter comes after "M"?', options: ['L', 'N', 'O', 'P'], correct: 1 }
        ]
    },
    'greetings': {
        title: 'Basic Greetings',
        level: 'A1',
        questions: [
            { question: 'What is the correct response to "Good morning"?', options: ['Good night', 'Good morning', 'Goodbye', 'See you'], correct: 1 },
            { question: 'How do you ask someone\'s name?', options: ['How are you?', 'What\'s your name?', 'Where are you from?', 'How old are you?'], correct: 1 },
            { question: 'Choose the correct greeting for evening:', options: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'], correct: 2 },
            { question: 'What does "How are you?" mean?', options: ['What is your name?', 'How old are you?', 'How are you feeling?', 'Where do you live?'], correct: 2 },
            { question: 'Which is informal?', options: ['Good morning', 'Hello', 'Hi', 'Good evening'], correct: 2 }
        ]
    },
    'numbers': {
        title: 'Numbers and Dates',
        level: 'A1',
        questions: [
            { question: 'How do you write "12th"?', options: ['12st', '12nd', '12th', '12rd'], correct: 2 },
            { question: 'What is the date? (01/05)', options: ['January fifth', 'May first', 'One five', 'Fifth January'], correct: 1 },
            { question: 'Which number is "one hundred"?', options: ['10', '100', '1000', '10000'], correct: 1 },
            { question: 'My birthday is _____ July.', options: ['in', 'on', 'at', 'to'], correct: 1 },
            { question: 'There are _____ days in a week.', options: ['five', 'six', 'seven', 'eight'], correct: 2 }
        ]
    },
    'present-simple': {
        title: 'Present Simple',
        level: 'A1',
        questions: [
            { question: 'She _____ to school every day.', options: ['go', 'goes', 'going', 'gone'], correct: 1 },
            { question: 'They _____ football on weekends.', options: ['play', 'plays', 'playing', 'played'], correct: 0 },
            { question: '_____ you like coffee?', options: ['Do', 'Does', 'Is', 'Are'], correct: 0 },
            { question: 'He _____ not work on Sundays.', options: ['do', 'does', 'is', 'are'], correct: 1 },
            { question: 'My brother _____ in London.', options: ['live', 'lives', 'living', 'lived'], correct: 1 }
        ]
    },
    'articles': {
        title: 'Articles (a / an / the)',
        level: 'A1',
        questions: [
            { question: 'I have _____ cat.', options: ['a', 'an', 'the', '-'], correct: 0 },
            { question: 'She is _____ engineer.', options: ['a', 'an', 'the', '-'], correct: 1 },
            { question: 'Look at _____ moon!', options: ['a', 'an', 'the', '-'], correct: 2 },
            { question: 'I like _____ apples.', options: ['a', 'an', 'the', '-'], correct: 3 },
            { question: 'Can you pass me _____ salt?', options: ['a', 'an', 'the', '-'], correct: 2 }
        ]
    },

    // --- A2 LEVEL ---
    'past-simple': {
        title: 'Past Simple',
        level: 'A2',
        questions: [
            { question: 'Yesterday I _____ to the cinema.', options: ['go', 'went', 'gone', 'going'], correct: 1 },
            { question: 'She _____ her homework last night.', options: ['finish', 'finished', 'finishes', 'finishing'], correct: 1 },
            { question: '_____ you see the movie?', options: ['Do', 'Did', 'Does', 'Done'], correct: 1 },
            { question: 'They _____ happy with the results.', options: ['was', 'were', 'are', 'is'], correct: 1 },
            { question: 'He _____ breakfast this morning.', options: ['don\'t eat', 'didn\'t eat', 'doesn\'t eat', 'not eat'], correct: 1 }
        ]
    },
    'future': {
        title: 'Future (going to)',
        level: 'A2',
        questions: [
            { question: 'I _____ visit my grandma tomorrow.', options: ['will', 'am going to', 'go to', 'going'], correct: 1 },
            { question: 'Look at those clouds! It _____ rain.', options: ['will', 'is going to', 'goes to', 'rains'], correct: 1 },
            { question: 'We _____ buy a new car next year.', options: ['are going to', 'go to', 'going', 'will going'], correct: 0 },
            { question: 'What _____ you do tonight?', options: ['are you going to', 'you going to', 'do you go to', 'will you going'], correct: 0 },
            { question: 'She _____ not come to the party.', options: ['is going to', 'going to', 'is go to', 'goes to'], correct: 0 }
        ]
    },
    'nouns': {
        title: 'Countable / Uncountable',
        level: 'A2',
        questions: [
            { question: 'How _____ water do you drink?', options: ['many', 'much', 'some', 'any'], correct: 1 },
            { question: 'There are _____ apples on the table.', options: ['much', 'a lot of', 'a little', 'any'], correct: 1 },
            { question: 'I don\'t have _____ money.', options: ['some', 'any', 'a few', 'many'], correct: 1 },
            { question: 'Would you like _____ coffee?', options: ['some', 'any', 'a few', 'many'], correct: 0 },
            { question: 'Rice is _____.', options: ['countable', 'uncountable', 'plural', 'singular'], correct: 1 }
        ]
    },
    'comparatives': {
        title: 'Comparatives',
        level: 'A2',
        questions: [
            { question: 'Elephants are _____ than mice.', options: ['big', 'bigger', 'more big', 'biggest'], correct: 1 },
            { question: 'This book is _____ than that one.', options: ['interesting', 'more interesting', 'interestinger', 'most interesting'], correct: 1 },
            { question: 'Summer is _____ than winter.', options: ['hotter', 'more hot', 'hotest', 'hottest'], correct: 0 },
            { question: 'My house is _____ than yours.', options: ['good', 'better', 'more good', 'best'], correct: 1 },
            { question: 'He runs _____ than me.', options: ['fast', 'faster', 'more fast', 'fastest'], correct: 1 }
        ]
    },
    'adverbs': {
        title: 'Adverbs of frequency',
        level: 'A2',
        questions: [
            { question: 'I _____ go to the gym. (100%)', options: ['never', 'sometimes', 'always', 'rarely'], correct: 2 },
            { question: 'She _____ eats meat. (0%)', options: ['always', 'often', 'never', 'usually'], correct: 2 },
            { question: 'We _____ watch TV in the evening.', options: ['often', 'never', 'always', 'every day'], correct: 0 },
            { question: 'He is _____ late for work.', options: ['sometimes', 'sometime', 'some times', 'some time'], correct: 0 },
            { question: 'Where does "usually" go? "I ___ drink coffee."', options: ['usually', 'drink usually', 'coffee usually', 'I usually'], correct: 0 }
        ]
    },

    // --- B1 LEVEL ---
    'present-perfect': {
        title: 'Present Perfect',
        level: 'B1',
        questions: [
            { question: 'I _____ to Paris three times.', options: ['have been', 'has been', 'was', 'am'], correct: 0 },
            { question: 'She _____ just finished her work.', options: ['have', 'has', 'had', 'is'], correct: 1 },
            { question: '_____ you ever seen a lion?', options: ['Do', 'Did', 'Have', 'Has'], correct: 2 },
            { question: 'We _____ here since 2010.', options: ['live', 'lived', 'have lived', 'are living'], correct: 2 },
            { question: 'He _____ his keys. He can\'t find them.', options: ['lost', 'has lost', 'loses', 'lose'], correct: 1 }
        ]
    },
    'past-continuous': {
        title: 'Past Continuous',
        level: 'B1',
        questions: [
            { question: 'I _____ TV when he called.', options: ['watched', 'was watching', 'am watching', 'watch'], correct: 1 },
            { question: 'They _____ dinner at 8 PM yesterday.', options: ['had', 'were having', 'are having', 'have'], correct: 1 },
            { question: 'What _____ you doing at 5 o\'clock?', options: ['did', 'were', 'was', 'are'], correct: 1 },
            { question: 'It _____ raining all day.', options: ['was', 'were', 'is', 'did'], correct: 0 },
            { question: 'While I was reading, she _____.', options: ['sleeps', 'was sleeping', 'slept', 'sleeping'], correct: 1 }
        ]
    },
    'modal-verbs': {
        title: 'Modal verbs',
        level: 'B1',
        questions: [
            { question: 'You _____ smoke here. It\'s forbidden.', options: ['must', 'mustn\'t', 'can', 'should'], correct: 1 },
            { question: '_____ I open the window?', options: ['Must', 'Should', 'Can', 'Need'], correct: 2 },
            { question: 'You _____ see a doctor if you feel sick.', options: ['can', 'should', 'may', 'might'], correct: 1 },
            { question: 'He _____ swim very well when he was 5.', options: ['can', 'could', 'should', 'must'], correct: 1 },
            { question: 'We _____ wear a uniform at school.', options: ['have to', 'can', 'may', 'might'], correct: 0 }
        ]
    },
    'first-conditional': {
        title: 'First Conditional',
        level: 'B1',
        questions: [
            { question: 'If it rains, I _____ stay at home.', options: ['will', 'would', 'am', 'did'], correct: 0 },
            { question: 'If you study hard, you _____ the exam.', options: ['pass', 'will pass', 'passed', 'would pass'], correct: 1 },
            { question: 'She will be late if she _____ now.', options: ['don\'t leave', 'doesn\'t leave', 'didn\'t leave', 'won\'t leave'], correct: 1 },
            { question: 'If I _____ time, I will help you.', options: ['have', 'will have', 'had', 'would have'], correct: 0 },
            { question: 'We _____ go to the beach if the weather is nice.', options: ['will', 'would', 'did', 'are'], correct: 0 }
        ]
    },
    'phrasal-verbs': {
        title: 'Phrasal verbs',
        level: 'B1',
        questions: [
            { question: 'Please _____ the light.', options: ['turn on', 'turn in', 'turn up', 'turn down'], correct: 0 },
            { question: 'I need to _____ for the bus.', options: ['wait', 'wait for', 'look for', 'ask for'], correct: 1 },
            { question: 'Can you _____ this word in the dictionary?', options: ['look up', 'look for', 'look at', 'look after'], correct: 0 },
            { question: 'Who is _____ the baby?', options: ['looking at', 'looking for', 'looking after', 'looking up'], correct: 2 },
            { question: 'Please _____ your shoes before entering.', options: ['take off', 'put on', 'get up', 'give up'], correct: 0 }
        ]
    },

    // --- B2 LEVEL ---
    'second-conditional': {
        title: 'Second Conditional',
        level: 'B2',
        questions: [
            { question: 'If I _____ rich, I would buy a yacht.', options: ['am', 'was', 'were', 'be'], correct: 2 },
            { question: 'If I had time, I _____ travel more.', options: ['will', 'would', 'can', 'am'], correct: 1 },
            { question: 'What _____ you do if you won the lottery?', options: ['will', 'would', 'do', 'did'], correct: 1 },
            { question: 'If he _____ harder, he would get better grades.', options: ['studied', 'studies', 'study', 'studying'], correct: 0 },
            { question: 'I wouldn\'t do that if I _____ you.', options: ['am', 'was', 'were', 'be'], correct: 2 }
        ]
    }
};

/* ===== STATE VARIABLES ===== */
let currentTest = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval = null;
let seconds = 0;

/* ===== DOM ELEMENTS ===== */
const testModal = document.getElementById('testModal');
const resultsModal = document.getElementById('resultsModal');
const closeModalBtn = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const questionContainer = document.getElementById('questionContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const finishBtn = document.getElementById('finishBtn');
const progressBar = document.getElementById('progressBar');
const currentQuestionEl = document.getElementById('currentQuestion');
const totalQuestionsEl = document.getElementById('totalQuestions');
const timeEl = document.getElementById('time');

/* ===== EVENT LISTENERS ===== */

// Open test
document.querySelectorAll('.start-test-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const testId = btn.getAttribute('data-test');
        openTest(testId);
    });
});

// Close test modal
closeModalBtn.addEventListener('click', closeTest);

// Navigation
prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < currentTest.questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
});

finishBtn.addEventListener('click', finishTest);

// Retry & close results
document.getElementById('retryBtn').addEventListener('click', () => {
    resultsModal.style.display = 'none';
    openTest(currentTest.id);
});

document.getElementById('closeResultsBtn').addEventListener('click', () => {
    resultsModal.style.display = 'none';
});

// Filter by level
const levelBtns = document.querySelectorAll('.level-btn');
const testCards = document.querySelectorAll('.test-card');

levelBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        levelBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const level = btn.getAttribute('data-level');

        testCards.forEach(card => {
            if (level === 'all' || card.getAttribute('data-level') === level) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Mobile menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav-right');

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('mobile-active');
});

// Close modals on outside click
window.addEventListener('click', (e) => {
    if (e.target === testModal) closeTest();
    if (e.target === resultsModal) resultsModal.style.display = 'none';
});

/* ===== FUNCTIONS ===== */

function openTest(testId) {
    // Check if test exists in database
    if (!tests[testId]) {
        alert("Test content is coming soon!");
        return;
    }

    currentTest = tests[testId];
    currentTest.id = testId;
    currentQuestionIndex = 0;
    userAnswers = new Array(currentTest.questions.length).fill(null);
    seconds = 0;

    modalTitle.textContent = currentTest.title;
    totalQuestionsEl.textContent = currentTest.questions.length;

    testModal.style.display = 'flex';
    startTimer();
    showQuestion();
}

function closeTest() {
    testModal.style.display = 'none';
    stopTimer();
    currentTest = null;
}

function startTimer() {
    timerInterval = setInterval(() => {
        seconds++;
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        timeEl.textContent = `${mins}:${secs}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function showQuestion() {
    const question = currentTest.questions[currentQuestionIndex];

    let optionsHtml = '';
    question.options.forEach((option, index) => {
        const checked = userAnswers[currentQuestionIndex] === index ? 'checked' : '';
        optionsHtml += `
            <label class="option-label ${checked ? 'selected' : ''}">
                <input type="radio" name="answer" value="${index}" ${checked} onchange="selectAnswer(${index})">
                <span class="option-text">${option}</span>
            </label>
        `;
    });

    questionContainer.innerHTML = `
        <div class="question">
            <h3>${currentQuestionIndex + 1}. ${question.question}</h3>
            <div class="options">${optionsHtml}</div>
        </div>
    `;

    // Update progress
    const progress = ((currentQuestionIndex + 1) / currentTest.questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    currentQuestionEl.textContent = currentQuestionIndex + 1;

    // Update buttons
    prevBtn.disabled = currentQuestionIndex === 0;

    if (currentQuestionIndex === currentTest.questions.length - 1) {
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        finishBtn.style.display = 'none';
    }
}

// Global function for inline onchange
window.selectAnswer = function(index) {
    userAnswers[currentQuestionIndex] = index;
    showQuestion();
};

function finishTest() {
    stopTimer();

    let correct = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === currentTest.questions[index].correct) {
            correct++;
        }
    });

    const percent = Math.round((correct / currentTest.questions.length) * 100);

    document.getElementById('scorePercent').textContent = percent;
    document.getElementById('correctAnswers').textContent = correct;
    document.getElementById('totalAnswers').textContent = currentTest.questions.length;

    // Generate detailed results
    let detailsHtml = '<div class="results-list">';
    currentTest.questions.forEach((q, index) => {
        const isCorrect = userAnswers[index] === q.correct;
        detailsHtml += `
            <div class="result-item ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="result-question">${index + 1}. ${q.question}</div>
                <div class="result-answer">
                    Your answer: <strong>${q.options[userAnswers[index]]}</strong>
                    ${!isCorrect ? `<br>Correct answer: <strong>${q.options[q.correct]}</strong>` : ''}
                </div>
            </div>
        `;
    });
    detailsHtml += '</div>';

    document.getElementById('resultsDetails').innerHTML = detailsHtml;

    testModal.style.display = 'none';
    resultsModal.style.display = 'flex';
}