let currentWords = [];
let filteredWords = [];
let currentIndex = 0;
let score = 0;
let totalRounds = 10;
let mode = "to-russian";

const languageNames = {
    "tajik": "Таджикский",
    "uzbek": "Узбекский",
    "kyrgyz": "Киргизский",
    "kazakh": "Казахский"
};

const categoryNames = {
    "emotions": "Эмоции",
    "objects": "Вещи",
    "nature": "Природа",
    "technology": "Техника"
};

document.getElementById('mode').addEventListener('change', function() {
    mode = this.value;
});

function startGame() {
    const category = document.getElementById('category').value;
    const language = document.getElementById('language').value;
    currentWords = shuffleArray(words[language][category]);
    currentIndex = 0;
    score = 0;
    
    document.querySelector('.game-container').style.display = 'block';
    document.querySelector('.result-screen').style.display = 'none';
    document.querySelector('.mode-select').style.display = 'none';
    document.querySelector('.category-select').style.display = 'none';
    document.querySelector('.language-select').style.display = 'none';
    document.querySelector('.learning-pack').style.display = 'none';
    document.querySelector('.training-container').style.display = 'none';
    showNextWord();
}

function startLearning() {
    const language = document.getElementById('language').value;
    const category = document.getElementById('category').value;
    currentWords = words[language][category];
    showLearningWords(language, category);
    
    document.querySelector('.learning-pack').style.display = 'block';
    document.querySelector('.game-container').style.display = 'none';
    document.querySelector('.result-screen').style.display = 'none';
    document.querySelector('.mode-select').style.display = 'none';
    document.querySelector('.category-select').style.display = 'none';
    document.querySelector('.language-select').style.display = 'none';
    document.querySelector('.training-container').style.display = 'none';
}

function startTraining() {
    const language = document.getElementById('language').value;
    const category = document.getElementById('category').value;
    currentWords = words[language][category];
    currentIndex = 0;
    
    document.querySelector('.training-container').style.display = 'block';
    document.querySelector('.learning-pack').style.display = 'none';
    document.querySelector('.game-container').style.display = 'none';
    document.querySelector('.result-screen').style.display = 'none';
    document.querySelector('.mode-select').style.display = 'none';
    document.querySelector('.category-select').style.display = 'none';
    document.querySelector('.language-select').style.display = 'none';
    showTrainingWord();
}

function showTrainingWord() {
    if (currentIndex < currentWords.length) {
        const wordData = currentWords[currentIndex];
        document.getElementById('training-word').innerText = wordData.word;
        document.getElementById('training-translation').innerText = wordData.translation;
        document.getElementById('training-sentence-foreign').innerText = wordData.sentenceForeign;
        document.getElementById('training-sentence-russian').innerText = wordData.sentenceRussian;
        if (category!="emotions")fetchImage(currentWords[currentIndex].translationEnglish.toLowerCase());
    } else {
        showTrainingEndScreen();
    }
}

function showTrainingEndScreen() {
    const trainingContainer = document.querySelector('.training-container');
    trainingContainer.innerHTML = `
        <h2>Тренировка завершена!</h2>
        <button class="btn" onclick="startGame()">Начать игру</button>
        <button class="btn" onclick="goToStartScreen()">Вернуться к началу</button>
    `;
}

function nextTrainingWord() {
    currentIndex++;
    showTrainingWord();
}

function showLearningWords(language, category) {
    const learningContainer = document.getElementById('learning-words');
    document.getElementById('learning-title').innerText = `${languageNames[language]} словарь (${categoryNames[category]})`;
    
    learningContainer.innerHTML = '';
    currentWords.forEach(wordPair => {
        const wordItem = document.createElement('div');
        wordItem.classList.add('word-item');
        wordItem.innerHTML = `<strong>${wordPair.word}</strong> - ${wordPair.translation}`;
        learningContainer.appendChild(wordItem);
    });
}

function filterWords() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredWords = currentWords.filter(wordPair =>
        wordPair.word.toLowerCase().includes(searchInput) || wordPair.translation.toLowerCase().includes(searchInput)
    );
    const learningContainer = document.getElementById('learning-words');
    learningContainer.innerHTML = '';
    filteredWords.forEach(wordPair => {
        const wordItem = document.createElement('div');
        wordItem.classList.add('word-item');
        wordItem.innerHTML = `<strong>${wordPair.word}</strong> - ${wordPair.translation}`;
        learningContainer.appendChild(wordItem);
    });
}

function showNextWord() {
    if (currentIndex < totalRounds) {
        document.getElementById('word').innerText = mode === 'to-russian' ? currentWords[currentIndex].word : currentWords[currentIndex].translation;
        document.getElementById('translation').value = '';
        document.getElementById('result').innerText = '';
        document.getElementById('word-counter').innerText = `Слово ${currentIndex + 1} из ${totalRounds}`;
        document.getElementById('image-container').innerHTML = '';
    } else {
        endGame();
    }
}

function checkTranslation() {
    const input = document.getElementById('translation').value.trim().toLowerCase();
    const correctTranslation = mode === 'to-russian' ? currentWords[currentIndex].translation.toLowerCase() : currentWords[currentIndex].word.toLowerCase();
    if (input === correctTranslation) {
        score++;
        document.getElementById('result').innerText = 'Правильно!';
    } else {
        document.getElementById('result').innerText = `Неправильно. Правильный перевод: '${correctTranslation}'.`;
    }
    if (category!="emotions")fetchImage(currentWords[currentIndex].translationEnglish.toLowerCase());
    setTimeout(showNextWord, 2500);
    currentIndex++;

   
    
    

    
}

function fetchImage(query) {
    const imageContainer = document.getElementById('image-container');
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=sKD_5rdGAuh12DQdGocPvwFP3Kj6GukGsY6xrwyIq88`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                const imageUrl = data.results[0].urls.small;
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                imgElement.alt = query;
                imgElement.classList.add('result-image');
                imageContainer.appendChild(imgElement);
            } else {
                //imageContainer.innerText = 'Изображение не найдено';
            }
        })
        .catch(error => {
            console.error('Error fetching image:', error);
            imageContainer.innerText = 'Ошибка при загрузке изображения';
        });
}

function endGame() {
    document.getElementById('final-score').innerText = `Ваш результат: ${score} из ${totalRounds}`;
    document.querySelector('.game-container').style.display = 'none';
    document.querySelector('.result-screen').style.display = 'block';
}

function goToStartScreen() {
    document.querySelector('.result-screen').style.display = 'none';
    document.querySelector('.game-container').style.display = 'none';
    document.querySelector('.mode-select').style.display = 'block';
    document.querySelector('.category-select').style.display = 'block';
    document.querySelector('.language-select').style.display = 'block';
    document.querySelector('.learning-pack').style.display = 'none';
    document.querySelector('.training-container').style.display = 'none';
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
