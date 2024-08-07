let currentWords = [];
let filteredWords = [];
let currentIndex = 0;
let score = 0;
let totalRounds = 10;
let mode = "to-russian";
let interfaceLanguage = "ru";
let category = "all";
let message = ""

const languageNames = {
    "tajik": "Таджикский",
    "uzbek": "Узбекский",
    "kyrgyz": "Киргизский",
    "kazakh": "Казахский"
}

const categoryNames = {
    "all": "Все категории",
    "emotions": "Эмоции",
    "animals": "Животные",
    "nature": "Природа",
    "technology": "Техника",
    "food": "Еда",
    "professions": "Профессии",
    "household": "Домашние предметы",
    "sports": "Спорт",
    "transport": "Транспорт",
    "school": "Школа"
}

const translations = {
    "ru": {
        "correct": "Правильно!",
        "incorrect": "Неправильно. Правильный перевод: ",
        "excellent-result": "Молодец, у тебя отлично получается!",
        "good-result": "Хороший результат, в следующий раз будет еще лучше!",
        "try-again": "Попробуй еще раз!",
        "final-score": "Ваш результат: ",
        "dictionary": "Словарь",
        "search": "Поиск",
        "title": "Практика языка",
        "select-mode": "Выберите режим:",
        "to-russian": "Перевод на русский",
        "from-russian": "Перевод с русского",
        "select-category": "Выберите категорию:",
        "all-categories": "Все категории",
        "emotions": "Эмоции",
        "animals": "Животные",
        "nature": "Природа",
        "technology": "Техника",
        "food": "Еда",
        "professions": "Профессии",
        "household": "Домашние предметы",
        "sports": "Спорт",
        "transport": "Транспорт",
        "school": "Школа",
        "select-language": "Выберите язык:",
        "start-game": "Начать игру",
        "dictionary": "Словарь",
        "training-mode": "Режим тренировки",
        "enter-translation": "Введите перевод:",
        "confirm": "Подтвердить",
        "next-word": "Следующее слово",
        "back-to-start": "Вернуться к началу",
        "learning-mode": "Режим обучения",
        "category": "Категория:",
        "interface-language": "Язык интерфейса",
        "lang-ru": "Русский",
        "lang-tajik": "Таджикский",
        "lang-uzbek": "Узбекский",
        "lang-kyrgyz": "Киргизский",
        "lang-kazakh": "Казахский"
    },
    "tajik": {
        "correct": "Дуруст!",
        "incorrect": "Нодуруст. Тарҷумаи дуруст: ",
        "excellent-result": "Офарин, шумо хеле хуб кор кардед!",
        "good-result": "Натиҷаи хуб, дар дафъаи оянда беҳтар мешавад!",
        "try-again": "Такрор кунед!",
        "final-score": "Натиҷаи шумо: ",
        "dictionary": "Луғат",
        "search": "Ҷустуҷӯ",
        "title": "Амали забон",
        "select-mode": "Режимро интихоб кунед:",
        "to-russian": "Ба русӣ тарҷума кунед",
        "from-russian": "Аз русӣ тарҷума кунед",
        "select-category": "Категорияро интихоб кунед:",
        "all-categories": "Ҳамаи категорияҳо",
        "emotions": "Эҳсосот",
        "animals": "Ҳайвонот",
        "nature": "Табиат",
        "technology": "Технология",
        "food": "Хӯрок",
        "professions": "Касбҳо",
        "household": "Маводҳои хона",
        "sports": "Варзиш",
        "transport": "Нақлиёт",
        "school": "Мактаб",
        "select-language": "Забонро интихоб кунед:",
        "start-game": "Бозиро оғоз кунед",
        "dictionary": "Луғат",
        "training-mode": "Режими омӯзиш",
        "enter-translation": "Тарҷумаро ворид кунед:",
        "confirm": "Тасдиқ кунед",
        "next-word": "Калимаи навбатӣ",
        "back-to-start": "Ба оғози бозгашт",
        "learning-mode": "Режими омӯзиш",
        "category": "Категория:",
        "interface-language": "Забони интерфейс",
        "lang-ru": "Русӣ",
        "lang-tajik": "Тоҷикӣ",
        "lang-uzbek": "Ӯзбекӣ",
        "lang-kyrgyz": "Қирғизӣ",
        "lang-kazakh": "Қазоқӣ"
    },
    "uzbek": {
        "correct": "Тўғри!",
        "incorrect": "Нотўғри. Тўғри таржима: ",
        "excellent-result": "Афарин, сиз жуда яхши ишладингиз!",
        "good-result": "Яхши натижа, кейинги сафар янада яхшироқ бўлади!",
        "try-again": "Яна уриниб кўринг!",
        "final-score": "Сизнинг натижангиз: ",
        "dictionary": "Луғат",
        "search": "Qidiruv",
        "title": "Til amaliyoti",
        "select-mode": "Rejimni tanlang:",
        "to-russian": "Rus tiliga tarjima qilish",
        "from-russian": "Rus tilidan tarjima qilish",
        "select-category": "Toifani tanlang:",
        "all-categories": "Barcha toifalar",
        "emotions": "His-tuyg'ular",
        "animals": "Hayvonlar",
        "nature": "Tabiat",
        "technology": "Texnologiya",
        "food": "Oziq-ovqat",
        "professions": "Kasblar",
        "household": "Uy-ro'zg'or buyumlari",
        "sports": "Sport",
        "transport": "Transport",
        "school": "Maktab",
        "select-language": "Tilni tanlang:",
        "start-game": "O'yinni boshlash",
        "dictionary": "Lug'at",
        "training-mode": "Mashg'ulot rejimi",
        "enter-translation": "Tarjimani kiriting:",
        "confirm": "Tasdiqlash",
        "next-word": "Keyingi so'z",
        "back-to-start": "Boshlashga qaytish",
        "learning-mode": "O'rganish rejimi",
        "category": "Toifa:",
        "interface-language": "Interfeys tili",
        "lang-ru": "Rus tili",
        "lang-tajik": "Tojik tili",
        "lang-uzbek": "O'zbek tili",
        "lang-kyrgyz": "Qirg'iz tili",
        "lang-kazakh": "Qazaq tili"
    },
    "kyrgyz": {
        "correct": "Туура!",
        "incorrect": "Туура эмес. Туура котормосу: ",
        "excellent-result": "Азаматсыз, сиз абдан жакшы иштедиңиз!",
        "good-result": "Жакшы натыйжа, кийинки жолу дагы жакшы болот!",
        "try-again": "Дагы аракет кылыңыз!",
        "final-score": "Сиздин жыйынтык: ",
        "dictionary": "Сөздүк",
        "search": "Издөө",
        "title": "Тил практикасы",
        "select-mode": "Режимди тандаңыз:",
        "to-russian": "Орусчага которуу",
        "from-russian": "Орусчадан которуу",
        "select-category": "Категорияны тандаңыз:",
        "all-categories": "Бардык категориялар",
        "emotions": "Сезимдер",
        "animals": "Жаныбарлар",
        "nature": "Табият",
        "technology": "Технология",
        "food": "Тамак-аш",
        "professions": "Кесиптер",
        "household": "Үй буюмдары",
        "sports": "Спорт",
        "transport": "Транспорт",
        "school": "Мектеп",
        "select-language": "Тилди тандаңыз:",
        "start-game": "Оюнду баштоо",
        "dictionary": "Сөздүк",
        "training-mode": "Окутуу режими",
        "enter-translation": "Которууну киргизиңиз:",
        "confirm": "Тастыктоо",
        "next-word": "Кийинки сөз",
        "back-to-start": "Баштоого кайтуу",
        "learning-mode": "Окутуу режими",
        "category": "Категория:",
        "interface-language": "Интерфейс тили",
        "lang-ru": "Орусча",
        "lang-tajik": "Тажикче",
        "lang-uzbek": "Өзбекче",
        "lang-kyrgyz": "Кыргызча",
        "lang-kazakh": "Казакча"
    },
    "kazakh": {
        "correct": "Дұрыс!",
        "incorrect": "Қате. Дұрыс аударма: ",
        "excellent-result": "Жарайсың, сен өте жақсы жұмыс жасадың!",
        "good-result": "Жақсы нәтиже, келесі жолы одан да жақсы болады!",
        "try-again": "Тағы да тырысыңыз!",
        "final-score": "Сіздің нәтижеңіз: ",
        "dictionary": "Сөздік",
        "search": "Іздеу",
        "title": "Тіл практикасы",
        "select-mode": "Режимді таңдаңыз:",
        "to-russian": "Орыс тіліне аудару",
        "from-russian": "Орыс тілінен аудару",
        "select-category": "Санатты таңдаңыз:",
        "all-categories": "Барлық санаттар",
        "emotions": "Сезімдер",
        "animals": "Жануарлар",
        "nature": "Табиғат",
        "technology": "Технология",
        "food": "Тамақ",
        "professions": "Мамандықтар",
        "household": "Үй заттары",
        "sports": "Спорт",
        "transport": "Көлік",
        "school": "Мектеп",
        "select-language": "Тілді таңдаңыз:",
        "start-game": "Ойынды бастау",
        "dictionary": "Сөздік",
        "training-mode": "Оқыту режимі",
        "enter-translation": "Аударманы енгізіңіз:",
        "confirm": "Растау",
        "next-word": "Келесі сөз",
        "back-to-start": "Бастауға оралу",
        "learning-mode": "Оқыту режимі",
        "category": "Санат:",
        "interface-language": "Интерфейс тілі",
        "lang-ru": "Орысша",
        "lang-tajik": "Тәжікше",
        "lang-uzbek": "Өзбекше",
        "lang-kyrgyz": "Қырғызша",
        "lang-kazakh": "Қазақша"
    }
};

