const words = {
    "tajik": {
        "emotions": [
            { "word": "хурсандӣ", "translation": "радость", "translationEnglish": "joy", "sentenceForeign": "Ман аз ғалабаи худ хурсандӣ мекунам.", "sentenceRussian": "Я радуюсь своей победе." },
            { "word": "ғам", "translation": "печаль", "translationEnglish": "sadness", "sentenceForeign": "Ғам дар дили ман ҷойгир аст.", "sentenceRussian": "Печаль в моем сердце." },
            { "word": "тарс", "translation": "страх", "translationEnglish": "fear", "sentenceForeign": "Ман аз торикӣ тарсидам.", "sentenceRussian": "Я боюсь темноты." },
            { "word": "ғазаб", "translation": "гнев", "translationEnglish": "anger", "sentenceForeign": "Ман аз рафтори ӯ ғазабнокам.", "sentenceRussian": "Я злюсь на его поведение." },
            { "word": "шодӣ", "translation": "радость", "translationEnglish": "joy", "sentenceForeign": "Шодӣ дар ҷашни зодрӯзӣ.", "sentenceRussian": "Радость на дне рождения." },
            { "word": "ғамгин", "translation": "печальный", "translationEnglish": "sad", "sentenceForeign": "Ман имрӯз ғамгинам.", "sentenceRussian": "Я сегодня печален." },
            { "word": "фахр", "translation": "гордость", "translationEnglish": "pride", "sentenceForeign": "Ман аз дастовардҳои худ фахр мекунам.", "sentenceRussian": "Я горжусь своими достижениями." },
            { "word": "таассуф", "translation": "разочарование", "translationEnglish": "disappointment", "sentenceForeign": "Хабари нохуш маро таассуф кард.", "sentenceRussian": "Плохие новости меня разочаровали." },
            { "word": "ҳаяҷон", "translation": "волнение", "translationEnglish": "excitement", "sentenceForeign": "Пеш аз сафари мо ҳаяҷон доштем.", "sentenceRussian": "Перед поездкой мы были взволнованы." },
            { "word": "ҳаловат", "translation": "удовольствие", "translationEnglish": "pleasure", "sentenceForeign": "Ин филм ҳаловат мебахшад.", "sentenceRussian": "Этот фильм приносит удовольствие." },
            { "word": "аҳд", "translation": "обещание", "translationEnglish": "promise", "sentenceForeign": "Ман ба ту аҳд медиҳам.", "sentenceRussian": "Я обещаю тебе." },
            { "word": "ишқ", "translation": "любовь", "translationEnglish": "love", "sentenceForeign": "Ишқ оташи дил аст.", "sentenceRussian": "Любовь - это огонь в сердце." },
            { "word": "кӯҳ", "translation": "грусть", "translationEnglish": "sorrow", "sentenceForeign": "Кӯҳ аз даст додани дӯстам.", "sentenceRussian": "Грусть от потери друга." },
            { "word": "шарм", "translation": "стыд", "translationEnglish": "shame", "sentenceForeign": "Аз кирдораш шарм медошт.", "sentenceRussian": "Ему было стыдно за свои поступки." },
            { "word": "самимият", "translation": "искренность", "translationEnglish": "sincerity", "sentenceForeign": "Самимият дар суханони ӯ эҳсос мешавад.", "sentenceRussian": "В его словах чувствуется искренность." }
        ],
        "animals": [
            { "word": "гурба", "translation": "кошка", "translationEnglish": "cat", "sentenceForeign": "Гурба болои диван нишастааст.", "sentenceRussian": "Кошка сидит на диване." },
            { "word": "саг", "translation": "собака", "translationEnglish": "dog", "sentenceForeign": "Саг дар кӯча медавад.", "sentenceRussian": "Собака бегает по улице." },
            { "word": "парранда", "translation": "птица", "translationEnglish": "bird", "sentenceForeign": "Парранда дар осмон парвоз мекунад.", "sentenceRussian": "Птица летает в небе." },
            { "word": "моҳӣ", "translation": "рыба", "translationEnglish": "fish", "sentenceForeign": "Моҳӣ дар об шино мекунад.", "sentenceRussian": "Рыба плавает в воде." },
            { "word": "хирс", "translation": "медведь", "translationEnglish": "bear", "sentenceForeign": "Хирс дар ҷангал зиндаги мекунад.", "sentenceRussian": "Медведь живет в лесу." },
            { "word": "шутур", "translation": "верблюд", "translationEnglish": "camel", "sentenceForeign": "Шутур дар биёбон аст.", "sentenceRussian": "Верблюд находится в пустыне." },
            { "word": "харгӯш", "translation": "кролик", "translationEnglish": "rabbit", "sentenceForeign": "Харгӯш дар алаф хӯрок мехӯрад.", "sentenceRussian": "Кролик ест траву." },
            { "word": "гусфанд", "translation": "овца", "translationEnglish": "sheep", "sentenceForeign": "Гусфанд дар чарогоҳ аст.", "sentenceRussian": "Овца на пастбище." },
            { "word": "асал", "translation": "пчела", "translationEnglish": "bee", "sentenceForeign": "Асал гулро ҷамъ мекунад.", "sentenceRussian": "Пчела собирает нектар с цветов." },
            { "word": "муш", "translation": "мышь", "translationEnglish": "mouse", "sentenceForeign": "Муш дар хонаи мо аст.", "sentenceRussian": "Мышь в нашем доме." },
            { "word": "бука", "translation": "бык", "translationEnglish": "bull", "sentenceForeign": "Бука дар майдон рақобат мекунад.", "sentenceRussian": "Бык сражается на арене." },
            { "word": "гав", "translation": "корова", "translationEnglish": "cow", "sentenceForeign": "Гав дар саҳро аст.", "sentenceRussian": "Корова на поле." },
            { "word": "асп", "translation": "лошадь", "translationEnglish": "horse", "sentenceForeign": "Асп дар шола медавад.", "sentenceRussian": "Лошадь бегает в поле." },
            { "word": "кабак", "translation": "жаба", "translationEnglish": "frog", "sentenceForeign": "Кабак дар об медарояд.", "sentenceRussian": "Жаба прыгает в воду." },
            { "word": "буфало", "translation": "буйвол", "translationEnglish": "buffalo", "sentenceForeign": "Буфало дар Африка зиндаги мекунад.", "sentenceRussian": "Буйвол живет в Африке." }
        ],
        "nature": [
            { "word": "об", "translation": "вода", "translationEnglish": "water", "sentenceForeign": "Об барои зиндагӣ муҳим аст.", "sentenceRussian": "Вода важна для жизни." },
            { "word": "гул", "translation": "цветок", "translationEnglish": "flower", "sentenceForeign": "Ин гул зебо аст.", "sentenceRussian": "Этот цветок красивый." },
            { "word": "барг", "translation": "лист", "translationEnglish": "leaf", "sentenceForeign": "Барги дарахт сабз аст.", "sentenceRussian": "Лист дерева зеленый." },
            { "word": "хок", "translation": "земля", "translationEnglish": "soil", "sentenceForeign": "Ин хок ҳосилхез аст.", "sentenceRussian": "Эта земля плодородна." },
            { "word": "осмон", "translation": "небо", "translationEnglish": "sky", "sentenceForeign": "Осмон кабуд аст.", "sentenceRussian": "Небо голубое." },
            { "word": "ситора", "translation": "звезда", "translationEnglish": "star", "sentenceForeign": "Ситораҳо дар осмон медурахшанд.", "sentenceRussian": "Звезды светят на небе." },
            { "word": "моҳ", "translation": "луна", "translationEnglish": "moon", "sentenceForeign": "Моҳ дар осмон медурахшад.", "sentenceRussian": "Луна светит на небе." },
            { "word": "шамол", "translation": "ветер", "translationEnglish": "wind", "sentenceForeign": "Шамол сахт мебарояд.", "sentenceRussian": "Ветер дует сильно." },
            { "word": "борон", "translation": "дождь", "translationEnglish": "rain", "sentenceForeign": "Борон меборад.", "sentenceRussian": "Идет дождь." },
            { "word": "барф", "translation": "снег", "translationEnglish": "snow", "sentenceForeign": "Барф мерезад.", "sentenceRussian": "Идет снег." },
            { "word": "чароғ", "translation": "свет", "translationEnglish": "light", "sentenceForeign": "Чароғ равшан аст.", "sentenceRussian": "Свет яркий." },
            { "word": "соя", "translation": "тень", "translationEnglish": "shade", "sentenceForeign": "Сояи дарахт бузург аст.", "sentenceRussian": "Тень дерева большая." },
            { "word": "кӯҳ", "translation": "гора", "translationEnglish": "mountain", "sentenceForeign": "Кӯҳҳои баланд ҳастанд.", "sentenceRussian": "Горы высокие." },
            { "word": "дарё", "translation": "река", "translationEnglish": "river", "sentenceForeign": "Дарё оби равон дорад.", "sentenceRussian": "Река имеет проточную воду." },
            { "word": "баҳор", "translation": "весна", "translationEnglish": "spring", "sentenceForeign": "Баҳор омад.", "sentenceRussian": "Пришла весна." }
        ],
        "technology": [
            { "word": "компютер", "translation": "компьютер", "translationEnglish": "computer", "sentenceForeign": "Ин компютер нави ман аст.", "sentenceRussian": "Это мой новый компьютер." },
            { "word": "телефон", "translation": "телефон", "translationEnglish": "phone", "sentenceForeign": "Ман телефон дорам.", "sentenceRussian": "У меня есть телефон." },
            { "word": "мошин", "translation": "машина", "translationEnglish": "car", "sentenceForeign": "Мошини ман сурхи ранг аст.", "sentenceRussian": "Моя машина красного цвета." },
            { "word": "принтер", "translation": "принтер", "translationEnglish": "printer", "sentenceForeign": "Ман принтери нав харидам.", "sentenceRussian": "Я купил новый принтер." },
            { "word": "плеер", "translation": "плеер", "translationEnglish": "mp3-player", "sentenceForeign": "Ман плеерро гӯш мекунам.", "sentenceRussian": "Я слушаю плеер." },
            { "word": "телевизор", "translation": "телевизор", "translationEnglish": "TV", "sentenceForeign": "Телевизор дар меҳмонхона аст.", "sentenceRussian": "Телевизор в гостиной." },
            { "word": "камера", "translation": "камера", "translationEnglish": "camera", "sentenceForeign": "Камераи ман видео мегирад.", "sentenceRussian": "Моя камера снимает видео." },
            { "word": "лампа", "translation": "лампа", "translationEnglish": "lamp", "sentenceForeign": "Лампа дар рӯи миз аст.", "sentenceRussian": "Лампа стоит на столе." },
            { "word": "акумулятор", "translation": "аккумулятор", "translationEnglish": "battery", "sentenceForeign": "Аккумулятор дар мобил истифода мешавад.", "sentenceRussian": "Аккумулятор используется в телефоне." },
            { "word": "наушник", "translation": "наушники", "translationEnglish": "headphones", "sentenceForeign": "Ман наушникро истифода мебарам.", "sentenceRussian": "Я использую наушники." },
            { "word": "радио", "translation": "радио", "translationEnglish": "radio", "sentenceForeign": "Радио мусиқӣ навохт.", "sentenceRussian": "Радио играет музыку." },
            { "word": "факс", "translation": "факс", "translationEnglish": "fax", "sentenceForeign": "Ман факс мефиристам.", "sentenceRussian": "Я отправляю факс." },
            { "word": "микрофон", "translation": "микрофон", "translationEnglish": "microphone", "sentenceForeign": "Ман микрофонро истифода мебарам.", "sentenceRussian": "Я использую микрофон." },
            { "word": "клавиатура", "translation": "клавиатура", "translationEnglish": "keyboard", "sentenceForeign": "Ман клавиатураро менависам.", "sentenceRussian": "Я печатаю на клавиатуре." },
            { "word": "экран", "translation": "экран", "translationEnglish": "screen", "sentenceForeign": "Экран равшан аст.", "sentenceRussian": "Экран яркий." }
        ],
        "food": [
            { "word": "нони", "translation": "хлеб", "translationEnglish": "bread", "sentenceForeign": "Ман нони тафсон мехӯрам.", "sentenceRussian": "Я ем свежий хлеб." },
            { "word": "гӯшт", "translation": "мясо", "translationEnglish": "meat", "sentenceForeign": "Гӯшт дар табақ аст.", "sentenceRussian": "Мясо на тарелке." },
            { "word": "шўрбо", "translation": "суп", "translationEnglish": "soup", "sentenceForeign": "Ман шўрбо мехӯрам.", "sentenceRussian": "Я ем суп." },
            { "word": "картошка", "translation": "картофель", "translationEnglish": "potato", "sentenceForeign": "Ман картошка пухта мехӯрам.", "sentenceRussian": "Я ем жареный картофель." },
            { "word": "мева", "translation": "фрукты", "translationEnglish": "fruit", "sentenceForeign": "Ман мева мехӯрам.", "sentenceRussian": "Я ем фрукты." },
            { "word": "сабзӣ", "translation": "овощи", "translationEnglish": "vegetables", "sentenceForeign": "Ман сабзӣ мехӯрам.", "sentenceRussian": "Я ем овощи." },
            { "word": "шир", "translation": "молоко", "translationEnglish": "milk", "sentenceForeign": "Ман шир менӯшам.", "sentenceRussian": "Я пью молоко." },
            { "word": "қаймоқ", "translation": "сметана", "translationEnglish": "sour cream", "sentenceForeign": "Ман қаймоқ бо қаҳва менӯшам.", "sentenceRussian": "Я пью кофе со сметаной." },
            { "word": "нон", "translation": "булочка", "translationEnglish": "bun", "sentenceForeign": "Ман нон мехӯрам.", "sentenceRussian": "Я ем булочку." },
            { "word": "сабзӣ", "translation": "морковь", "translationEnglish": "carrot", "sentenceForeign": "Ман сабзӣ мехӯрам.", "sentenceRussian": "Я ем морковь." },
            { "word": "яблоко", "translation": "яблоко", "translationEnglish": "apple", "sentenceForeign": "Ман себ мехӯрам.", "sentenceRussian": "Я ем яблоко." },
            { "word": "апельсин", "translation": "апельсин", "translationEnglish": "orange", "sentenceForeign": "Ман апельсин мехӯрам.", "sentenceRussian": "Я ем апельсин." },
            { "word": "лимон", "translation": "лимон", "translationEnglish": "lemon", "sentenceForeign": "Ман лимон мехӯрам.", "sentenceRussian": "Я ем лимон." },
            { "word": "салат", "translation": "салат", "translationEnglish": "salad", "sentenceForeign": "Ман салат мехӯрам.", "sentenceRussian": "Я ем салат." },
            { "word": "бутерброд", "translation": "бутерброд", "translationEnglish": "sandwich", "sentenceForeign": "Ман бутерброд мехӯрам.", "sentenceRussian": "Я ем бутерброд." }
        ],
        "jobs": [
            { "word": "муаллим", "translation": "учитель", "translationEnglish": "teacher", "sentenceForeign": "Муаллими ман дарс медиҳад.", "sentenceRussian": "Мой учитель преподает." },
            { "word": "духтур", "translation": "врач", "translationEnglish": "doctor", "sentenceForeign": "Духтур маро муоина мекунад.", "sentenceRussian": "Врач меня осматривает." },
            { "word": "меъмор", "translation": "архитектор", "translationEnglish": "architect", "sentenceForeign": "Меъмор биноҳоро тарҳрезӣ мекунад.", "sentenceRussian": "Архитектор проектирует здания." },
            { "word": "бармен", "translation": "бармен", "translationEnglish": "bartender", "sentenceForeign": "Бармен нӯшокиҳо омода мекунад.", "sentenceRussian": "Бармен готовит напитки." },
            { "word": "полиция", "translation": "полицейский", "translationEnglish": "police", "sentenceForeign": "Полиция тартиботро нигоҳ медорад.", "sentenceRussian": "Полицейский поддерживает порядок." },
            { "word": "муҳандис", "translation": "инженер", "translationEnglish": "engineer", "sentenceForeign": "Муҳандис маслиҳат медиҳад.", "sentenceRussian": "Инженер консультирует." },
            { "word": "дӯзанда", "translation": "портной", "translationEnglish": "tailor", "sentenceForeign": "Дӯзанда либосҳоро медӯзад.", "sentenceRussian": "Портной шьет одежду." },
            { "word": "ошпаз", "translation": "повар", "translationEnglish": "cook", "sentenceForeign": "Ошпаз таом мепазад.", "sentenceRussian": "Повар готовит еду." },
            { "word": "бозоргир", "translation": "продавец", "translationEnglish": "seller", "sentenceForeign": "Бозоргир молҳоро мефурӯшад.", "sentenceRussian": "Продавец продает товары." },
            { "word": "шофер", "translation": "водитель", "translationEnglish": "driver", "sentenceForeign": "Шофер мошин меронад.", "sentenceRussian": "Водитель ведет машину." },
            { "word": "ҳуқуқшинос", "translation": "юрист", "translationEnglish": "lawyer", "sentenceForeign": "Ҳуқуқшинос маслиҳат медиҳад.", "sentenceRussian": "Юрист консультирует." },
            { "word": "қарздор", "translation": "банкир", "translationEnglish": "banker", "sentenceForeign": "Қарздор бо пул кор мекунад.", "sentenceRussian": "Банкир работает с деньгами." },
            { "word": "нозир", "translation": "контролер", "translationEnglish": "inspector", "sentenceForeign": "Нозир корҳоро назорат мекунад.", "sentenceRussian": "Контролер следит за работами." },
            { "word": "дилер", "translation": "торговец", "translationEnglish": "dealer", "sentenceForeign": "Дилер молҳоро мефурӯшад.", "sentenceRussian": "Торговец продает товары." },
            { "word": "мудир", "translation": "менеджер", "translationEnglish": "manager", "sentenceForeign": "Мудир корҳоро идора мекунад.", "sentenceRussian": "Менеджер управляет делами." },
            { "word": "муҳосиб", "translation": "бухгалтер", "translationEnglish": "accountant", "sentenceForeign": "Муҳосиб ҳисобҳоро мекашад.", "sentenceRussian": "Бухгалтер ведет счета." },
            { "word": "сӯзандӯз", "translation": "швея", "translationEnglish": "seamstress", "sentenceForeign": "Сӯзандӯз либос медӯзад.", "sentenceRussian": "Швея шьет одежду." }
        ],
        "home_items": [
            { "word": "мебел", "translation": "мебель", "translationEnglish": "furniture", "sentenceForeign": "Мебел дар хона зебо аст.", "sentenceRussian": "Мебель в доме красивая." },
            { "word": "қолин", "translation": "ковер", "translationEnglish": "carpet", "sentenceForeign": "Қолин дар фарш аст.", "sentenceRussian": "Ковер на полу." },
            { "word": "лампа", "translation": "лампа", "translationEnglish": "lamp", "sentenceForeign": "Лампа дар рӯи миз аст.", "sentenceRussian": "Лампа на столе." },
            { "word": "кат", "translation": "кровать", "translationEnglish": "bed", "sentenceForeign": "Кат барои хоб аст.", "sentenceRussian": "Кровать для сна." },
            { "word": "қулф", "translation": "замок", "translationEnglish": "lock", "sentenceForeign": "Қулф дарро мебандад.", "sentenceRussian": "Замок закрывает дверь." },
            { "word": "айнӣ", "translation": "зеркало", "translationEnglish": "mirror", "sentenceForeign": "Айнӣ дар девор аст.", "sentenceRussian": "Зеркало на стене." },
            { "word": "пиёла", "translation": "чашка", "translationEnglish": "cup", "sentenceForeign": "Пиёла барои чой аст.", "sentenceRussian": "Чашка для чая." },
            { "word": "ҷевон", "translation": "шкаф", "translationEnglish": "closet", "sentenceForeign": "Ҷевон барои либос аст.", "sentenceRussian": "Шкаф для одежды." },
            { "word": "тарозу", "translation": "весы", "translationEnglish": "scales", "sentenceForeign": "Тарозу вазнро чен мекунад.", "sentenceRussian": "Весы измеряют вес." },
            { "word": "парда", "translation": "занавеска", "translationEnglish": "curtain", "sentenceForeign": "Парда дар тиреза аст.", "sentenceRussian": "Занавеска на окне." },
            { "word": "телевизор", "translation": "телевизор", "translationEnglish": "television", "sentenceForeign": "Телевизор дар меҳмонхона аст.", "sentenceRussian": "Телевизор в гостиной." },
            { "word": "рахти хоб", "translation": "постель", "translationEnglish": "bedding", "sentenceForeign": "Рахти хоб дар кат аст.", "sentenceRussian": "Постель на кровати." },
            { "word": "ҳуҷра", "translation": "комната", "translationEnglish": "room", "sentenceForeign": "Ҳуҷра барои меҳмонон аст.", "sentenceRussian": "Комната для гостей." },
            { "word": "қанд", "translation": "сахарница", "translationEnglish": "sugar bowl", "sentenceForeign": "Қанд дар рӯи миз аст.", "sentenceRussian": "Сахарница на столе." },
            { "word": "часпак", "translation": "скотч", "translationEnglish": "tape", "sentenceForeign": "Часпак барои бастабандӣ аст.", "sentenceRussian": "Скотч для упаковки." }
        ],
        "sports": [
            { "word": "футбол", "translation": "футбол", "translationEnglish": "football", "sentenceForeign": "Ман футбол бозӣ мекунам.", "sentenceRussian": "Я играю в футбол." },
            { "word": "бокс", "translation": "бокс", "translationEnglish": "boxing", "sentenceForeign": "Ман бокс тамрин мекунам.", "sentenceRussian": "Я тренируюсь в боксе." },
            { "word": "шиноварӣ", "translation": "плавание", "translationEnglish": "swimming", "sentenceForeign": "Ман шиноварӣ мекунам.", "sentenceRussian": "Я плаваю." },
            { "word": "баскетбол", "translation": "баскетбол", "translationEnglish": "basketball", "sentenceForeign": "Ман баскетбол бозӣ мекунам.", "sentenceRussian": "Я играю в баскетбол." },
            { "word": "волейбол", "translation": "волейбол", "translationEnglish": "volleyball", "sentenceForeign": "Ман волейбол бозӣ мекунам.", "sentenceRussian": "Я играю в волейбол." },
            { "word": "тэннис", "translation": "теннис", "translationEnglish": "tennis", "sentenceForeign": "Ман тэннис бозӣ мекунам.", "sentenceRussian": "Я играю в теннис." },
            { "word": "гимнастика", "translation": "гимнастика", "translationEnglish": "gymnastics", "sentenceForeign": "Ман гимнастика мекунам.", "sentenceRussian": "Я занимаюсь гимнастикой." },
            { "word": "ҷавидан", "translation": "бег", "translationEnglish": "running", "sentenceForeign": "Ман дар боғ давида мекунам.", "sentenceRussian": "Я бегаю в парке." },
            { "word": "фарохонӣ", "translation": "гимнастика", "translationEnglish": "gymnastics", "sentenceForeign": "Ман ҳар рӯз гимнастика мекунам.", "sentenceRussian": "Я занимаюсь гимнастикой каждый день." },
            { "word": "самбо", "translation": "самбо", "translationEnglish": "sambo", "sentenceForeign": "Ман самбо машқ мекунам.", "sentenceRussian": "Я занимаюсь самбо." },
            { "word": "карате", "translation": "карате", "translationEnglish": "karate", "sentenceForeign": "Ман карате медонам.", "sentenceRussian": "Я занимаюсь карате." },
            { "word": "аҳд", "translation": "марафон", "translationEnglish": "marathon", "sentenceForeign": "Ман дар марафон иштирок мекунам.", "sentenceRussian": "Я участвую в марафоне." },
            { "word": "сайр", "translation": "прогулка", "translationEnglish": "walk", "sentenceForeign": "Ман ҳар рӯз сайр мекунам.", "sentenceRussian": "Я гуляю каждый день." },
            { "word": "шорт-трек", "translation": "шорт-трек", "translationEnglish": "short track", "sentenceForeign": "Ман дар шорт-трек иштирок мекунам.", "sentenceRussian": "Я участвую в шорт-треке." },
            { "word": "велосипед", "translation": "велосипед", "translationEnglish": "bicycle", "sentenceForeign": "Ман велосипед савор мешавам.", "sentenceRussian": "Я катаюсь на велосипеде." },
            { "word": "сноуборд", "translation": "сноуборд", "translationEnglish": "snowboard", "sentenceForeign": "Ман сноуборд савор мешавам.", "sentenceRussian": "Я катаюсь на сноуборде." },
            { "word": "боуллинг", "translation": "боуллинг", "translationEnglish": "bowling", "sentenceForeign": "Ман дар боуллинг иштирок мекунам.", "sentenceRussian": "Я играю в боулинг." },
            { "word": "ҳафтхандӣ", "translation": "рукопашный бой", "translationEnglish": "hand-to-hand combat", "sentenceForeign": "Ман рукопашный бой машқ мекунам.", "sentenceRussian": "Я занимаюсь рукопашным боем." },
            { "word": "араво", "translation": "гребля", "translationEnglish": "rowing", "sentenceForeign": "Ман гребля машқ мекунам.", "sentenceRussian": "Я занимаюсь греблей." },
            { "word": "таеквондо", "translation": "таеквондо", "translationEnglish": "taekwondo", "sentenceForeign": "Ман таеквондо медонам.", "sentenceRussian": "Я занимаюсь таеквондо." },
            { "word": "триатлон", "translation": "триатлон", "translationEnglish": "triathlon", "sentenceForeign": "Ман дар триатлон иштирок мекунам.", "sentenceRussian": "Я участвую в триатлоне." },
            { "word": "сафари сайёҳӣ", "translation": "поход", "translationEnglish": "hiking", "sentenceForeign": "Ман дар сафар машқ мекунам.", "sentenceRussian": "Я занимаюсь походами." },
            { "word": "сайёҳӣ", "translation": "альпинизм", "translationEnglish": "mountaineering", "sentenceForeign": "Ман дар кӯҳ машқ мекунам.", "sentenceRussian": "Я занимаюсь альпинизмом." }
        ],
        "transport": [
            { "word": "автобус", "translation": "автобус", "translationEnglish": "bus", "sentenceForeign": "Ман бо автобус сафар мекунам.", "sentenceRussian": "Я езжу на автобусе." },
            { "word": "поезд", "translation": "поезд", "translationEnglish": "train", "sentenceForeign": "Ман бо поезд сафар мекунам.", "sentenceRussian": "Я езжу на поезде." },
            { "word": "самолет", "translation": "самолет", "translationEnglish": "plane", "sentenceForeign": "Ман бо самолет парвоз мекунам.", "sentenceRussian": "Я лечу на самолете." },
            { "word": "корабль", "translation": "корабль", "translationEnglish": "ship", "sentenceForeign": "Ман бо корабль сафар мекунам.", "sentenceRussian": "Я плаваю на корабле." },
            { "word": "такси", "translation": "такси", "translationEnglish": "taxi", "sentenceForeign": "Ман бо такси сафар мекунам.", "sentenceRussian": "Я езжу на такси." },
            { "word": "мотоцикл", "translation": "мотоцикл", "translationEnglish": "motorcycle", "sentenceForeign": "Ман бо мотоцикл сафар мекунам.", "sentenceRussian": "Я езжу на мотоцикле." },
            { "word": "велосипед", "translation": "велосипед", "translationEnglish": "bicycle", "sentenceForeign": "Ман бо велосипед сафар мекунам.", "sentenceRussian": "Я езжу на велосипеде." },
            { "word": "грузовик", "translation": "грузовик", "translationEnglish": "truck", "sentenceForeign": "Ман бо грузовик сафар мекунам.", "sentenceRussian": "Я езжу на грузовике." },
            { "word": "электричка", "translation": "электричка", "translationEnglish": "electric train", "sentenceForeign": "Ман бо электричка сафар мекунам.", "sentenceRussian": "Я езжу на электричке." },
            { "word": "трамвай", "translation": "трамвай", "translationEnglish": "tram", "sentenceForeign": "Ман бо трамвай сафар мекунам.", "sentenceRussian": "Я езжу на трамвае." },
            { "word": "метро", "translation": "метро", "translationEnglish": "metro", "sentenceForeign": "Ман бо метро сафар мекунам.", "sentenceRussian": "Я езжу на метро." },
            { "word": "скутер", "translation": "скутер", "translationEnglish": "scooter", "sentenceForeign": "Ман бо скутер сафар мекунам.", "sentenceRussian": "Я езжу на скутере." },
            { "word": "катер", "translation": "катер", "translationEnglish": "boat", "sentenceForeign": "Ман бо катер сафар мекунам.", "sentenceRussian": "Я езжу на катере." },
            { "word": "вагон", "translation": "вагон", "translationEnglish": "wagon", "sentenceForeign": "Ман бо вагон сафар мекунам.", "sentenceRussian": "Я езжу на вагоне." },
            { "word": "ракета", "translation": "ракета", "translationEnglish": "rocket", "sentenceForeign": "Ман бо ракета сафар мекунам.", "sentenceRussian": "Я лечу на ракете." }
        ]
    },
    "uzbek": {
        "emotions": [
            {
                "word": "xursandlik",
                "translation": "радость",
                "translationEnglish": "joy",
                "sentenceForeign": "Uning yuzida xursandlik ko'rinadi.",
                "sentenceRussian": "На его лице видно радость."
            },
            {
                "word": "qayg'u",
                "translation": "печаль",
                "translationEnglish": "sadness",
                "sentenceForeign": "Qayg'u uning yuragida.",
                "sentenceRussian": "Печаль в его сердце."
            },
            {
                "word": "qo'rquv",
                "translation": "страх",
                "translationEnglish": "fear",
                "sentenceForeign": "Men qo'rquvni his qilaman.",
                "sentenceRussian": "Я чувствую страх."
            },
            {
                "word": "g'azab",
                "translation": "гнев",
                "translationEnglish": "anger",
                "sentenceForeign": "U g'azablanib ketdi.",
                "sentenceRussian": "Он разозлился."
            },
            {
                "word": "hayajon",
                "translation": "волнение",
                "translationEnglish": "excitement",
                "sentenceForeign": "Men hayajonlanaman.",
                "sentenceRussian": "Я волнуюсь."
            },
            {
                "word": "xafalik",
                "translation": "огорчение",
                "translationEnglish": "disappointment",
                "sentenceForeign": "Bu xabar uni xafa qildi.",
                "sentenceRussian": "Эта новость его огорчила."
            },
            {
                "word": "achchiq",
                "translation": "ярость",
                "translationEnglish": "rage",
                "sentenceForeign": "U achchiqlanib ketdi.",
                "sentenceRussian": "Он впал в ярость."
            },
            {
                "word": "shodlik",
                "translation": "счастье",
                "translationEnglish": "happiness",
                "sentenceForeign": "Shodlik uni tark etmadi.",
                "sentenceRussian": "Счастье его не покинуло."
            },
            {
                "word": "sevgi",
                "translation": "любовь",
                "translationEnglish": "love",
                "sentenceForeign": "Sevgi hayotimizni bezaydi.",
                "sentenceRussian": "Любовь украшает нашу жизнь."
            },
            {
                "word": "charchoq",
                "translation": "усталость",
                "translationEnglish": "tiredness",
                "sentenceForeign": "Men charchoq his qilyapman.",
                "sentenceRussian": "Я чувствую усталость."
            },
            {
                "word": "faxr",
                "translation": "гордость",
                "translationEnglish": "pride",
                "sentenceForeign": "Uning yuragida faxr bor.",
                "sentenceRussian": "В его сердце есть гордость."
            },
            {
                "word": "umidsizlik",
                "translation": "разочарование",
                "translationEnglish": "disappointment",
                "sentenceForeign": "Umidsizlik unga ta'sir qildi.",
                "sentenceRussian": "Разочарование повлияло на него."
            },
            {
                "word": "umid",
                "translation": "надежда",
                "translationEnglish": "hope",
                "sentenceForeign": "Bizning umidimiz katta.",
                "sentenceRussian": "Наша надежда велика."
            },
            {
                "word": "iroda",
                "translation": "воля",
                "translationEnglish": "will",
                "sentenceForeign": "Uning irodasi kuchli.",
                "sentenceRussian": "Его воля сильна."
            },
            {
                "word": "sabir",
                "translation": "терпение",
                "translationEnglish": "patience",
                "sentenceForeign": "Sabir kaliti muvaffaqiyatdir.",
                "sentenceRussian": "Терпение - ключ к успеху."
            }
        ],
        "objects": [
            {
                "word": "kitob",
                "translation": "книга",
                "translationEnglish": "book",
                "sentenceForeign": "Men yangi kitob sotib oldim.",
                "sentenceRussian": "Я купил новую книгу."
            },
            {
                "word": "mashina",
                "translation": "машина",
                "translationEnglish": "car",
                "sentenceForeign": "Mening mashinam juda tez.",
                "sentenceRussian": "Моя машина очень быстрая."
            },
            {
                "word": "stol",
                "translation": "стол",
                "translationEnglish": "table",
                "sentenceForeign": "Stol katta va qulay.",
                "sentenceRussian": "Стол большой и удобный."
            },
            {
                "word": "stul",
                "translation": "стул",
                "translationEnglish": "chair",
                "sentenceForeign": "Men stulda o'tiraman.",
                "sentenceRussian": "Я сижу на стуле."
            },
            {
                "word": "telefon",
                "translation": "телефон",
                "translationEnglish": "phone",
                "sentenceForeign": "Mening telefonim yangi.",
                "sentenceRussian": "Мой телефон новый."
            },
            {
                "word": "uy",
                "translation": "дом",
                "translationEnglish": "house",
                "sentenceForeign": "Uyimiz katta va zamonaviy.",
                "sentenceRussian": "Наш дом большой и современный."
            },
            {
                "word": "qog'oz",
                "translation": "бумага",
                "translationEnglish": "printer paper",
                "sentenceForeign": "Men qog'oz va ruchka topdim.",
                "sentenceRussian": "Я нашел бумагу и ручку."
            },
            {
                "word": "ruchka",
                "translation": "ручка",
                "translationEnglish": "pen",
                "sentenceForeign": "U yangi ruchka sotib oldi.",
                "sentenceRussian": "Он купил новую ручку."
            },
            {
                "word": "kompyuter",
                "translation": "компьютер",
                "translationEnglish": "computer",
                "sentenceForeign": "Bu mening yangi kompyuterim.",
                "sentenceRussian": "Это мой новый компьютер."
            },
            {
                "word": "soat",
                "translation": "часы",
                "translationEnglish": "watch",
                "sentenceForeign": "Mening soatim to'g'ri yuradi.",
                "sentenceRussian": "Мои часы идут правильно."
            },
            {
                "word": "o'rmon",
                "translation": "лес",
                "translationEnglish": "forest",
                "sentenceForeign": "Biz o'rmonga sayohat qildik.",
                "sentenceRussian": "Мы путешествовали в лес."
            },
            {
                "word": "shahar",
                "translation": "город",
                "translationEnglish": "city",
                "sentenceForeign": "Shahar katta va gavjum.",
                "sentenceRussian": "Город большой и оживленный."
            },
            {
                "word": "quti",
                "translation": "коробка",
                "translationEnglish": "box",
                "sentenceForeign": "Men katta quti topdim.",
                "sentenceRussian": "Я нашел большую коробку."
            },
            {
                "word": "darvoza",
                "translation": "ворота",
                "translationEnglish": "gate",
                "sentenceForeign": "Darvoza ochiq.",
                "sentenceRussian": "Ворота открыты."
            },
            {
                "word": "gul",
                "translation": "цветок",
                "translationEnglish": "flower",
                "sentenceForeign": "Gullar bog'da o'sadi.",
                "sentenceRussian": "Цветы растут в саду."
            }
        ],
        "nature": [
            {
                "word": "suv",
                "translation": "вода",
                "translationEnglish": "water",
                "sentenceForeign": "Suv hayot uchun zarur.",
                "sentenceRussian": "Вода необходима для жизни."
            },
            {
                "word": "gul",
                "translation": "цветок",
                "translationEnglish": "flower",
                "sentenceForeign": "Bu gul chiroyli.",
                "sentenceRussian": "Этот цветок красивый."
            },
            {
                "word": "barg",
                "translation": "лист",
                "translationEnglish": "leaf",
                "sentenceForeign": "Daraxtning bargi yashil.",
                "sentenceRussian": "Лист дерева зеленый."
            },
            {
                "word": "tuproq",
                "translation": "земля",
                "translationEnglish": "soil",
                "sentenceForeign": "Bu tuproq unumdor.",
                "sentenceRussian": "Эта земля плодородна."
            },
            {
                "word": "osmon",
                "translation": "небо",
                "translationEnglish": "sky",
                "sentenceForeign": "Osmon moviy rangda.",
                "sentenceRussian": "Небо голубое."
            },
            {
                "word": "yulduz",
                "translation": "звезда",
                "translationEnglish": "star",
                "sentenceForeign": "Yulduzlar osmonda yaltiraydi.",
                "sentenceRussian": "Звезды светят на небе."
            },
            {
                "word": "oy",
                "translation": "луна",
                "translationEnglish": "moon",
                "sentenceForeign": "Oy osmonda porlaydi.",
                "sentenceRussian": "Луна светит на небе."
            },
            {
                "word": "shamol",
                "translation": "ветер",
                "translationEnglish": "wind",
                "sentenceForeign": "Shamol kuchli esadi.",
                "sentenceRussian": "Ветер дует сильно."
            },
            {
                "word": "yomg'ir",
                "translation": "дождь",
                "translationEnglish": "rain",
                "sentenceForeign": "Yomg'ir yog'moqda.",
                "sentenceRussian": "Идет дождь."
            },
            {
                "word": "qor",
                "translation": "снег",
                "translationEnglish": "snow",
                "sentenceForeign": "Qor yog'moqda.",
                "sentenceRussian": "Идет снег."
            },
            {
                "word": "nur",
                "translation": "свет",
                "translationEnglish": "light",
                "sentenceForeign": "Nur yorqin.",
                "sentenceRussian": "Свет яркий."
            },
            {
                "word": "soya",
                "translation": "тень",
                "translationEnglish": "shade",
                "sentenceForeign": "Daraxtning soyasi katta.",
                "sentenceRussian": "Тень дерева большая."
            },
            {
                "word": "tog'",
                "translation": "гора",
                "translationEnglish": "mountain",
                "sentenceForeign": "Tog'lar baland.",
                "sentenceRussian": "Горы высокие."
            },
            {
                "word": "daryo",
                "translation": "река",
                "translationEnglish": "river",
                "sentenceForeign": "Daryo oqmoqda.",
                "sentenceRussian": "Река течет."
            },
            {
                "word": "bahor",
                "translation": "весна",
                "translationEnglish": "spring",
                "sentenceForeign": "Bahor keldi.",
                "sentenceRussian": "Пришла весна."
            }
        ],
        "technology": [
            {
                "word": "kompyuter",
                "translation": "компьютер",
                "translationEnglish": "computer",
                "sentenceForeign": "Bu mening yangi kompyuterim.",
                "sentenceRussian": "Это мой новый компьютер."
            },
            {
                "word": "telefon",
                "translation": "телефон",
                "translationEnglish": "phone",
                "sentenceForeign": "Mening telefonim yangi.",
                "sentenceRussian": "Мой телефон новый."
            },
            {
                "word": "mashina",
                "translation": "машина",
                "translationEnglish": "car",
                "sentenceForeign": "Mening mashinam juda tez.",
                "sentenceRussian": "Моя машина очень быстрая."
            },
            {
                "word": "printer",
                "translation": "принтер",
                "translationEnglish": "printer",
                "sentenceForeign": "Men yangi printer sotib oldim.",
                "sentenceRussian": "Я купил новый принтер."
            },
            {
                "word": "pleer",
                "translation": "плеер",
                "translationEnglish": "mp3-player",
                "sentenceForeign": "Men pleerni tinglayman.",
                "sentenceRussian": "Я слушаю плеер."
            },
            {
                "word": "televizor",
                "translation": "телевизор",
                "translationEnglish": "TV",
                "sentenceForeign": "Televizor katta va ravshan.",
                "sentenceRussian": "Телевизор большой и яркий."
            },
            {
                "word": "kamera",
                "translation": "камера",
                "translationEnglish": "camera",
                "sentenceForeign": "Kamera sifatli surat oladi.",
                "sentenceRussian": "Камера делает качественные фотографии."
            },
            {
                "word": "lampa",
                "translation": "лампа",
                "translationEnglish": "lamp",
                "sentenceForeign": "Lampa nur sochadi.",
                "sentenceRussian": "Лампа излучает свет."
            },
            {
                "word": "akku",
                "translation": "аккумулятор",
                "translationEnglish": "battery",
                "sentenceForeign": "Akku to'liq quvvatlangan.",
                "sentenceRussian": "Аккумулятор полностью заряжен."
            },
            {
                "word": "radio",
                "translation": "радио",
                "translationEnglish": "radio",
                "sentenceForeign": "Men radio tinglayman.",
                "sentenceRussian": "Я слушаю радио."
            },
            {
                "word": "modem",
                "translation": "модем",
                "translationEnglish": "wi-fi router",
                "sentenceForeign": "Modem internetga ulangan.",
                "sentenceRussian": "Модем подключен к интернету."
            },
            {
                "word": "monitor",
                "translation": "монитор",
                "translationEnglish": "monitor",
                "sentenceForeign": "Monitor katta va yorqin.",
                "sentenceRussian": "Монитор большой и яркий."
            },
            {
                "word": "noutbuk",
                "translation": "ноутбук",
                "translationEnglish": "laptop",
                "sentenceForeign": "Men yangi noutbuk sotib oldim.",
                "sentenceRussian": "Я купил новый ноутбук."
            },
            {
                "word": "proektor",
                "translation": "проектор",
                "translationEnglish": "projector",
                "sentenceForeign": "Proektor katta ekranga surat soladi.",
                "sentenceRussian": "Проектор отображает изображение на большой экран."
            },
            {
                "word": "mikrofon",
                "translation": "микрофон",
                "translationEnglish": "microphone",
                "sentenceForeign": "Mikrofon ovozni baland qiladi.",
                "sentenceRussian": "Микрофон увеличивает громкость голоса."
            }
        ]
    },
    "kyrgyz": {
        "emotions": [
            {
                "word": "кубаныч",
                "translation": "радость",
                "translationEnglish": "joy",
                "sentenceForeign": "Менин кубанычым чексиз.",
                "sentenceRussian": "Моя радость безгранична."
            },
            {
                "word": "кайгы",
                "translation": "печаль",
                "translationEnglish": "sadness",
                "sentenceForeign": "Анын жүрөгүндө кайгы бар.",
                "sentenceRussian": "В его сердце печаль."
            },
            {
                "word": "коркунуч",
                "translation": "страх",
                "translationEnglish": "fear",
                "sentenceForeign": "Мен иттерден корком.",
                "sentenceRussian": "Я боюсь собак."
            },
            {
                "word": "ачуу",
                "translation": "гнев",
                "translationEnglish": "anger",
                "sentenceForeign": "Анын ачуусу катуу келди.",
                "sentenceRussian": "Он сильно разозлился."
            },
            {
                "word": "толкундануу",
                "translation": "волнение",
                "translationEnglish": "excitement",
                "sentenceForeign": "Менин толкундануум чоң.",
                "sentenceRussian": "Мое волнение велико."
            },
            {
                "word": "капалык",
                "translation": "огорчение",
                "translationEnglish": "disappointment",
                "sentenceForeign": "Бул жаңылык мени капа кылды.",
                "sentenceRussian": "Эта новость меня огорчила."
            },
            {
                "word": "каардануу",
                "translation": "ярость",
                "translationEnglish": "rage",
                "sentenceForeign": "Ал каарданды.",
                "sentenceRussian": "Он впал в ярость."
            },
            {
                "word": "бакыт",
                "translation": "счастье",
                "translationEnglish": "happiness",
                "sentenceForeign": "Анын бактысы көздөрүнөн көрүнөт.",
                "sentenceRussian": "Его счастье видно в его глазах."
            },
            {
                "word": "сүйүү",
                "translation": "любовь",
                "translationEnglish": "love",
                "sentenceForeign": "Сүйүү үй-бүлө үчүн маанилүү.",
                "sentenceRussian": "Любовь важна для семьи."
            },
            {
                "word": "чарчоо",
                "translation": "усталость",
                "translationEnglish": "tiredness",
                "sentenceForeign": "Мен чарчадым.",
                "sentenceRussian": "Я устал."
            },
            {
                "word": "горур",
                "translation": "гордость",
                "translationEnglish": "pride",
                "sentenceForeign": "Мен өз жетишкендиктерим менен горурмун.",
                "sentenceRussian": "Я горжусь своими достижениями."
            },
            {
                "word": "үмүт",
                "translation": "надежда",
                "translationEnglish": "hope",
                "sentenceForeign": "Үмүтүм чексиз.",
                "sentenceRussian": "Моя надежда безгранична."
            },
            {
                "word": "эрк",
                "translation": "воля",
                "translationEnglish": "will",
                "sentenceForeign": "Анын эрки күчтүү.",
                "sentenceRussian": "Его воля сильна."
            },
            {
                "word": "сабыр",
                "translation": "терпение",
                "translationEnglish": "patience",
                "sentenceForeign": "Сабыр ийгиликке жетүүнүн ачкычы.",
                "sentenceRussian": "Терпение - ключ к успеху."
            }
        ],
        "objects": [
            {
                "word": "китеп",
                "translation": "книга",
                "translationEnglish": "book",
                "sentenceForeign": "Мен китеп окуп жатам.",
                "sentenceRussian": "Я читаю книгу."
            },
            {
                "word": "машина",
                "translation": "машина",
                "translationEnglish": "car",
                "sentenceForeign": "Менин машинам кызыл.",
                "sentenceRussian": "Моя машина красная."
            },
            {
                "word": "стол",
                "translation": "стол",
                "translationEnglish": "table",
                "sentenceForeign": "Бул стол жыгачтан жасалган.",
                "sentenceRussian": "Этот стол сделан из дерева."
            },
            {
                "word": "орундук",
                "translation": "стул",
                "translationEnglish": "chair",
                "sentenceForeign": "Мен орундукта отурам.",
                "sentenceRussian": "Я сижу на стуле."
            },
            {
                "word": "телефон",
                "translation": "телефон",
                "translationEnglish": "telephone",
                "sentenceForeign": "Мен телефонду колдоном.",
                "sentenceRussian": "Я использую телефон."
            },
            {
                "word": "үй",
                "translation": "дом",
                "translationEnglish": "house",
                "sentenceForeign": "Биздин үй чоң жана кооз.",
                "sentenceRussian": "Наш дом большой и красивый."
            },
            {
                "word": "кагаз",
                "translation": "бумага",
                "translationEnglish": "printer paper",
                "sentenceForeign": "Мен кагаз менен калемим бар.",
                "sentenceRussian": "У меня есть бумага и ручка."
            },
            {
                "word": "калем",
                "translation": "ручка",
                "translationEnglish": "pen",
                "sentenceForeign": "Мен калем менен жазып жатам.",
                "sentenceRussian": "Я пишу ручкой."
            },
            {
                "word": "компьютер",
                "translation": "компьютер",
                "translationEnglish": "computer",
                "sentenceForeign": "Бул менин жаңы компьютерин.",
                "sentenceRussian": "Это мой новый компьютер."
            },
            {
                "word": "токой",
                "translation": "лес",
                "translationEnglish": "forest",
                "sentenceForeign": "Биз токойго барабыз.",
                "sentenceRussian": "Мы идем в лес."
            },
            {
                "word": "шаар",
                "translation": "город",
                "translationEnglish": "city",
                "sentenceForeign": "Шаар жакын жерде.",
                "sentenceRussian": "Город поблизости."
            },
            {
                "word": "куту",
                "translation": "коробка",
                "translationEnglish": "box",
                "sentenceForeign": "Мен кутуну таптым.",
                "sentenceRussian": "Я нашел коробку."
            },
            {
                "word": "дарбаза",
                "translation": "ворота",
                "translationEnglish": "gate",
                "sentenceForeign": "Дарбаза ачык.",
                "sentenceRussian": "Ворота открыты."
            },
            {
                "word": "гүл",
                "translation": "цветок",
                "translationEnglish": "flower",
                "sentenceForeign": "Гүлдөр бакта.",
                "sentenceRussian": "Цветы в саду."
            }
        ],
        "nature": [
            {
                "word": "суу",
                "translation": "вода",
                "translationEnglish": "water",
                "sentenceForeign": "Суу жашоо үчүн маанилүү.",
                "sentenceRussian": "Вода важна для жизни."
            },
            {
                "word": "гүл",
                "translation": "цветок",
                "translationEnglish": "flower",
                "sentenceForeign": "Бул гүл кооз.",
                "sentenceRussian": "Этот цветок красивый."
            },
            {
                "word": "жалбырак",
                "translation": "лист",
                "translationEnglish": "leaf",
                "sentenceForeign": "Дарактын жалбырагы жашыл.",
                "sentenceRussian": "Лист дерева зеленый."
            },
            {
                "word": "топурак",
                "translation": "земля",
                "translationEnglish": "soil",
                "sentenceForeign": "Бул топурак түшүмдүү.",
                "sentenceRussian": "Эта земля плодородна."
            },
            {
                "word": "асман",
                "translation": "небо",
                "translationEnglish": "sky",
                "sentenceForeign": "Асман көк.",
                "sentenceRussian": "Небо голубое."
            },
            {
                "word": "жылдыз",
                "translation": "звезда",
                "translationEnglish": "star",
                "sentenceForeign": "Жылдыздар асманда жаркырайт.",
                "sentenceRussian": "Звезды светят на небе."
            },
            {
                "word": "ай",
                "translation": "луна",
                "translationEnglish": "moon",
                "sentenceForeign": "Ай асманда жаркырайт.",
                "sentenceRussian": "Луна светит на небе."
            },
            {
                "word": "шамал",
                "translation": "ветер",
                "translationEnglish": "wind",
                "sentenceForeign": "Шамал катуу согуп жатат.",
                "sentenceRussian": "Ветер дует сильно."
            },
            {
                "word": "жамгыр",
                "translation": "дождь",
                "translationEnglish": "rain",
                "sentenceForeign": "Жамгыр жаап жатат.",
                "sentenceRussian": "Идет дождь."
            },
            {
                "word": "кар",
                "translation": "снег",
                "translationEnglish": "snow",
                "sentenceForeign": "Кар жаап жатат.",
                "sentenceRussian": "Идет снег."
            },
            {
                "word": "нур",
                "translation": "свет",
                "translationEnglish": "light",
                "sentenceForeign": "Нур жаркырайт.",
                "sentenceRussian": "Свет яркий."
            },
            {
                "word": "көчкү",
                "translation": "тень",
                "translationEnglish": "shade",
                "sentenceForeign": "Дарактын көчкүсү чоң.",
                "sentenceRussian": "Тень дерева большая."
            },
            {
                "word": "тоо",
                "translation": "гора",
                "translationEnglish": "mountain",
                "sentenceForeign": "Тоолор бийик.",
                "sentenceRussian": "Горы высокие."
            },
            {
                "word": "өзөн",
                "translation": "река",
                "translationEnglish": "river",
                "sentenceForeign": "Өзөн суусу агып жатат.",
                "sentenceRussian": "Река течет."
            },
            {
                "word": "жаз",
                "translation": "весна",
                "translationEnglish": "spring",
                "sentenceForeign": "Жаз келди.",
                "sentenceRussian": "Пришла весна."
            }
        ],
        "technology": [
            {
                "word": "компьютер",
                "translation": "компьютер",
                "translationEnglish": "computer",
                "sentenceForeign": "Бул менин жаңы компьютерин.",
                "sentenceRussian": "Это мой новый компьютер."
            },
            {
                "word": "телефон",
                "translation": "телефон",
                "translationEnglish": "phone",
                "sentenceForeign": "Менин телефонум жаңы.",
                "sentenceRussian": "Мой телефон новый."
            },
            {
                "word": "машина",
                "translation": "машина",
                "translationEnglish": "car",
                "sentenceForeign": "Менин машинам кызыл.",
                "sentenceRussian": "Моя машина красная."
            },
            {
                "word": "принтер",
                "translation": "принтер",
                "translationEnglish": "printer",
                "sentenceForeign": "Мен жаңы принтер сатып алдым.",
                "sentenceRussian": "Я купил новый принтер."
            },
            {
                "word": "плеер",
                "translation": "плеер",
                "translationEnglish": "mp3-player",
                "sentenceForeign": "Мен плеерди угам.",
                "sentenceRussian": "Я слушаю плеер."
            },
            {
                "word": "телевизор",
                "translation": "телевизор",
                "translationEnglish": "TV",
                "sentenceForeign": "Телевизор чоң жана жаркыраган.",
                "sentenceRussian": "Телевизор большой и яркий."
            },
            {
                "word": "камера",
                "translation": "камера",
                "translationEnglish": "camera",
                "sentenceForeign": "Камера сапаттуу сүрөт тартат.",
                "sentenceRussian": "Камера делает качественные фотографии."
            },
            {
                "word": "лампа",
                "translation": "лампа",
                "translationEnglish": "lamp",
                "sentenceForeign": "Лампа жарык берет.",
                "sentenceRussian": "Лампа излучает свет."
            },
            {
                "word": "аккумулятор",
                "translation": "аккумулятор",
                "translationEnglish": "battery",
                "sentenceForeign": "Аккумулятор толук заряддалган.",
                "sentenceRussian": "Аккумулятор полностью заряжен."
            },
            {
                "word": "радио",
                "translation": "радио",
                "translationEnglish": "radio",
                "sentenceForeign": "Мен радио угам.",
                "sentenceRussian": "Я слушаю радио."
            },
            {
                "word": "модем",
                "translation": "модем",
                "translationEnglish": "wifi-router",
                "sentenceForeign": "Модем интернетке туташкан.",
                "sentenceRussian": "Модем подключен к интернету."
            },
            {
                "word": "монитор",
                "translation": "монитор",
                "translationEnglish": "monitor",
                "sentenceForeign": "Монитор чоң жана жарык.",
                "sentenceRussian": "Монитор большой и яркий."
            },
            {
                "word": "ноутбук",
                "translation": "ноутбук",
                "translationEnglish": "laptop",
                "sentenceForeign": "Мен жаңы ноутбук сатып алдым.",
                "sentenceRussian": "Я купил новый ноутбук."
            },
            {
                "word": "проектор",
                "translation": "проектор",
                "translationEnglish": "projector",
                "sentenceForeign": "Проектор чоң экранга сүрөт берет.",
                "sentenceRussian": "Проектор отображает изображение на большой экран."
            },
            {
                "word": "микрофон",
                "translation": "микрофон",
                "translationEnglish": "microphone",
                "sentenceForeign": "Микрофон үндү күчөтөт.",
                "sentenceRussian": "Микрофон увеличивает громкость голоса."
            }
        ]
    },
    "kazakh": {
        "emotions": [
            {
                "word": "қуаныш",
                "translation": "радость",
                "translationEnglish": "joy",
                "sentenceForeign": "Мен қуаныштымын.",
                "sentenceRussian": "Я рад."
            },
            {
                "word": "қайғы",
                "translation": "печаль",
                "translationEnglish": "sadness",
                "sentenceForeign": "Менің жүрегімде қайғы бар.",
                "sentenceRussian": "В моем сердце печаль."
            },
            {
                "word": "қорқыныш",
                "translation": "страх",
                "translationEnglish": "fear",
                "sentenceForeign": "Мен иттерден қорқамын.",
                "sentenceRussian": "Я боюсь собак."
            },
            {
                "word": "ашу",
                "translation": "гнев",
                "translationEnglish": "anger",
                "sentenceForeign": "Ол қатты ашуланды.",
                "sentenceRussian": "Он сильно разозлился."
            },
            {
                "word": "толқу",
                "translation": "волнение",
                "translationEnglish": "excitement",
                "sentenceForeign": "Менің толқуым үлкен.",
                "sentenceRussian": "Мое волнение велико."
            },
            {
                "word": "өкініш",
                "translation": "огорчение",
                "translationEnglish": "disappointment",
                "sentenceForeign": "Бұл жаңалық мені өкіндірді.",
                "sentenceRussian": "Эта новость меня огорчила."
            },
            {
                "word": "қырсығу",
                "translation": "ярость",
                "translationEnglish": "rage",
                "sentenceForeign": "Ол қырсықты.",
                "sentenceRussian": "Он впал в ярость."
            },
            {
                "word": "бақыт",
                "translation": "счастье",
                "translationEnglish": "happiness",
                "sentenceForeign": "Оның бақытын көздерінен көруге болады.",
                "sentenceRussian": "Его счастье видно в его глазах."
            },
            {
                "word": "сүйіспеншілік",
                "translation": "любовь",
                "translationEnglish": "love",
                "sentenceForeign": "Сүйіспеншілік отбасы үшін маңызды.",
                "sentenceRussian": "Любовь важна для семьи."
            },
            {
                "word": "шаршау",
                "translation": "усталость",
                "translationEnglish": "tiredness",
                "sentenceForeign": "Мен шаршадым.",
                "sentenceRussian": "Я устал."
            },
            {
                "word": "мақтаныш",
                "translation": "гордость",
                "translationEnglish": "pride",
                "sentenceForeign": "Мен жетістіктеріме мақтанамын.",
                "sentenceRussian": "Я горжусь своими достижениями."
            },
            {
                "word": "үміт",
                "translation": "надежда",
                "translationEnglish": "hope",
                "sentenceForeign": "Үмітім шексіз.",
                "sentenceRussian": "Моя надежда безгранична."
            },
            {
                "word": "ерік",
                "translation": "воля",
                "translationEnglish": "will",
                "sentenceForeign": "Оның еркі мықты.",
                "sentenceRussian": "Его воля сильна."
            },
            {
                "word": "сабыр",
                "translation": "терпение",
                "translationEnglish": "patience",
                "sentenceForeign": "Сабырлылық - табыстың кілті.",
                "sentenceRussian": "Терпение - ключ к успеху."
            }
        ],
        "objects": [
            {
                "word": "кітап",
                "translation": "книга",
                "translationEnglish": "book",
                "sentenceForeign": "Мен кітап оқып жатырмын.",
                "sentenceRussian": "Я читаю книгу."
            },
            {
                "word": "машина",
                "translation": "машина",
                "translationEnglish": "car",
                "sentenceForeign": "Менің машинам қызыл.",
                "sentenceRussian": "Моя машина красная."
            },
            {
                "word": "үстел",
                "translation": "стол",
                "translationEnglish": "table",
                "sentenceForeign": "Бұл үстел ағаштан жасалған.",
                "sentenceRussian": "Этот стол сделан из дерева."
            },
            {
                "word": "орындық",
                "translation": "стул",
                "translationEnglish": "chair",
                "sentenceForeign": "Мен орындықта отырамын.",
                "sentenceRussian": "Я сижу на стуле."
            },
            {
                "word": "телефон",
                "translation": "телефон",
                "translationEnglish": "telephone",
                "sentenceForeign": "Мен телефонды қолданамын.",
                "sentenceRussian": "Я использую телефон."
            },
            {
                "word": "үй",
                "translation": "дом",
                "translationEnglish": "house",
                "sentenceForeign": "Біздің үй үлкен және әдемі.",
                "sentenceRussian": "Наш дом большой и красивый."
            },
            {
                "word": "қағаз",
                "translation": "бумага",
                "translationEnglish": "printer paper",
                "sentenceForeign": "Менің қағазым мен қаламым бар.",
                "sentenceRussian": "У меня есть бумага и ручка."
            },
            {
                "word": "қалам",
                "translation": "ручка",
                "translationEnglish": "pen",
                "sentenceForeign": "Мен қаламмен жазып жатырмын.",
                "sentenceRussian": "Я пишу ручкой."
            },
            {
                "word": "компьютер",
                "translation": "компьютер",
                "translationEnglish": "computer",
                "sentenceForeign": "Бұл менің жаңа компьютері.",
                "sentenceRussian": "Это мой новый компьютер."
            },
            {
                "word": "орман",
                "translation": "лес",
                "translationEnglish": "forest",
                "sentenceForeign": "Біз орманға барамыз.",
                "sentenceRussian": "Мы идем в лес."
            },
            {
                "word": "қала",
                "translation": "город",
                "translationEnglish": "city",
                "sentenceForeign": "Қала жақын жерде.",
                "sentenceRussian": "Город поблизости."
            },
            {
                "word": "қорап",
                "translation": "коробка",
                "translationEnglish": "box",
                "sentenceForeign": "Мен қорапты таптым.",
                "sentenceRussian": "Я нашел коробку."
            },
            {
                "word": "қақпа",
                "translation": "ворота",
                "translationEnglish": "gate",
                "sentenceForeign": "Қақпа ашық.",
                "sentenceRussian": "Ворота открыты."
            },
            {
                "word": "гүл",
                "translation": "цветок",
                "translationEnglish": "flower",
                "sentenceForeign": "Гүлдер бақта.",
                "sentenceRussian": "Цветы в саду."
            }
        ],
        "nature": [
            {
                "word": "су",
                "translation": "вода",
                "translationEnglish": "water",
                "sentenceForeign": "Су өмір үшін маңызды.",
                "sentenceRussian": "Вода важна для жизни."
            },
            {
                "word": "гүл",
                "translation": "цветок",
                "translationEnglish": "flower",
                "sentenceForeign": "Бұл гүл әдемі.",
                "sentenceRussian": "Этот цветок красивый."
            },
            {
                "word": "жапырақ",
                "translation": "лист",
                "translationEnglish": "leaf",
                "sentenceForeign": "Ағаштың жапырағы жасыл.",
                "sentenceRussian": "Лист дерева зеленый."
            },
            {
                "word": "топырақ",
                "translation": "земля",
                "translationEnglish": "soil",
                "sentenceForeign": "Бұл топырақ құнарлы.",
                "sentenceRussian": "Эта земля плодородна."
            },
            {
                "word": "аспан",
                "translation": "небо",
                "translationEnglish": "sky",
                "sentenceForeign": "Аспан көк.",
                "sentenceRussian": "Небо голубое."
            },
            {
                "word": "жұлдыз",
                "translation": "звезда",
                "translationEnglish": "star",
                "sentenceForeign": "Жұлдыздар аспанда жарқырайды.",
                "sentenceRussian": "Звезды светят на небе."
            },
            {
                "word": "ай",
                "translation": "луна",
                "translationEnglish": "moon",
                "sentenceForeign": "Ай аспанда жарқырайды.",
                "sentenceRussian": "Луна светит на небе."
            },
            {
                "word": "жел",
                "translation": "ветер",
                "translationEnglish": "wind",
                "sentenceForeign": "Жел қатты соғып тұр.",
                "sentenceRussian": "Ветер дует сильно."
            },
            {
                "word": "жаңбыр",
                "translation": "дождь",
                "translationEnglish": "rain",
                "sentenceForeign": "Жаңбыр жауып тұр.",
                "sentenceRussian": "Идет дождь."
            },
            {
                "word": "қар",
                "translation": "снег",
                "translationEnglish": "snow",
                "sentenceForeign": "Қар жауып тұр.",
                "sentenceRussian": "Идет снег."
            },
            {
                "word": "нұр",
                "translation": "свет",
                "translationEnglish": "light",
                "sentenceForeign": "Нұр жарқырайды.",
                "sentenceRussian": "Свет яркий."
            },
            {
                "word": "көлеңке",
                "translation": "тень",
                "translationEnglish": "shade",
                "sentenceForeign": "Ағаштың көлеңкесі үлкен.",
                "sentenceRussian": "Тень дерева большая."
            },
            {
                "word": "тау",
                "translation": "гора",
                "translationEnglish": "mountain",
                "sentenceForeign": "Таулар биік.",
                "sentenceRussian": "Горы высокие."
            },
            {
                "word": "өзен",
                "translation": "река",
                "translationEnglish": "river",
                "sentenceForeign": "Өзен ағып жатыр.",
                "sentenceRussian": "Река течет."
            },
            {
                "word": "көктем",
                "translation": "весна",
                "translationEnglish": "spring",
                "sentenceForeign": "Көктем келді.",
                "sentenceRussian": "Пришла весна."
            }
        ],
        "technology": [
            {
                "word": "компьютер",
                "translation": "компьютер",
                "translationEnglish": "computer",
                "sentenceForeign": "Бұл менің жаңа компьютері.",
                "sentenceRussian": "Это мой новый компьютер."
            },
            {
                "word": "телефон",
                "translation": "телефон",
                "translationEnglish": "phone",
                "sentenceForeign": "Менің телефоным жаңа.",
                "sentenceRussian": "Мой телефон новый."
            },
            {
                "word": "машина",
                "translation": "машина",
                "translationEnglish": "car",
                "sentenceForeign": "Менің машинам қызыл.",
                "sentenceRussian": "Моя машина красная."
            },
            {
                "word": "принтер",
                "translation": "принтер",
                "translationEnglish": "printer",
                "sentenceForeign": "Мен жаңа принтер сатып алдым.",
                "sentenceRussian": "Я купил новый принтер."
            },
            {
                "word": "плеер",
                "translation": "плеер",
                "translationEnglish": "mp3-player",
                "sentenceForeign": "Мен плеерді тыңдаймын.",
                "sentenceRussian": "Я слушаю плеер."
            },
            {
                "word": "теледидар",
                "translation": "телевизор",
                "translationEnglish": "TV",
                "sentenceForeign": "Теледидар үлкен және жарық.",
                "sentenceRussian": "Телевизор большой и яркий."
            },
            {
                "word": "камера",
                "translation": "камера",
                "translationEnglish": "camera",
                "sentenceForeign": "Камера сапалы сурет түсіреді.",
                "sentenceRussian": "Камера делает качественные фотографии."
            },
            {
                "word": "шам",
                "translation": "лампа",
                "translationEnglish": "lamp",
                "sentenceForeign": "Шам жарық береді.",
                "sentenceRussian": "Лампа излучает свет."
            },
            {
                "word": "аккумулятор",
                "translation": "аккумулятор",
                "translationEnglish": "battery",
                "sentenceForeign": "Аккумулятор толық зарядталған.",
                "sentenceRussian": "Аккумулятор полностью заряжен."
            },
            {
                "word": "радио",
                "translation": "радио",
                "translationEnglish": "radio",
                "sentenceForeign": "Мен радио тыңдаймын.",
                "sentenceRussian": "Я слушаю радио."
            },
            {
                "word": "модем",
                "translation": "модем",
                "translationEnglish": "wifi-router",
                "sentenceForeign": "Модем интернетке қосылған.",
                "sentenceRussian": "Модем подключен к интернету."
            },
            {
                "word": "монитор",
                "translation": "монитор",
                "translationEnglish": "monitor",
                "sentenceForeign": "Монитор үлкен және жарық.",
                "sentenceRussian": "Монитор большой и яркий."
            },
            {
                "word": "ноутбук",
                "translation": "ноутбук",
                "translationEnglish": "laptop",
                "sentenceForeign": "Мен жаңа ноутбук сатып алдым.",
                "sentenceRussian": "Я купил новый ноутбук."
            },
            {
                "word": "проектор",
                "translation": "проектор",
                "translationEnglish": "projector",
                "sentenceForeign": "Проектор үлкен экранға сурет түсіреді.",
                "sentenceRussian": "Проектор отображает изображение на большой экран."
            },
            {
                "word": "микрофон",
                "translation": "микрофон",
                "translationEnglish": "microphone",
                "sentenceForeign": "Микрофон дыбысты күшейтеді.",
                "sentenceRussian": "Микрофон увеличивает громкость голоса."
            }
        ]
    }
};
