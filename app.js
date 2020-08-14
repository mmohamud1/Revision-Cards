const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');

// Keep track of current card
let currentActiveCard = 0;

// Store DOM cards
const cardsEl = [];

// Store card data
const cardsData = [
    {
        question: 'Who is the president of America?',
        answer: 'Donald Trump'
    },
    {
        question: 'Who is the queen of the United kingdon?',
        answer: 'Queen Elizabeth II'
    },
    {
        question: 'Which countries are a part of the G7?',
        answer: 'United States, Germany, United Kingdom, Japan, Canada, Italy and France'
    }
];

// Create all cards
const createCards = () => {
    cardsData.forEach((data, index) => createCard(data, index));
}

// Create a single card in the Dom
const createCard = (data, index) => {
    const card = document.createElement('div');
    card.classList.add('card');

    if (index === 0) {
        card.classList.add('active');
    }

    card.innerHTML = `
    <div class="inner-card">
        <div class="inner-card-front">
            <p>${data.question}</p>
        </div>
        <div class="inner-card-back">
            <p>${data.answer}</p>
        </div>
    </div>
    `;

    card.addEventListener('click', () => card.classList.toggle('show-answer'));

    // Add to DOM cards
    cardsEl.push(card);

    cardsContainer.appendChild(card);

    // Put the number of Card
    updateCurrentText();
}

// Show number cards
const updateCurrentText = () => {
    currentEl.innerText = `${ currentActiveCard + 1}/${cardsEl.length}`;
}

createCards();