function switchInterfaceLanguage() {
    interfaceLanguage = document.getElementById('interface-language').value;
    document.getElementById('final-score').innerText = `${translations[interfaceLanguage]["final-score"]} ${score} из ${totalRounds}. ${message}`;
    applyTranslations();
}

function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[interfaceLanguage] && translations[interfaceLanguage][key]) {
            el.innerText = translations[interfaceLanguage][key];
        }
        
    });
}

document.getElementById('mode').addEventListener('change', function() {
    mode = this.value;
});

function startGame() {
    const category = document.getElementById('category').value;
    const language = document.getElementById('language').value;
    currentWords = category === "all" 
        ? shuffleArray(Object.values(words).flat().map(word => ({ ...word, word: word.translations[language], translation: word.translations['russian'], sentenceForeign: word.sentences[language], sentenceRussian: word.sentences['russian'] })))
        : shuffleArray(words[category].map(word => ({ ...word, word: word.translations[language], translation: word.translations['russian'], sentenceForeign: word.sentences[language], sentenceRussian: word.sentences['russian'] })));
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
    currentWords = category === "all" 
        ? Object.values(words).flat().map(word => ({ ...word, word: word.translations[language], translation: word.translations['russian'], sentenceForeign: word.sentences[language], sentenceRussian: word.sentences['russian'] }))
        : words[category].map(word => ({ ...word, word: word.translations[language], translation: word.translations['russian'], sentenceForeign: word.sentences[language], sentenceRussian: word.sentences['russian'] }));
    showLearningWords(language, category);

    document.querySelector('.learning-pack').style.display = 'block';
    document.querySelector('.game-container').style.display = 'none';
    document.querySelector('.result-screen').style.display = 'none';
    document.querySelector('.mode-select').style.display = 'none';
    document.querySelector('.category-select').style.display = 'none';
    document.querySelector('.language-select').style.display = 'none';
    document.querySelector('.training-container').style.display = 'none';
    document.getElementById('learning-category').value = category;
}

function startTraining() {
    const language = document.getElementById('language').value;
    const category = document.getElementById('category').value;
    currentWords = category === "all" 
        ? shuffleArray(Object.values(words).flat().map(word => ({ ...word, word: word.translations[language], translation: word.translations['russian'], sentenceForeign: word.sentences[language], sentenceRussian: word.sentences['russian'] })))
        : shuffleArray(words[category].map(word => ({ ...word, word: word.translations[language], translation: word.translations['russian'], sentenceForeign: word.sentences[language], sentenceRussian: word.sentences['russian'] })));
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
        document.getElementById('training-sentence-foreign').innerHTML = highlightWord(wordData.sentenceForeign, wordData.word);
        document.getElementById('training-sentence-russian').innerHTML = highlightWord(wordData.sentenceRussian, wordData.translation);
        const imageContainer = document.getElementById('image-container-training');
        // if (wordData.word) {
        //     fetchImage(wordData.word.toLowerCase(), imageContainer, 'training-image');
        // }
    } else {
        showTrainingEndScreen();
    }
}

function highlightWord(sentence, word) {
    const regex = new RegExp(`(${word})`, 'gi');
    return sentence.replace(regex, '<span class="highlight">$1</span>');
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
    document.getElementById('image-container-training').innerHTML = '';
    showTrainingWord();
}

function showLearningWords(language, category) {
    const learningContainer = document.getElementById('learning-words');
    

    learningContainer.innerHTML = '';
    currentWords.forEach(wordPair => {
        const wordItem = document.createElement('div');
        wordItem.classList.add('word-item');
        wordItem.innerHTML = `<strong>${wordPair.word}</strong> - ${wordPair.translation}`;
        learningContainer.appendChild(wordItem);
    });
}

function filterLearningWords() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const selectedCategory = document.getElementById('learning-category').value;
    const language = document.getElementById('language').value;

    filteredWords = selectedCategory === "all" 
        ? Object.values(words).flat().filter(word => 
            word.translations[language].toLowerCase().includes(searchInput) || 
            word.translations['russian'].toLowerCase().includes(searchInput))
        : words[selectedCategory].filter(word =>
            word.translations[language].toLowerCase().includes(searchInput) || 
            word.translations['russian'].toLowerCase().includes(searchInput));

    const learningContainer = document.getElementById('learning-words');
    learningContainer.innerHTML = '';
    filteredWords.forEach(wordPair => {
        const wordItem = document.createElement('div');
        wordItem.classList.add('word-item');
        wordItem.innerHTML = `<strong>${wordPair.translations[language]}</strong> - ${wordPair.translations['russian']}`;
        learningContainer.appendChild(wordItem);
    });
}

function showNextWord() {
    if (currentIndex < totalRounds) {
        document.getElementById('word').innerText = mode === 'to-russian' ? currentWords[currentIndex].word : currentWords[currentIndex].translation;
        document.getElementById('translation').value = '';
        document.getElementById('result').innerText = '';
        document.getElementById('word-counter').innerText = `${currentIndex + 1} из ${totalRounds}`;
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
        document.getElementById('result').innerText = translations[interfaceLanguage]["correct"];
    } else {
        document.getElementById('result').innerText = `${translations[interfaceLanguage]["incorrect"]} '${correctTranslation}'.`;
    }
    const imageContainer = document.getElementById('image-container');
    if (currentWords[currentIndex].translationEnglish) {
        fetchImage(currentWords[currentIndex].translationEnglish.toLowerCase(), imageContainer);
    }
    setTimeout(showNextWord, 2500);
    currentIndex++;
}


function fetchImage(query, imageContainer) {
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
                imageContainer.innerText = 'Изображение не найдено';
            }
        })
        .catch(error => {
            console.error('Error fetching image:', error);
            imageContainer.innerText = 'Ошибка при загрузке изображения';
        });
}

function endGame() {
    
        let message = '';
        if (score === 10) {
            message = translations[interfaceLanguage]["excellent-result"];
        } else if (score >= 5) {
            message = translations[interfaceLanguage]["good-result"];
        } else {
            message = translations[interfaceLanguage]["try-again"];
        }
        document.getElementById('final-score').innerText = `${translations[interfaceLanguage]["final-score"]} ${score} из ${totalRounds}. ${message}`;
        document.querySelector('.game-container').style.display = 'none';
        document.querySelector('.result-screen').style.display = 'block';

}

function goToStartScreen() {
    currentIndex=0;

    const trainingContainer = document.querySelector('.training-container');
    trainingContainer.innerHTML = `
        <h2 data-i18n="training-mode">Режим тренировки</h2>
            <div class="word-display">
                <div id="image-container-training"></div>
                <p id="training-word"></p>
                <p id="training-translation"></p>
                <p id="training-sentence-foreign"></p>
                <p id="training-sentence-russian"></p>
            </div>

        <button class="btn" data-i18n="back-to-start" onclick="goToStartScreen()">Вернуться к началу</button>
        <button class="btn" data-i18n="next-word" onclick="nextTrainingWord()">Следующее слово</button>
    `;

    document.querySelector('.result-screen').style.display = 'none';
    document.querySelector('.game-container').style.display = 'none';
    document.querySelector('.mode-select').style.display = 'block';
    document.querySelector('.category-select').style.display = 'block';
    document.querySelector('.language-select').style.display = 'block';
    document.querySelector('.learning-pack').style.display = 'none';
    document.querySelector('.training-container').style.display = 'none';
    document.getElementById('category').value = category;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
document.getElementById('category').addEventListener('change', function() {
    category = this.value;
});
document.getElementById('learning-category').addEventListener('change', function() {
    category = this.value;
});

document.getElementById('learning-language').addEventListener('change', function() {
    learningLanguage = this.value;
    filterLearningWords();
});


document.getElementById('start-game').onclick = startGame;
document.getElementById('start-learning').onclick = startLearning;
document.getElementById('check-answer').onclick = checkTranslation;
document.getElementById('go-to-start-screen').onclick = goToStartScreen;
document.getElementById('search-input').addEventListener('input', filterLearningWords);

document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
});
