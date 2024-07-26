const words = {
    "emotions": [
        {
            "word": "joy",
            "translations": {
                "tajik": "хурсандӣ",
                "russian": "радость",
                "uzbek": "хурсандчилик",
                "kazakh": "қуаныш",
                "kyrgyz": "кубаныч"
            },
            "sentences": {
                "tajik": "Ман аз ғалабаи худ хурсандӣ мекунам.",
                "russian": "Я радуюсь своей победе.",
                "uzbek": "Мен ғалабамдан хурсандман.",
                "kazakh": "Мен жеңісіме қуаныштымын.",
                "kyrgyz": "Мен жеңишиме кубанычтамын."
            }
        },
        {
            "word": "sadness",
            "translations": {
                "tajik": "ғам",
                "russian": "печаль",
                "uzbek": "қайғу",
                "kazakh": "қайғы",
                "kyrgyz": "кайгы"
            },
            "sentences": {
                "tajik": "Ғам дар дили ман ҷойгир аст.",
                "russian": "Печаль в моем сердце.",
                "uzbek": "Қайғу қалбимда жойлашган.",
                "kazakh": "Қайғы жүрегімде орналасқан.",
                "kyrgyz": "Кайгы жүрөгүмдө жайгашкан."
            }
        },
        {
            "word": "fear",
            "translations": {
                "tajik": "тарс",
                "russian": "страх",
                "uzbek": "қўрқув",
                "kazakh": "қорқыныш",
                "kyrgyz": "коркунуч"
            },
            "sentences": {
                "tajik": "Ман аз торикӣ тарсидам.",
                "russian": "Я боюсь темноты.",
                "uzbek": "Мен қоронғудан қўрқаман.",
                "kazakh": "Мен қараңғылықтан қорқамын.",
                "kyrgyz": "Мен караңгылыктан корком."
            }
        },
        {
            "word": "anger",
            "translations": {
                "tajik": "ғазаб",
                "russian": "гнев",
                "uzbek": "ғазаб",
                "kazakh": "ашу",
                "kyrgyz": "ачуу"
            },
            "sentences": {
                "tajik": "Ман аз рафтори ӯ ғазабнокам.",
                "russian": "Я злюсь на его поведение.",
                "uzbek": "Мен унинг ҳаракатларидан ғазабландим.",
                "kazakh": "Мен оның әрекеттеріне ашуланамын.",
                "kyrgyz": "Мен анын жүрүм-турумуна ачууланам."
            }
        },
        {
            "word": "love",
            "translations": {
                "tajik": "ишқ",
                "russian": "любовь",
                "uzbek": "муҳаббат",
                "kazakh": "махаббат",
                "kyrgyz": "сүйүү"
            },
            "sentences": {
                "tajik": "Ишқ оташи дил аст.",
                "russian": "Любовь - это огонь в сердце.",
                "uzbek": "Муҳаббат дилнинг олови.",
                "kazakh": "Махаббат - жүректегі от.",
                "kyrgyz": "Сүйүү - бул жүрөктөгү от."
            }
        },
        {
            "word": "surprise",
            "translations": {
                "tajik": "ҳайрат",
                "russian": "удивление",
                "uzbek": "ҳайрат",
                "kazakh": "таң қалу",
                "kyrgyz": "таң калуу"
            },
            "sentences": {
                "tajik": "Ман аз ин хабар ҳайратам.",
                "russian": "Я удивлен этой новостью.",
                "uzbek": "Мен бу хабардан ҳайратга тушдим.",
                "kazakh": "Мен бұл жаңалыққа таң қалдым.",
                "kyrgyz": "Мен бул кабарга таң калдым."
            }
        },
        {
            "word": "disgust",
            "translations": {
                "tajik": "нобоварӣ",
                "russian": "отвращение",
                "uzbek": "жирканиш",
                "kazakh": "жиіркену",
                "kyrgyz": "жийиркенүү"
            },
            "sentences": {
                "tajik": "Ин ҳолат маро нобоварӣ медиҳад.",
                "russian": "Эта ситуация вызывает у меня отвращение.",
                "uzbek": "Бу ҳолат мени жиркантирмоқда.",
                "kazakh": "Бұл жағдай мені жиіркендіреді.",
                "kyrgyz": "Бул абал мени жийиркендирет."
            }
        },
        {
            "word": "happiness",
            "translations": {
                "tajik": "хушбахтӣ",
                "russian": "счастье",
                "uzbek": "баҳт",
                "kazakh": "бақыт",
                "kyrgyz": "бакыт"
            },
            "sentences": {
                "tajik": "Ман дар ин лаҳза хушбахтам.",
                "russian": "Я счастлив в этот момент.",
                "uzbek": "Мен бу лаҳзада бахтлиман.",
                "kazakh": "Мен осы сәтте бақыттымын.",
                "kyrgyz": "Мен бул учурда бактылуумун."
            }
        },
        {
            "word": "jealousy",
            "translations": {
                "tajik": "ҳасуд",
                "russian": "ревность",
                "uzbek": "ҳасад",
                "kazakh": "қызғаныш",
                "kyrgyz": "кызганыч"
            },
            "sentences": {
                "tajik": "Ман аз муваффақияти ӯ ҳасуд мебарам.",
                "russian": "Я ревную к его успеху.",
                "uzbek": "Мен унинг ютуқларидан ҳасад қиламан.",
                "kazakh": "Мен оның жетістігіне қызғанамын.",
                "kyrgyz": "Мен анын ийгилигине кызганам."
            }
        },
        {
            "word": "relief",
            "translations": {
                "tajik": "оромиш",
                "russian": "облегчение",
                "uzbek": "ёрдам",
                "kazakh": "жеңілдік",
                "kyrgyz": "жөнөкөй"
            },
            "sentences": {
                "tajik": "Ин хабар ба ман оромиш дод.",
                "russian": "Эта новость принесла мне облегчение.",
                "uzbek": "Бу хабар менга ёрдам берди.",
                "kazakh": "Бұл жаңалық маған жеңілдік әкелді.",
                "kyrgyz": "Бул кабар мага жөнөкөй болду."
            }
        },
        {
            "word": "pride",
            "translations": {
                "tajik": "ифтихор",
                "russian": "гордость",
                "uzbek": "фахр",
                "kazakh": "мақтаныш",
                "kyrgyz": "мактануу"
            },
            "sentences": {
                "tajik": "Ман аз дастовардҳои худ ифтихор мекунам.",
                "russian": "Я горжусь своими достижениями.",
                "uzbek": "Мен ўз ютуқларимдан фахрланаман.",
                "kazakh": "Мен өз жетістіктеріммен мақтанамын.",
                "kyrgyz": "Мен өзүмдүн жетишкендиктериме мактанам."
            }
        },
        {
            "word": "shame",
            "translations": {
                "tajik": "шарм",
                "russian": "стыд",
                "uzbek": "уйят",
                "kazakh": "ұят",
                "kyrgyz": "уят"
            },
            "sentences": {
                "tajik": "Аз кирдораш шарм медошт.",
                "russian": "Ему было стыдно за свои поступки.",
                "uzbek": "У ўз ҳаракатларидан уйялди.",
                "kazakh": "Ол өз әрекеттеріне ұялатын.",
                "kyrgyz": "Ал өзүнүн жүрүм-турумуна уялды."
            }
        },
        {
            "word": "calm",
            "translations": {
                "tajik": "ором",
                "russian": "спокойствие",
                "uzbek": "тинчлик",
                "kazakh": "тыныштық",
                "kyrgyz": "тынчтык"
            },
            "sentences": {
                "tajik": "Ман ба ором эҳтиёҷ дорам.",
                "russian": "Мне нужно спокойствие.",
                "uzbek": "Менга тинчлик керак.",
                "kazakh": "Маған тыныштық керек.",
                "kyrgyz": "Мага тынчтык керек."
            }
        },
        {
            "word": "trust",
            "translations": {
                "tajik": "эътимод",
                "russian": "доверие",
                "uzbek": "ишонч",
                "kazakh": "сенім",
                "kyrgyz": "ишеним"
            },
            "sentences": {
                "tajik": "Ман ба ту эътимод дорам.",
                "russian": "Я тебе доверяю.",
                "uzbek": "Мен сизга ишонаман.",
                "kazakh": "Мен саған сенемін.",
                "kyrgyz": "Мен сага ишенем."
            }
        },
        {
            "word": "disappointment",
            "translations": {
                "tajik": "ноумедӣ",
                "russian": "разочарование",
                "uzbek": "ҳафсала",
                "kazakh": "ренжу",
                "kyrgyz": "көңүл калуу"
            },
            "sentences": {
                "tajik": "Хабари нохуш маро ноумед кард.",
                "russian": "Плохие новости меня разочаровали.",
                "uzbek": "Ёмон хабар мени ҳафсала қилди.",
                "kazakh": "Жаман жаңалықтар мені ренжітті.",
                "kyrgyz": "Жаман кабарлар мени көңүлүмдөн калтырды."
            }
        }
    ],
    "animals": [
        {
            "word": "cat",
            "translations": {
                "tajik": "гурба",
                "russian": "кошка",
                "uzbek": "мушук",
                "kazakh": "мысық",
                "kyrgyz": "мышык"
            },
            "sentences": {
                "tajik": "Гурба болои диван нишастааст.",
                "russian": "Кошка сидит на диване.",
                "uzbek": "Мушук диван устида ўтирибди.",
                "kazakh": "Мысық диван үстінде отыр.",
                "kyrgyz": "Мышык диван үстүндө отурат."
            }
        },
        {
            "word": "dog",
            "translations": {
                "tajik": "саг",
                "russian": "собака",
                "uzbek": "ит",
                "kazakh": "ит",
                "kyrgyz": "ит"
            },
            "sentences": {
                "tajik": "Саг дар кӯча медавад.",
                "russian": "Собака бегает по улице.",
                "uzbek": "Ит кўчада югуради.",
                "kazakh": "Ит көшеде жүгіріп жүр.",
                "kyrgyz": "Ит көчөдө чуркап жүрөт."
            }
        },
        {
            "word": "bird",
            "translations": {
                "tajik": "парранда",
                "russian": "птица",
                "uzbek": "қуш",
                "kazakh": "құс",
                "kyrgyz": "канаттуу"
            },
            "sentences": {
                "tajik": "Парранда дар осмон парвоз мекунад.",
                "russian": "Птица летает в небе.",
                "uzbek": "Қуш осмонда учади.",
                "kazakh": "Құс аспанда ұшады.",
                "kyrgyz": "Канаттуу асманда учат."
            }
        },
        {
            "word": "fish",
            "translations": {
                "tajik": "моҳӣ",
                "russian": "рыба",
                "uzbek": "балиқ",
                "kazakh": "балық",
                "kyrgyz": "балык"
            },
            "sentences": {
                "tajik": "Моҳӣ дар об шино мекунад.",
                "russian": "Рыба плавает в воде.",
                "uzbek": "Балиқ сувда сузади.",
                "kazakh": "Балық суда жүзеді.",
                "kyrgyz": "Балык сууда сүзөт."
            }
        },
        {
            "word": "bear",
            "translations": {
                "tajik": "хирс",
                "russian": "медведь",
                "uzbek": "айиқ",
                "kazakh": "аю",
                "kyrgyz": "аю"
            },
            "sentences": {
                "tajik": "Хирс дар ҷангал зиндаги мекунад.",
                "russian": "Медведь живет в лесу.",
                "uzbek": "Айиқ ўрмонда яшайди.",
                "kazakh": "Аю орманда өмір сүреді.",
                "kyrgyz": "Аю токойдо жашайт."
            }
        },
        {
            "word": "camel",
            "translations": {
                "tajik": "шутур",
                "russian": "верблюд",
                "uzbek": "туя",
                "kazakh": "түйе",
                "kyrgyz": "төө"
            },
            "sentences": {
                "tajik": "Шутур дар биёбон аст.",
                "russian": "Верблюд находится в пустыне.",
                "uzbek": "Туя чўлда.",
                "kazakh": "Түйе шөлде.",
                "kyrgyz": "Төө чөлдө."
            }
        },
        {
            "word": "rabbit",
            "translations": {
                "tajik": "харгӯш",
                "russian": "кролик",
                "uzbek": "қўй",
                "kazakh": "қоян",
                "kyrgyz": "коён"
            },
            "sentences": {
                "tajik": "Харгӯш дар алаф хӯрок мехӯрад.",
                "russian": "Кролик ест траву.",
                "uzbek": "Қўй ўт еяпти.",
                "kazakh": "Қоян шөп жейді.",
                "kyrgyz": "Коён чөп жейт."
            }
        },
        {
            "word": "sheep",
            "translations": {
                "tajik": "гусфанд",
                "russian": "овца",
                "uzbek": "қўй",
                "kazakh": "қой",
                "kyrgyz": "кой"
            },
            "sentences": {
                "tajik": "Гусфанд дар чарогоҳ аст.",
                "russian": "Овца на пастбище.",
                "uzbek": "Қўй мўлжинда.",
                "kazakh": "Қой жайылымда.",
                "kyrgyz": "Кой жайытта."
            }
        },
        {
            "word": "bee",
            "translations": {
                "tajik": "асал",
                "russian": "пчела",
                "uzbek": "асал",
                "kazakh": "ара",
                "kyrgyz": "ара"
            },
            "sentences": {
                "tajik": "Асал гулро ҷамъ мекунад.",
                "russian": "Пчела собирает нектар с цветов.",
                "uzbek": "Асал гулларни йиғмоқда.",
                "kazakh": "Ара гүлдерді жинайды.",
                "kyrgyz": "Ара гүлдөрдү чогултат."
            }
        },
        {
            "word": "mouse",
            "translations": {
                "tajik": "муш",
                "russian": "мышь",
                "uzbek": "сичқон",
                "kazakh": "тышқан",
                "kyrgyz": "чычкан"
            },
            "sentences": {
                "tajik": "Муш дар хонаи мо аст.",
                "russian": "Мышь в нашем доме.",
                "uzbek": "Сичқон уйимизда.",
                "kazakh": "Тышқан біздің үйде.",
                "kyrgyz": "Чычкан биздин үйдө."
            }
        },
        {
            "word": "cow",
            "translations": {
                "tajik": "гав",
                "russian": "корова",
                "uzbek": "сигир",
                "kazakh": "сиыр",
                "kyrgyz": "уй"
            },
            "sentences": {
                "tajik": "Гав дар саҳро аст.",
                "russian": "Корова на поле.",
                "uzbek": "Сигир далада.",
                "kazakh": "Сиыр далада.",
                "kyrgyz": "Уй талаада."
            }
        },
        {
            "word": "horse",
            "translations": {
                "tajik": "асп",
                "russian": "лошадь",
                "uzbek": "от",
                "kazakh": "жылқы",
                "kyrgyz": "ат"
            },
            "sentences": {
                "tajik": "Асп дар шола медавад.",
                "russian": "Лошадь бегает в поле.",
                "uzbek": "От далада югуради.",
                "kazakh": "Жылқы далада жүгіріп жүр.",
                "kyrgyz": "Ат талаада чуркап жүрөт."
            }
        },
        {
            "word": "frog",
            "translations": {
                "tajik": "қавақ",
                "russian": "лягушка",
                "uzbek": "қурбақа",
                "kazakh": "бақа",
                "kyrgyz": "бака"
            },
            "sentences": {
                "tajik": "Қавақ дар об медарояд.",
                "russian": "Лягушка прыгает в воду.",
                "uzbek": "Қурбақа сувга сакрайди.",
                "kazakh": "Бақа суға секіреді.",
                "kyrgyz": "Бака сууга секирет."
            }
        },
        {
            "word": "buffalo",
            "translations": {
                "tajik": "буфало",
                "russian": "буйвол",
                "uzbek": "буфало",
                "kazakh": "буйвол",
                "kyrgyz": "буйвол"
            },
            "sentences": {
                "tajik": "Буфало дар Африка зиндаги мекунад.",
                "russian": "Буйвол живет в Африке.",
                "uzbek": "Буфало Африкада яшайди.",
                "kazakh": "Буйвол Африкада өмір сүреді.",
                "kyrgyz": "Буйвол Африкада жашайт."
            }
        },
        {
            "word": "elephant",
            "translations": {
                "tajik": "фил",
                "russian": "слон",
                "uzbek": "пил",
                "kazakh": "піл",
                "kyrgyz": "пил"
            },
            "sentences": {
                "tajik": "Фил ҳайвони калон аст.",
                "russian": "Слон - большое животное.",
                "uzbek": "Пил катта ҳайвон.",
                "kazakh": "Піл - үлкен жануар.",
                "kyrgyz": "Пил чоң жаныбар."
            }
        }
    ],
    "nature": [
        {
            "word": "water",
            "translations": {
                "tajik": "об",
                "russian": "вода",
                "uzbek": "сув",
                "kazakh": "су",
                "kyrgyz": "суу"
            },
            "sentences": {
                "tajik": "Об барои зиндагӣ муҳим аст.",
                "russian": "Вода важна для жизни.",
                "uzbek": "Сув ҳаёт учун муҳим.",
                "kazakh": "Су өмір үшін маңызды.",
                "kyrgyz": "Суу жашоо үчүн маанилүү."
            }
        },
        {
            "word": "flower",
            "translations": {
                "tajik": "гул",
                "russian": "цветок",
                "uzbek": "гул",
                "kazakh": "гүл",
                "kyrgyz": "гүл"
            },
            "sentences": {
                "tajik": "Ин гул зебо аст.",
                "russian": "Этот цветок красивый.",
                "uzbek": "Бу гул чиройли.",
                "kazakh": "Бұл гүл әдемі.",
                "kyrgyz": "Бул гүл кооз."
            }
        },
        {
            "word": "tree",
            "translations": {
                "tajik": "дарахт",
                "russian": "дерево",
                "uzbek": "дараҳт",
                "kazakh": "ағаш",
                "kyrgyz": "бак"
            },
            "sentences": {
                "tajik": "Ин дарахт бузург аст.",
                "russian": "Это дерево большое.",
                "uzbek": "Бу дараҳт катта.",
                "kazakh": "Бұл ағаш үлкен.",
                "kyrgyz": "Бул бак чоң."
            }
        },
        {
            "word": "mountain",
            "translations": {
                "tajik": "кӯҳ",
                "russian": "гора",
                "uzbek": "тоғ",
                "kazakh": "тау",
                "kyrgyz": "тоо"
            },
            "sentences": {
                "tajik": "Ин кӯҳ баланд аст.",
                "russian": "Эта гора высокая.",
                "uzbek": "Бу тоғ баланд.",
                "kazakh": "Бұл тау биік.",
                "kyrgyz": "Бул тоо бийик."
            }
        },
        {
            "word": "river",
            "translations": {
                "tajik": "дарё",
                "russian": "река",
                "uzbek": "дарё",
                "kazakh": "өзен",
                "kyrgyz": "дарыя"
            },
            "sentences": {
                "tajik": "Дарё оби равон дорад.",
                "russian": "Река имеет проточную воду.",
                "uzbek": "Дарё оқим суви бор.",
                "kazakh": "Өзенде ағынды су бар.",
                "kyrgyz": "Дарыяда агын суу бар."
            }
        },
        {
            "word": "lake",
            "translations": {
                "tajik": "кӯл",
                "russian": "озеро",
                "uzbek": "кўл",
                "kazakh": "көл",
                "kyrgyz": "көл"
            },
            "sentences": {
                "tajik": "Ин кӯл оби зебо дорад.",
                "russian": "Это озеро имеет красивую воду.",
                "uzbek": "Бу кўлда чиройли сув бор.",
                "kazakh": "Бұл көлде әдемі су бар.",
                "kyrgyz": "Бул көлдө кооз суу бар."
            }
        },
        {
            "word": "forest",
            "translations": {
                "tajik": "ҷангал",
                "russian": "лес",
                "uzbek": "ўрмон",
                "kazakh": "орман",
                "kyrgyz": "токой"
            },
            "sentences": {
                "tajik": "Ин ҷангал зебо аст.",
                "russian": "Этот лес красивый.",
                "uzbek": "Бу ўрмон чиройли.",
                "kazakh": "Бұл орман әдемі.",
                "kyrgyz": "Бул токой кооз."
            }
        },
        {
            "word": "sky",
            "translations": {
                "tajik": "осмон",
                "russian": "небо",
                "uzbek": "осмон",
                "kazakh": "аспан",
                "kyrgyz": "асман"
            },
            "sentences": {
                "tajik": "Осмон кабуд аст.",
                "russian": "Небо голубое.",
                "uzbek": "Осмон кўк.",
                "kazakh": "Аспан көк.",
                "kyrgyz": "Асман көк."
            }
        },
        {
            "word": "cloud",
            "translations": {
                "tajik": "абр",
                "russian": "облако",
                "uzbek": "булут",
                "kazakh": "бұлт",
                "kyrgyz": "булут"
            },
            "sentences": {
                "tajik": "Ин абр сафед аст.",
                "russian": "Это облако белое.",
                "uzbek": "Бу булут оқ.",
                "kazakh": "Бұл бұлт ақ.",
                "kyrgyz": "Бул булут ак."
            }
        },
        {
            "word": "rain",
            "translations": {
                "tajik": "борон",
                "russian": "дождь",
                "uzbek": "ёғингарчилик",
                "kazakh": "жаңбыр",
                "kyrgyz": "жамгыр"
            },
            "sentences": {
                "tajik": "Борон меборад.",
                "russian": "Идет дождь.",
                "uzbek": "Ёғингарчилик ёғмоқда.",
                "kazakh": "Жаңбыр жауып тұр.",
                "kyrgyz": "Жамгыр жаап жатат."
            }
        },
        {
            "word": "snow",
            "translations": {
                "tajik": "барф",
                "russian": "снег",
                "uzbek": "қор",
                "kazakh": "қар",
                "kyrgyz": "кар"
            },
            "sentences": {
                "tajik": "Барф мерезад.",
                "russian": "Идет снег.",
                "uzbek": "Қор ёғмоқда.",
                "kazakh": "Қар жауып тұр.",
                "kyrgyz": "Кар жаап жатат."
            }
        },
        {
            "word": "sun",
            "translations": {
                "tajik": "офтоб",
                "russian": "солнце",
                "uzbek": "қуёш",
                "kazakh": "күн",
                "kyrgyz": "күн"
            },
            "sentences": {
                "tajik": "Офтоб равшан аст.",
                "russian": "Солнце светит ярко.",
                "uzbek": "Қуёш порлаб турибди.",
                "kazakh": "Күн жарқырап тұр.",
                "kyrgyz": "Күн жарык болуп турат."
            }
        },
        {
            "word": "wind",
            "translations": {
                "tajik": "шамол",
                "russian": "ветер",
                "uzbek": "шамол",
                "kazakh": "жел",
                "kyrgyz": "шамал"
            },
            "sentences": {
                "tajik": "Шамол сахт мебарояд.",
                "russian": "Ветер дует сильно.",
                "uzbek": "Шамол кучли эсмоқда.",
                "kazakh": "Жел қатты соғып тұр.",
                "kyrgyz": "Шамал катуу болуп турат."
            }
        },
        {
            "word": "stone",
            "translations": {
                "tajik": "санг",
                "russian": "камень",
                "uzbek": "тош",
                "kazakh": "тас",
                "kyrgyz": "таш"
            },
            "sentences": {
                "tajik": "Ин санг сахт аст.",
                "russian": "Этот камень твердый.",
                "uzbek": "Бу тош қаттиқ.",
                "kazakh": "Бұл тас қатты.",
                "kyrgyz": "Бул таш катуу."
            }
        },
        {
            "word": "fire",
            "translations": {
                "tajik": "оташ",
                "russian": "огонь",
                "uzbek": "ўт",
                "kazakh": "от",
                "kyrgyz": "от"
            },
            "sentences": {
                "tajik": "Оташ даргир аст.",
                "russian": "Огонь горит.",
                "uzbek": "Ўт ёнимақда.",
                "kazakh": "От жанып тұр.",
                "kyrgyz": "От жанып жатат."
            }
        }
    ],
    "technology": [
        {
            "word": "computer",
            "translations": {
                "tajik": "компютер",
                "russian": "компьютер",
                "uzbek": "компьютер",
                "kazakh": "компьютер",
                "kyrgyz": "компьютер"
            },
            "sentences": {
                "tajik": "Ин компютер нави ман аст.",
                "russian": "Это мой новый компьютер.",
                "uzbek": "Бу менинг янги компьютерим.",
                "kazakh": "Бұл менің жаңа компьютерім.",
                "kyrgyz": "Бул менин жаңы компьютерин."
            }
        },
        {
            "word": "phone",
            "translations": {
                "tajik": "телефон",
                "russian": "телефон",
                "uzbek": "телефон",
                "kazakh": "телефон",
                "kyrgyz": "телефон"
            },
            "sentences": {
                "tajik": "Ман телефон дорам.",
                "russian": "У меня есть телефон.",
                "uzbek": "Менда телефон бор.",
                "kazakh": "Менде телефон бар.",
                "kyrgyz": "Менде телефон бар."
            }
        },
        {
            "word": "car",
            "translations": {
                "tajik": "мошин",
                "russian": "машина",
                "uzbek": "автомобиль",
                "kazakh": "көлік",
                "kyrgyz": "унаа"
            },
            "sentences": {
                "tajik": "Мошини ман сурхи ранг аст.",
                "russian": "Моя машина красного цвета.",
                "uzbek": "Менинг автомобил ярам сурх.",
                "kazakh": "Менің көлігім қызыл түсті.",
                "kyrgyz": "Менин унаам кызыл түстүү."
            }
        },
        {
            "word": "printer",
            "translations": {
                "tajik": "принтер",
                "russian": "принтер",
                "uzbek": "принтер",
                "kazakh": "принтер",
                "kyrgyz": "принтер"
            },
            "sentences": {
                "tajik": "Ман принтери нав харидам.",
                "russian": "Я купил новый принтер.",
                "uzbek": "Мен янги принтер сотиб олдим.",
                "kazakh": "Мен жаңа принтер сатып алдым.",
                "kyrgyz": "Мен жаңы принтер сатып алдым."
            }
        },
        {
            "word": "camera",
            "translations": {
                "tajik": "камера",
                "russian": "камера",
                "uzbek": "камера",
                "kazakh": "камера",
                "kyrgyz": "камера"
            },
            "sentences": {
                "tajik": "Камераи ман видео мегирад.",
                "russian": "Моя камера снимает видео.",
                "uzbek": "Менинг камерам видео олади.",
                "kazakh": "Менің камерам видео түсіреді.",
                "kyrgyz": "Менин камерам видео тартат."
            }
        },
        {
            "word": "TV",
            "translations": {
                "tajik": "телевизор",
                "russian": "телевизор",
                "uzbek": "телевизор",
                "kazakh": "теледидар",
                "kyrgyz": "телевизор"
            },
            "sentences": {
                "tajik": "Телевизор дар меҳмонхона аст.",
                "russian": "Телевизор в гостиной.",
                "uzbek": "Телевизор меҳмонхонада.",
                "kazakh": "Теледидар қонақ бөлмеде.",
                "kyrgyz": "Телевизор конок бөлмөдө."
            }
        },
        {
            "word": "battery",
            "translations": {
                "tajik": "аккумулятор",
                "russian": "аккумулятор",
                "uzbek": "батарея",
                "kazakh": "батарея",
                "kyrgyz": "батарея"
            },
            "sentences": {
                "tajik": "Аккумулятор дар мобил истифода мешавад.",
                "russian": "Аккумулятор используется в телефоне.",
                "uzbek": "Батарея мобилда қўлланилади.",
                "kazakh": "Батарея телефонда қолданылады.",
                "kyrgyz": "Батарея мобилдик телефондо колдонулат."
            }
        },
        {
            "word": "headphones",
            "translations": {
                "tajik": "наушник",
                "russian": "наушники",
                "uzbek": "қулоқчин",
                "kazakh": "құлаққап",
                "kyrgyz": "наушник"
            },
            "sentences": {
                "tajik": "Ман наушникро истифода мебарам.",
                "russian": "Я использую наушники.",
                "uzbek": "Мен қулоқчиндан фойдаланаман.",
                "kazakh": "Мен құлаққапты қолданамын.",
                "kyrgyz": "Мен наушникти колдонуп жатам."
            }
        },
        {
            "word": "lamp",
            "translations": {
                "tajik": "лампа",
                "russian": "лампа",
                "uzbek": "чироқ",
                "kazakh": "шам",
                "kyrgyz": "лампа"
            },
            "sentences": {
                "tajik": "Лампа дар рӯи миз аст.",
                "russian": "Лампа стоит на столе.",
                "uzbek": "Чироқ стол устида.",
                "kazakh": "Шам үстел үстінде.",
                "kyrgyz": "Лампа столдун үстүндө."
            }
        },
        {
            "word": "microphone",
            "translations": {
                "tajik": "микрофон",
                "russian": "микрофон",
                "uzbek": "микрофон",
                "kazakh": "микрофон",
                "kyrgyz": "микрофон"
            },
            "sentences": {
                "tajik": "Ман микрофонро истифода мебарам.",
                "russian": "Я использую микрофон.",
                "uzbek": "Мен микрофондан фойдаланаман.",
                "kazakh": "Мен микрофонды қолданамын.",
                "kyrgyz": "Мен микрофонду колдонуп жатам."
            }
        },
        {
            "word": "watch",
            "translations": {
                "tajik": "соат",
                "russian": "часы",
                "uzbek": "соат",
                "kazakh": "сағат",
                "kyrgyz": "саат"
            },
            "sentences": {
                "tajik": "Ин соат вақти дуруст нишон медиҳад.",
                "russian": "Эти часы показывают правильное время.",
                "uzbek": "Бу соат вақти тўғри кўрсатади.",
                "kazakh": "Бұл сағат дұрыс уақыт көрсетеді.",
                "kyrgyz": "Бул саат туура убакытты көрсөтөт."
            }
        },
        {
            "word": "keyboard",
            "translations": {
                "tajik": "клавиатура",
                "russian": "клавиатура",
                "uzbek": "клавиатура",
                "kazakh": "пернетақта",
                "kyrgyz": "клавиатура"
            },
            "sentences": {
                "tajik": "Ман аз клавиатура истифода мекунам.",
                "russian": "Я использую клавиатуру.",
                "uzbek": "Мен клавиатурадан фойдаланаман.",
                "kazakh": "Мен пернетақтаны қолданамын.",
                "kyrgyz": "Мен клавиатураны колдонуп жатам."
            }
        },
        {
            "word": "charger",
            "translations": {
                "tajik": "барқдиҳанда",
                "russian": "зарядное устройство",
                "uzbek": "қувватлагич",
                "kazakh": "қуаттау құрылғысы",
                "kyrgyz": "кубаттоо"
            },
            "sentences": {
                "tajik": "Ман барқдиҳанда барои телефон истифода мебарам.",
                "russian": "Я использую зарядное устройство для телефона.",
                "uzbek": "Мен телефон учун қувватлагичдан фойдаланаман.",
                "kazakh": "Мен телефон үшін қуаттау құрылғысын қолданамын.",
                "kyrgyz": "Мен телефон үчүн кубаттоону колдонуп жатам."
            }
        },
        {
            "word": "air conditioner",
            "translations": {
                "tajik": "кондиционер",
                "russian": "кондиционер",
                "uzbek": "кондиционер",
                "kazakh": "кондиционер",
                "kyrgyz": "кондиционер"
            },
            "sentences": {
                "tajik": "Кондиционер дар ҳуҷраи ман аст.",
                "russian": "Кондиционер в моей комнате.",
                "uzbek": "Кондиционер менинг ҳужраимда.",
                "kazakh": "Кондиционер менің бөлмемде.",
                "kyrgyz": "Кондиционер менин бөлмөмдө."
            }
        },
        {
            "word": "radio",
            "translations": {
                "tajik": "радио",
                "russian": "радио",
                "uzbek": "радио",
                "kazakh": "радио",
                "kyrgyz": "радио"
            },
            "sentences": {
                "tajik": "Ман радио гӯш мекунам.",
                "russian": "Я слушаю радио.",
                "uzbek": "Мен радио эшитаман.",
                "kazakh": "Мен радио тыңдаймын.",
                "kyrgyz": "Мен радио угуп жатам."
            }
        },
        {
            "word": "tablet",
            "translations": {
                "tajik": "планшет",
                "russian": "планшет",
                "uzbek": "планшет",
                "kazakh": "планшет",
                "kyrgyz": "планшет"
            },
            "sentences": {
                "tajik": "Ман аз планшет истифода мекунам.",
                "russian": "Я использую планшет.",
                "uzbek": "Мен планшетдан фойдаланаман.",
                "kazakh": "Мен планшетті қолданамын.",
                "kyrgyz": "Мен планшетти колдонуп жатам."
            }
        }
    ],
        "food": [
            {
                "word": "bread",
                "translations": {
                    "tajik": "нон",
                    "russian": "хлеб",
                    "uzbek": "нон",
                    "kazakh": "нан",
                    "kyrgyz": "нан"
                },
                "sentences": {
                    "tajik": "Ман нон мехӯрам.",
                    "russian": "Я ем хлеб.",
                    "uzbek": "Мен нон еяпман.",
                    "kazakh": "Мен нан жеймін.",
                    "kyrgyz": "Мен нан жейм."
                }
            },
            {
                "word": "milk",
                "translations": {
                    "tajik": "шир",
                    "russian": "молоко",
                    "uzbek": "сүт",
                    "kazakh": "сүт",
                    "kyrgyz": "сүт"
                },
                "sentences": {
                    "tajik": "Ман шир менӯшам.",
                    "russian": "Я пью молоко.",
                    "uzbek": "Мен сүт ичаман.",
                    "kazakh": "Мен сүт ішемін.",
                    "kyrgyz": "Мен сүт ичем."
                }
            },
            {
                "word": "apple",
                "translations": {
                    "tajik": "себ",
                    "russian": "яблоко",
                    "uzbek": "олма",
                    "kazakh": "алма",
                    "kyrgyz": "алма"
                },
                "sentences": {
                    "tajik": "Ман себ мехӯрам.",
                    "russian": "Я ем яблоко.",
                    "uzbek": "Мен олма еяпман.",
                    "kazakh": "Мен алма жеймін.",
                    "kyrgyz": "Мен алма жейм."
                }
            },
            {
                "word": "rice",
                "translations": {
                    "tajik": "биринҷ",
                    "russian": "рис",
                    "uzbek": "гурўч",
                    "kazakh": "күріш",
                    "kyrgyz": "күрүч"
                },
                "sentences": {
                    "tajik": "Ман биринҷ мехӯрам.",
                    "russian": "Я ем рис.",
                    "uzbek": "Мен гурўч еяпман.",
                    "kazakh": "Мен күріш жеймін.",
                    "kyrgyz": "Мен күрүч жейм."
                }
            },
            {
                "word": "meat",
                "translations": {
                    "tajik": "гӯшт",
                    "russian": "мясо",
                    "uzbek": "гуўшт",
                    "kazakh": "ет",
                    "kyrgyz": "эт"
                },
                "sentences": {
                    "tajik": "Ман гӯшт мехӯрам.",
                    "russian": "Я ем мясо.",
                    "uzbek": "Мен гуўшт еяпман.",
                    "kazakh": "Мен ет жеймін.",
                    "kyrgyz": "Мен эт жейм."
                }
            },
            {
                "word": "egg",
                "translations": {
                    "tajik": "тухм",
                    "russian": "яйцо",
                    "uzbek": "тухум",
                    "kazakh": "жұмыртқа",
                    "kyrgyz": "жумуртка"
                },
                "sentences": {
                    "tajik": "Ман тухм мехӯрам.",
                    "russian": "Я ем яйцо.",
                    "uzbek": "Мен тухум еяпман.",
                    "kazakh": "Мен жұмыртқа жеймін.",
                    "kyrgyz": "Мен жумуртка жейм."
                }
            },
            {
                "word": "fish",
                "translations": {
                    "tajik": "моҳӣ",
                    "russian": "рыба",
                    "uzbek": "балиқ",
                    "kazakh": "балық",
                    "kyrgyz": "балык"
                },
                "sentences": {
                    "tajik": "Ман моҳӣ мехӯрам.",
                    "russian": "Я ем рыбу.",
                    "uzbek": "Мен балиқ еяпман.",
                    "kazakh": "Мен балық жеймін.",
                    "kyrgyz": "Мен балык жейм."
                }
            },
            {
                "word": "water",
                "translations": {
                    "tajik": "об",
                    "russian": "вода",
                    "uzbek": "сув",
                    "kazakh": "су",
                    "kyrgyz": "суу"
                },
                "sentences": {
                    "tajik": "Ман об менӯшам.",
                    "russian": "Я пью воду.",
                    "uzbek": "Мен сув ичаман.",
                    "kazakh": "Мен су ішемін.",
                    "kyrgyz": "Мен суу ичем."
                }
            },
            {
                "word": "bread",
                "translations": {
                    "tajik": "нон",
                    "russian": "хлеб",
                    "uzbek": "нон",
                    "kazakh": "нан",
                    "kyrgyz": "нан"
                },
                "sentences": {
                    "tajik": "Ман нон мехӯрам.",
                    "russian": "Я ем хлеб.",
                    "uzbek": "Мен нон еяпман.",
                    "kazakh": "Мен нан жеймін.",
                    "kyrgyz": "Мен нан жейм."
                }
            },
            {
                "word": "sugar",
                "translations": {
                    "tajik": "қанди",
                    "russian": "сахар",
                    "uzbek": "шакар",
                    "kazakh": "қант",
                    "kyrgyz": "кант"
                },
                "sentences": {
                    "tajik": "Ман чойро бо қанди мехӯрам.",
                    "russian": "Я пью чай с сахаром.",
                    "uzbek": "Мен чойни шакар билан ичаман.",
                    "kazakh": "Мен шайды қантпен ішемін.",
                    "kyrgyz": "Мен чайды кант менен ичем."
                }
            },
            {
                "word": "honey",
                "translations": {
                    "tajik": "асал",
                    "russian": "мёд",
                    "uzbek": "асал",
                    "kazakh": "бал",
                    "kyrgyz": "бал"
                },
                "sentences": {
                    "tajik": "Ман асалро бо нон мехӯрам.",
                    "russian": "Я ем мёд с хлебом.",
                    "uzbek": "Мен асални нон билан еяпман.",
                    "kazakh": "Мен балды нанмен жеймін.",
                    "kyrgyz": "Мен балды нан менен жейм."
                }
            },
            {
                "word": "butter",
                "translations": {
                    "tajik": "равған",
                    "russian": "масло",
                    "uzbek": "сарёғ",
                    "kazakh": "май",
                    "kyrgyz": "май"
                },
                "sentences": {
                    "tajik": "Ман равғанро бо нон мехӯрам.",
                    "russian": "Я ем масло с хлебом.",
                    "uzbek": "Мен сарёғни нон билан еяпман.",
                    "kazakh": "Мен майды нанмен жеймін.",
                    "kyrgyz": "Мен майды нан менен жейм."
                }
            },
            {
                "word": "salt",
                "translations": {
                    "tajik": "намак",
                    "russian": "соль",
                    "uzbek": "тўз",
                    "kazakh": "тұз",
                    "kyrgyz": "түз"
                },
                "sentences": {
                    "tajik": "Ман намакро ба ғизо мезанам.",
                    "russian": "Я добавляю соль в еду.",
                    "uzbek": "Мен тўзни таомга соламан.",
                    "kazakh": "Мен тағамға тұз қосамын.",
                    "kyrgyz": "Мен тамакка туз кошом."
                }
            },
            {
                "word": "tea",
                "translations": {
                    "tajik": "чой",
                    "russian": "чай",
                    "uzbek": "чой",
                    "kazakh": "шай",
                    "kyrgyz": "чай"
                },
                "sentences": {
                    "tajik": "Ман чой менӯшам.",
                    "russian": "Я пью чай.",
                    "uzbek": "Мен чой ичаман.",
                    "kazakh": "Мен шай ішемін.",
                    "kyrgyz": "Мен чай ичем."
                }
            }
        ],
        "professions": [
            {
                "word": "teacher",
                "translations": {
                    "tajik": "муаллим",
                    "russian": "учитель",
                    "uzbek": "ўқитувчи",
                    "kazakh": "мұғалім",
                    "kyrgyz": "мұгалим"
                },
                "sentences": {
                    "tajik": "Муаллим дар мактаб кор мекунад.",
                    "russian": "Учитель работает в школе.",
                    "uzbek": "Ўқитувчи мактабда ишлайди.",
                    "kazakh": "Мұғалім мектепте жұмыс істейді.",
                    "kyrgyz": "Мұгалим мектепте иштейт."
                }
            },
            {
                "word": "doctor",
                "translations": {
                    "tajik": "духтур",
                    "russian": "врач",
                    "uzbek": "шифокор",
                    "kazakh": "дәрігер",
                    "kyrgyz": "доктор"
                },
                "sentences": {
                    "tajik": "Духтур беморро табобат мекунад.",
                    "russian": "Врач лечит пациента.",
                    "uzbek": "Шифокор беморни даволайди.",
                    "kazakh": "Дәрігер науқасты емдейді.",
                    "kyrgyz": "Доктор оорулууну дарылайт."
                }
            },
            {
                "word": "engineer",
                "translations": {
                    "tajik": "муҳандис",
                    "russian": "инженер",
                    "uzbek": "муҳандис",
                    "kazakh": "инженер",
                    "kyrgyz": "инженер"
                },
                "sentences": {
                    "tajik": "Муҳандис дар завод кор мекунад.",
                    "russian": "Инженер работает на заводе.",
                    "uzbek": "Муҳандис заводда ишлайди.",
                    "kazakh": "Инженер зауытта жұмыс істейді.",
                    "kyrgyz": "Инженер заводдо иштейт."
                }
            },
            {
                "word": "nurse",
                "translations": {
                    "tajik": "ҳамшираи шафқат",
                    "russian": "медсестра",
                    "uzbek": "шамойил",
                    "kazakh": "медбике",
                    "kyrgyz": "медайым"
                },
                "sentences": {
                    "tajik": "Ҳамшираи шафқат беморро нигоҳубин мекунад.",
                    "russian": "Медсестра ухаживает за пациентом.",
                    "uzbek": "Шамойил беморни парвариш қилади.",
                    "kazakh": "Медбике науқасқа күтім жасайды.",
                    "kyrgyz": "Медайым оорулууну карайт."
                }
            },
            {
                "word": "driver",
                "translations": {
                    "tajik": "ронанда",
                    "russian": "водитель",
                    "uzbek": "ҳайдовчи",
                    "kazakh": "жүргізуші",
                    "kyrgyz": "айдоочу"
                },
                "sentences": {
                    "tajik": "Ронанда мошинро меронад.",
                    "russian": "Водитель ведет машину.",
                    "uzbek": "Ҳайдовчи автомобилни бошқаради.",
                    "kazakh": "Жүргізуші көлік жүргізеді.",
                    "kyrgyz": "Айдоочу машинаны айдайт."
                }
            },
            {
                "word": "chef",
                "translations": {
                    "tajik": "ошпаз",
                    "russian": "шеф-повар",
                    "uzbek": "ошпаз",
                    "kazakh": "аспаз",
                    "kyrgyz": "ашпоз"
                },
                "sentences": {
                    "tajik": "Ошпаз ғизоро тайёр мекунад.",
                    "russian": "Шеф-повар готовит еду.",
                    "uzbek": "Ошпаз таом тайёрлайди.",
                    "kazakh": "Аспаз тамақ дайындайды.",
                    "kyrgyz": "Ашпоз тамак даярдайт."
                }
            },
            {
                "word": "police officer",
                "translations": {
                    "tajik": "полис",
                    "russian": "полицейский",
                    "uzbek": "милициячи",
                    "kazakh": "полиция қызметкері",
                    "kyrgyz": "милиция кызматкери"
                },
                "sentences": {
                    "tajik": "Полис тартиботро нигоҳ медорад.",
                    "russian": "Полицейский следит за порядком.",
                    "uzbek": "Милициячи тартибни сақлайди.",
                    "kazakh": "Полиция қызметкері тәртіпті қадағалайды.",
                    "kyrgyz": "Милиция кызматкери тартипти сактайт."
                }
            },
            {
                "word": "farmer",
                "translations": {
                    "tajik": "деҳқон",
                    "russian": "фермер",
                    "uzbek": "деҳқон",
                    "kazakh": "фермер",
                    "kyrgyz": "дыйкан"
                },
                "sentences": {
                    "tajik": "Деҳқон дар замин кор мекунад.",
                    "russian": "Фермер работает на земле.",
                    "uzbek": "Деҳқон ерда ишлайди.",
                    "kazakh": "Фермер жерде жұмыс істейді.",
                    "kyrgyz": "Дыйкан жер иштетет."
                }
            },
            {
                "word": "firefighter",
                "translations": {
                    "tajik": "наҷотдиҳанда",
                    "russian": "пожарный",
                    "uzbek": "ўт ўчирувчи",
                    "kazakh": "өрт сөндіруші",
                    "kyrgyz": "өрт өчүргүч"
                },
                "sentences": {
                    "tajik": "Наҷотдиҳанда оташро хомӯш мекунад.",
                    "russian": "Пожарный тушит огонь.",
                    "uzbek": "Ўт ўчирувчи оловни ўчиради.",
                    "kazakh": "Өрт сөндіруші отты сөндіреді.",
                    "kyrgyz": "Өрт өчүргүч отту өчүрөт."
                }
            },
            {
                "word": "lawyer",
                "translations": {
                    "tajik": "ҳуқуқшинос",
                    "russian": "юрист",
                    "uzbek": "ҳуқуқшунос",
                    "kazakh": "заңгер",
                    "kyrgyz": "юрист"
                },
                "sentences": {
                    "tajik": "Ҳуқуқшинос дар суд кор мекунад.",
                    "russian": "Юрист работает в суде.",
                    "uzbek": "Ҳуқуқшунос судда ишлайди.",
                    "kazakh": "Заңгер сотта жұмыс істейді.",
                    "kyrgyz": "Юрист сотто иштейт."
                }
            },
            {
                "word": "artist",
                "translations": {
                    "tajik": "рассом",
                    "russian": "художник",
                    "uzbek": "рассом",
                    "kazakh": "суретші",
                    "kyrgyz": "сүрөтчү"
                },
                "sentences": {
                    "tajik": "Расом расм мекашад.",
                    "russian": "Художник рисует картину.",
                    "uzbek": "Расом расм чизади.",
                    "kazakh": "Суретші сурет салады.",
                    "kyrgyz": "Сүрөтчү сүрөт тартат."
                }
            },
            {
                "word": "architect",
                "translations": {
                    "tajik": "меъмор",
                    "russian": "архитектор",
                    "uzbek": "меъмор",
                    "kazakh": "сәулетші",
                    "kyrgyz": "архитектор"
                },
                "sentences": {
                    "tajik": "Меъмор бино тарроҳӣ мекунад.",
                    "russian": "Архитектор проектирует здание.",
                    "uzbek": "Меъмор бинога лойиҳа чизади.",
                    "kazakh": "Сәулетші ғимарат жобасын жасайды.",
                    "kyrgyz": "Архитектор имарат долбоорлойт."
                }
            },
            {
                "word": "scientist",
                "translations": {
                    "tajik": "олим",
                    "russian": "учёный",
                    "uzbek": "олим",
                    "kazakh": "ғалым",
                    "kyrgyz": "илимпоз"
                },
                "sentences": {
                    "tajik": "Олим тадқиқот мегузаронад.",
                    "russian": "Учёный проводит исследования.",
                    "uzbek": "Олим тадқиқот ўтказади.",
                    "kazakh": "Ғалым зерттеу жүргізеді.",
                    "kyrgyz": "Илимпоз изилдөө жүргүзөт."
                }
            }
        ],
        "household": [
            {
                "word": "chair",
                "translations": {
                    "tajik": "курсӣ",
                    "russian": "стул",
                    "uzbek": "стул",
                    "kazakh": "орындық",
                    "kyrgyz": "отургуч"
                },
                "sentences": {
                    "tajik": "Ман дар курсӣ менишинам.",
                    "russian": "Я сижу на стуле.",
                    "uzbek": "Мен стулда ўтирибман.",
                    "kazakh": "Мен орындықта отырмын.",
                    "kyrgyz": "Мен отургучта отурам."
                }
            },
            {
                "word": "table",
                "translations": {
                    "tajik": "мизи",
                    "russian": "стол",
                    "uzbek": "стол",
                    "kazakh": "үстел",
                    "kyrgyz": "стол"
                },
                "sentences": {
                    "tajik": "Мизи ман калон аст.",
                    "russian": "Мой стол большой.",
                    "uzbek": "Менинг столим катта.",
                    "kazakh": "Менің үстелім үлкен.",
                    "kyrgyz": "Менин столум чоң."
                }
            },
            {
                "word": "bed",
                "translations": {
                    "tajik": "кат",
                    "russian": "кровать",
                    "uzbek": "кровать",
                    "kazakh": "төсек",
                    "kyrgyz": "кровать"
                },
                "sentences": {
                    "tajik": "Ман дар кати худ хоб мекунам.",
                    "russian": "Я сплю на своей кровати.",
                    "uzbek": "Мен ўз краватимда ухлайман.",
                    "kazakh": "Мен өз төсегімде ұйықтаймын.",
                    "kyrgyz": "Мен өзүмдүн кроватымда жатам."
                }
            },
            {
                "word": "sofa",
                "translations": {
                    "tajik": "диван",
                    "russian": "диван",
                    "uzbek": "диван",
                    "kazakh": "диван",
                    "kyrgyz": "диван"
                },
                "sentences": {
                    "tajik": "Ман дар диван менишинам.",
                    "russian": "Я сижу на диване.",
                    "uzbek": "Мен диванда ўтирибман.",
                    "kazakh": "Мен диванда отырмын.",
                    "kyrgyz": "Мен диванда отурам."
                }
            },
            {
                "word": "lamp",
                "translations": {
                    "tajik": "лампа",
                    "russian": "лампа",
                    "uzbek": "лампа",
                    "kazakh": "шам",
                    "kyrgyz": "лампа"
                },
                "sentences": {
                    "tajik": "Ман лампаро фурӯзон мекунам.",
                    "russian": "Я включаю лампу.",
                    "uzbek": "Мен лампани ёқаман.",
                    "kazakh": "Мен шамды қосамын.",
                    "kyrgyz": "Мен лампаны күйгүзөм."
                }
            },
            {
                "word": "carpet",
                "translations": {
                    "tajik": "фарш",
                    "russian": "ковер",
                    "uzbek": "гилам",
                    "kazakh": "кілем",
                    "kyrgyz": "килэм"
                },
                "sentences": {
                    "tajik": "Фарши ман нав аст.",
                    "russian": "Мой ковер новый.",
                    "uzbek": "Менинг гиламим янги.",
                    "kazakh": "Менің кілемім жаңа.",
                    "kyrgyz": "Менин килэмим жаңы."
                }
            },
            {
                "word": "door",
                "translations": {
                    "tajik": "дар",
                    "russian": "дверь",
                    "uzbek": "эшик",
                    "kazakh": "есіқ",
                    "kyrgyz": "эшик"
                },
                "sentences": {
                    "tajik": "Ман дарро мекушоям.",
                    "russian": "Я открываю дверь.",
                    "uzbek": "Мен эшикни очаман.",
                    "kazakh": "Мен есікті ашамын.",
                    "kyrgyz": "Мен эшикти ачам."
                }
            },
            {
                "word": "window",
                "translations": {
                    "tajik": "тиреза",
                    "russian": "окно",
                    "uzbek": "ойна",
                    "kazakh": "терезе",
                    "kyrgyz": "терезе"
                },
                "sentences": {
                    "tajik": "Ман тирезаро мекушоям.",
                    "russian": "Я открываю окно.",
                    "uzbek": "Мен ойна очаман.",
                    "kazakh": "Мен терезені ашамын.",
                    "kyrgyz": "Мен терезени ачам."
                }
            },
            {
                "word": "refrigerator",
                "translations": {
                    "tajik": "холодильник",
                    "russian": "холодильник",
                    "uzbek": "музлатгич",
                    "kazakh": "тоңазытқыш",
                    "kyrgyz": "муздаткыч"
                },
                "sentences": {
                    "tajik": "Ман ғизоро дар холодильник мегузорам.",
                    "russian": "Я кладу еду в холодильник.",
                    "uzbek": "Мен таомни музлатгичга қўяман.",
                    "kazakh": "Мен тағамды тоңазытқышқа қоямын.",
                    "kyrgyz": "Мен тамакты муздаткычка коём."
                }
            },
            {
                "word": "oven",
                "translations": {
                    "tajik": "пухтупаз",
                    "russian": "духовка",
                    "uzbek": "печка",
                    "kazakh": "пеш",
                    "kyrgyz": "меш"
                },
                "sentences": {
                    "tajik": "Ман дар пухтупаз таом мепазам.",
                    "russian": "Я готовлю еду в духовке.",
                    "uzbek": "Мен таомни печкада пишираман.",
                    "kazakh": "Мен пеште тамақ дайындаймын.",
                    "kyrgyz": "Мен тамакты меште бышырам."
                }
            },
            {
                "word": "sink",
                "translations": {
                    "tajik": "кран",
                    "russian": "раковина",
                    "uzbek": "раковина",
                    "kazakh": "раковина",
                    "kyrgyz": "раковина"
                },
                "sentences": {
                    "tajik": "Ман зарфҳоро дар кран мешӯям.",
                    "russian": "Я мою посуду в раковине.",
                    "uzbek": "Мен идишларни раковинада юваман.",
                    "kazakh": "Мен ыдыстарды раковинада жуамын.",
                    "kyrgyz": "Мен идиштерди раковинада жууп жатам."
                }
            },
            {
                "word": "toilet",
                "translations": {
                    "tajik": "туалет",
                    "russian": "туалет",
                    "uzbek": "ҳожатхона",
                    "kazakh": "дәретхана",
                    "kyrgyz": "даараткана"
                },
                "sentences": {
                    "tajik": "Ман ба туалет меравам.",
                    "russian": "Я иду в туалет.",
                    "uzbek": "Мен ҳожатхонага боряпман.",
                    "kazakh": "Мен дәретханаға барамын.",
                    "kyrgyz": "Мен дааратканага баратам."
                }
            },
            {
                "word": "shower",
                "translations": {
                    "tajik": "душ",
                    "russian": "душ",
                    "uzbek": "душ",
                    "kazakh": "душ",
                    "kyrgyz": "душ"
                },
                "sentences": {
                    "tajik": "Ман душ мегирам.",
                    "russian": "Я принимаю душ.",
                    "uzbek": "Мен душ оляпман.",
                    "kazakh": "Мен душ қабылдаймын.",
                    "kyrgyz": "Мен душка түшүп жатам."
                }
            }
        ],
        "sports": [
            {
                "word": "soccer",
                "translations": {
                    "tajik": "футбол",
                    "russian": "футбол",
                    "uzbek": "футбол",
                    "kazakh": "футбол",
                    "kyrgyz": "футбол"
                },
                "sentences": {
                    "tajik": "Ман футбол бозӣ мекунам.",
                    "russian": "Я играю в футбол.",
                    "uzbek": "Мен футбол ўйнаяпман.",
                    "kazakh": "Мен футбол ойнаймын.",
                    "kyrgyz": "Мен футбол ойнойм."
                }
            },
            {
                "word": "basketball",
                "translations": {
                    "tajik": "баскетбол",
                    "russian": "баскетбол",
                    "uzbek": "баскетбол",
                    "kazakh": "баскетбол",
                    "kyrgyz": "баскетбол"
                },
                "sentences": {
                    "tajik": "Ман баскетбол бозӣ мекунам.",
                    "russian": "Я играю в баскетбол.",
                    "uzbek": "Мен баскетбол ўйнаяпман.",
                    "kazakh": "Мен баскетбол ойнаймын.",
                    "kyrgyz": "Мен баскетбол ойнойм."
                }
            },
            {
                "word": "tennis",
                "translations": {
                    "tajik": "теннис",
                    "russian": "теннис",
                    "uzbek": "теннис",
                    "kazakh": "теннис",
                    "kyrgyz": "теннис"
                },
                "sentences": {
                    "tajik": "Ман теннис бозӣ мекунам.",
                    "russian": "Я играю в теннис.",
                    "uzbek": "Мен теннис ўйнаяпман.",
                    "kazakh": "Мен теннис ойнаймын.",
                    "kyrgyz": "Мен теннис ойнойм."
                }
            },
            {
                "word": "volleyball",
                "translations": {
                    "tajik": "волейбол",
                    "russian": "волейбол",
                    "uzbek": "волейбол",
                    "kazakh": "волейбол",
                    "kyrgyz": "волейбол"
                },
                "sentences": {
                    "tajik": "Ман волейбол бозӣ мекунам.",
                    "russian": "Я играю в волейбол.",
                    "uzbek": "Мен волейбол ўйнаяпман.",
                    "kazakh": "Мен волейбол ойнаймын.",
                    "kyrgyz": "Мен волейбол ойнойм."
                }
            },
            {
                "word": "running",
                "translations": {
                    "tajik": "давидан",
                    "russian": "бег",
                    "uzbek": "югуриш",
                    "kazakh": "жүгіру",
                    "kyrgyz": "чуркоо"
                },
                "sentences": {
                    "tajik": "Ман давиданро дӯст медорам.",
                    "russian": "Я люблю бег.",
                    "uzbek": "Мен югуришни яхши кўраман.",
                    "kazakh": "Мен жүгіруді жақсы көремін.",
                    "kyrgyz": "Мен чуркоону жакшы көрөм."
                }
            },
            {
                "word": "swimming",
                "translations": {
                    "tajik": "шиноварӣ",
                    "russian": "плавание",
                    "uzbek": "сузиш",
                    "kazakh": "жүзу",
                    "kyrgyz": "сууда сүзүү"
                },
                "sentences": {
                    "tajik": "Ман шиновариро дӯст медорам.",
                    "russian": "Я люблю плавание.",
                    "uzbek": "Мен сузишни яхши кўраман.",
                    "kazakh": "Мен жүзуді жақсы көремін.",
                    "kyrgyz": "Мен сууда сүзүүнү жакшы көрөм."
                }
            },
            {
                "word": "boxing",
                "translations": {
                    "tajik": "бокс",
                    "russian": "бокс",
                    "uzbek": "бокс",
                    "kazakh": "бокс",
                    "kyrgyz": "бокс"
                },
                "sentences": {
                    "tajik": "Ман бокс бозӣ мекунам.",
                    "russian": "Я занимаюсь боксом.",
                    "uzbek": "Мен бокс билан шуғилланаман.",
                    "kazakh": "Мен бокс ойнаймын.",
                    "kyrgyz": "Мен бокс ойнойм."
                }
            },
            {
                "word": "cycling",
                "translations": {
                    "tajik": "велосипедронӣ",
                    "russian": "велоспорт",
                    "uzbek": "велосипед",
                    "kazakh": "велоспорт",
                    "kyrgyz": "велоспорт"
                },
                "sentences": {
                    "tajik": "Ман велосипедронӣ мекунам.",
                    "russian": "Я занимаюсь велоспортом.",
                    "uzbek": "Мен велосипед миниш билан шуғилланаман.",
                    "kazakh": "Мен велоспортпен шұғылданамын.",
                    "kyrgyz": "Мен велоспорт менен машыгам."
                }
            },
            {
                "word": "skiing",
                "translations": {
                    "tajik": "лыжаронӣ",
                    "russian": "лыжный спорт",
                    "uzbek": "чанғи спорти",
                    "kazakh": "шаңғы тебу",
                    "kyrgyz": "шаңгы тебүү"
                },
                "sentences": {
                    "tajik": "Ман лижаронӣ мекунам.",
                    "russian": "Я занимаюсь лыжным спортом.",
                    "uzbek": "Мен чанғи спорти билан шуғилланаман.",
                    "kazakh": "Мен шаңғы тебумен шұғылданамын.",
                    "kyrgyz": "Мен шаңгы тебүү менен машыгам."
                }
            },
            {
                "word": "golf",
                "translations": {
                    "tajik": "гольф",
                    "russian": "гольф",
                    "uzbek": "гольф",
                    "kazakh": "гольф",
                    "kyrgyz": "гольф"
                },
                "sentences": {
                    "tajik": "Ман гольф бозӣ мекунам.",
                    "russian": "Я играю в гольф.",
                    "uzbek": "Мен гольф ўйнаяпман.",
                    "kazakh": "Мен гольф ойнаймын.",
                    "kyrgyz": "Мен гольф ойнойм."
                }
            }
        ],
        "transport": [
            {
                "word": "car",
                "translations": {
                    "tajik": "мошин",
                    "russian": "машина",
                    "uzbek": "автомобиль",
                    "kazakh": "көлік",
                    "kyrgyz": "унаа"
                },
                "sentences": {
                    "tajik": "Ман мошин меронам.",
                    "russian": "Я вожу машину.",
                    "uzbek": "Мен автомобиль ҳайдаяпман.",
                    "kazakh": "Мен көлік жүргіземін.",
                    "kyrgyz": "Мен машина айдап жатам."
                }
            },
            {
                "word": "bus",
                "translations": {
                    "tajik": "автобус",
                    "russian": "автобус",
                    "uzbek": "автобус",
                    "kazakh": "автобус",
                    "kyrgyz": "автобус"
                },
                "sentences": {
                    "tajik": "Ман бо автобус меравам.",
                    "russian": "Я еду на автобусе.",
                    "uzbek": "Мен автобусда кетаяпман.",
                    "kazakh": "Мен автобуспен барамын.",
                    "kyrgyz": "Мен автобуста барам."
                }
            },
            {
                "word": "train",
                "translations": {
                    "tajik": "қатор",
                    "russian": "поезд",
                    "uzbek": "поезд",
                    "kazakh": "пойыз",
                    "kyrgyz": "поезд"
                },
                "sentences": {
                    "tajik": "Ман бо қатор сафар мекунам.",
                    "russian": "Я путешествую на поезде.",
                    "uzbek": "Мен поездда сафар қиламан.",
                    "kazakh": "Мен пойызбен саяхаттаймын.",
                    "kyrgyz": "Мен поезд менен саякаттайм."
                }
            },
            {
                "word": "bicycle",
                "translations": {
                    "tajik": "велосипед",
                    "russian": "велосипед",
                    "uzbek": "велосипед",
                    "kazakh": "велосипед",
                    "kyrgyz": "велосипед"
                },
                "sentences": {
                    "tajik": "Ман бо велосипед меравам.",
                    "russian": "Я еду на велосипеде.",
                    "uzbek": "Мен велосипедда кетаяпман.",
                    "kazakh": "Мен велосипедпен барамын.",
                    "kyrgyz": "Мен велосипед менен барам."
                }
            },
            {
                "word": "airplane",
                "translations": {
                    "tajik": "ҳавопаймо",
                    "russian": "самолёт",
                    "uzbek": "самолёт",
                    "kazakh": "ұшақ",
                    "kyrgyz": "учак"
                },
                "sentences": {
                    "tajik": "Ман бо ҳавопаймо сафар мекунам.",
                    "russian": "Я лечу на самолёте.",
                    "uzbek": "Мен самолётда учяпман.",
                    "kazakh": "Мен ұшақпен ұшып барамын.",
                    "kyrgyz": "Мен учак менен учуп жатам."
                }
            },
            {
                "word": "motorcycle",
                "translations": {
                    "tajik": "мотоцикл",
                    "russian": "мотоцикл",
                    "uzbek": "мотоцикл",
                    "kazakh": "мотоцикл",
                    "kyrgyz": "мотоцикл"
                },
                "sentences": {
                    "tajik": "Ман бо мотоцикл меравам.",
                    "russian": "Я еду на мотоцикле.",
                    "uzbek": "Мен мотоциклда кетаяпман.",
                    "kazakh": "Мен мотоциклмен барамын.",
                    "kyrgyz": "Мен мотоцикл менен барам."
                }
            },
            {
                "word": "boat",
                "translations": {
                    "tajik": "қайиқ",
                    "russian": "лодка",
                    "uzbek": "қайиқ",
                    "kazakh": "қайық",
                    "kyrgyz": "кайык"
                },
                "sentences": {
                    "tajik": "Ман бо қайиқ дарёро мепароям.",
                    "russian": "Я переплываю реку на лодке.",
                    "uzbek": "Мен қайиқда дарёни кесиб ўтяпман.",
                    "kazakh": "Мен қайықпен өзенді кесіп өтемін.",
                    "kyrgyz": "Мен кайык менен дарыяны кесип өтөм."
                }
            },
            {
                "word": "subway",
                "translations": {
                    "tajik": "метро",
                    "russian": "метро",
                    "uzbek": "метро",
                    "kazakh": "метро",
                    "kyrgyz": "метро"
                },
                "sentences": {
                    "tajik": "Ман бо метро меравам.",
                    "russian": "Я еду на метро.",
                    "uzbek": "Мен метродда кетаяпман.",
                    "kazakh": "Мен метромен барамын.",
                    "kyrgyz": "Мен метро менен барам."
                }
            },
            {
                "word": "truck",
                "translations": {
                    "tajik": "боркаш",
                    "russian": "грузовик",
                    "uzbek": "юклмашина",
                    "kazakh": "жүк көлігі",
                    "kyrgyz": "жүк ташуучу унаа"
                },
                "sentences": {
                    "tajik": "Ман бо боркаш бор мекашам.",
                    "russian": "Я вожу грузы на грузовике.",
                    "uzbek": "Мен юклмашинада юк ташяпман.",
                    "kazakh": "Мен жүк көлігімен жүк тасымалдаймын.",
                    "kyrgyz": "Мен жүк ташуучу унаа менен жүк ташыйм."
                }
            },
            {
                "word": "helicopter",
                "translations": {
                    "tajik": "чархбол",
                    "russian": "вертолёт",
                    "uzbek": "вертолёт",
                    "kazakh": "тікұшақ",
                    "kyrgyz": "тик учак"
                },
                "sentences": {
                    "tajik": "Ман бо чархбол парвоз мекунам.",
                    "russian": "Я летаю на вертолёте.",
                    "uzbek": "Мен вертолётда учяпман.",
                    "kazakh": "Мен тікұшақпен ұшамын.",
                    "kyrgyz": "Мен тик учак менен учуп жатам."
                }
            },
            {
                "word": "scooter",
                "translations": {
                    "tajik": "скутер",
                    "russian": "скутер",
                    "uzbek": "скутер",
                    "kazakh": "скутер",
                    "kyrgyz": "скутер"
                },
                "sentences": {
                    "tajik": "Ман бо скутер меравам.",
                    "russian": "Я езжу на скутере.",
                    "uzbek": "Мен скутерда кетаяпман.",
                    "kazakh": "Мен скутермен барамын.",
                    "kyrgyz": "Мен скутер менен барам."
                }
            },
            {
                "word": "taxi",
                "translations": {
                    "tajik": "таксӣ",
                    "russian": "такси",
                    "uzbek": "такси",
                    "kazakh": "такси",
                    "kyrgyz": "такси"
                },
                "sentences": {
                    "tajik": "Ман бо таксӣ меравам.",
                    "russian": "Я еду на такси.",
                    "uzbek": "Мен таксида кетаяпман.",
                    "kazakh": "Мен таксимен барамын.",
                    "kyrgyz": "Мен такси менен барам."
                }
            }
        ],
        
        "school": [
        {
            "word": "book",
            "translations": {
                "tajik": "китоб",
                "russian": "книга",
                "uzbek": "китоб",
                "kazakh": "кітап",
                "kyrgyz": "китеп"
            },
            "sentences": {
                "tajik": "Ман китоб мехонам.",
                "russian": "Я читаю книгу.",
                "uzbek": "Мен китоб ўқияпман.",
                "kazakh": "Мен кітап оқып жатырмын.",
                "kyrgyz": "Мен китеп окуп жатам."
            }
        },
        {
            "word": "pen",
            "translations": {
                "tajik": "қалам",
                "russian": "ручка",
                "uzbek": "ручка",
                "kazakh": "қалам",
                "kyrgyz": "ручка"
            },
            "sentences": {
                "tajik": "Ман бо қалам менависам.",
                "russian": "Я пишу ручкой.",
                "uzbek": "Мен ручка билан ёзяпман.",
                "kazakh": "Мен қаламмен жазып жатырмын.",
                "kyrgyz": "Мен ручка менен жазып жатам."
            }
        },
        {
            "word": "teacher",
            "translations": {
                "tajik": "муаллим",
                "russian": "учитель",
                "uzbek": "ўқитувчи",
                "kazakh": "мұғалім",
                "kyrgyz": "мұгалим"
            },
            "sentences": {
                "tajik": "Муаллим дар синф аст.",
                "russian": "Учитель в классе.",
                "uzbek": "Ўқитувчи синфда.",
                "kazakh": "Мұғалім сыныпта.",
                "kyrgyz": "Мугалим класста."
            }
        },
        {
            "word": "student",
            "translations": {
                "tajik": "донишҷӯ",
                "russian": "ученик",
                "uzbek": "талаба",
                "kazakh": "оқушы",
                "kyrgyz": "окуучу"
            },
            "sentences": {
                "tajik": "Донишҷӯ дарс мехонад.",
                "russian": "Ученик учит уроки.",
                "uzbek": "Талаба дарс ўқияпман.",
                "kazakh": "Оқушы сабақ оқып жатыр.",
                "kyrgyz": "Окуучу сабак окуп жатам."
            }
        },
        {
            "word": "classroom",
            "translations": {
                "tajik": "синфхона",
                "russian": "класс",
                "uzbek": "синф",
                "kazakh": "сынып",
                "kyrgyz": "класс"
            },
            "sentences": {
                "tajik": "Ман дар синфхонаам.",
                "russian": "Я в классе.",
                "uzbek": "Мен синфдаман.",
                "kazakh": "Мен сыныптамын.",
                "kyrgyz": "Мен класстамын."
            }
        },
        {
            "word": "notebook",
            "translations": {
                "tajik": "дафтари",
                "russian": "тетрадь",
                "uzbek": "дафтар",
                "kazakh": "дәптер",
                "kyrgyz": "дептер"
            },
            "sentences": {
                "tajik": "Ман дар дафтари менависам.",
                "russian": "Я пишу в тетради.",
                "uzbek": "Мен дафтарга ёзяпман.",
                "kazakh": "Мен дәптерге жазып жатырмын.",
                "kyrgyz": "Мен дептерге жазып жатам."
            }
        },
        {
            "word": "desk",
            "translations": {
                "tajik": "мизи синф",
                "russian": "парта",
                "uzbek": "парта",
                "kazakh": "парта",
                "kyrgyz": "парта"
            },
            "sentences": {
                "tajik": "Ман дар назди мизи синф нишастаам.",
                "russian": "Я сижу за партой.",
                "uzbek": "Мен партада ўтирибман.",
                "kazakh": "Мен партада отырмын.",
                "kyrgyz": "Мен партада отурам."
            }
        },
        {
            "word": "blackboard",
            "translations": {
                "tajik": "тахтаи синф",
                "russian": "доска",
                "uzbek": "доска",
                "kazakh": "тақта",
                "kyrgyz": "доска"
            },
            "sentences": {
                "tajik": "Ман дар тахтаи синф менависам.",
                "russian": "Я пишу на доске.",
                "uzbek": "Мен доскада ёзяпман.",
                "kazakh": "Мен тақтаға жазып жатырмын.",
                "kyrgyz": "Мен доскага жазып жатам."
            }
        },
        {
            "word": "lesson",
            "translations": {
                "tajik": "дарс",
                "russian": "урок",
                "uzbek": "дарс",
                "kazakh": "сабақ",
                "kyrgyz": "сабак"
            },
            "sentences": {
                "tajik": "Ман дар дарс иштирок мекунам.",
                "russian": "Я присутствую на уроке.",
                "uzbek": "Мен дарсда қатнашяпман.",
                "kazakh": "Мен сабақта қатысып жатырмын.",
                "kyrgyz": "Мен сабакта катышып жатам."
            }
        },
        {
            "word": "homework",
            "translations": {
                "tajik": "вазифаи хонагӣ",
                "russian": "домашнее задание",
                "uzbek": "уйга вазифа",
                "kazakh": "үй тапсырмасы",
                "kyrgyz": "үй тапшырмасы"
            },
            "sentences": {
                "tajik": "Ман вазифаи хонагии худро иҷро мекунам.",
                "russian": "Я делаю своё домашнее задание.",
                "uzbek": "Мен уйга вазифамни бажараман.",
                "kazakh": "Мен үй тапсырмамды орындап жатырмын.",
                "kyrgyz": "Мен үй тапшырмамды аткарып жатам."
            }
        },
        {
            "word": "exam",
            "translations": {
                "tajik": "имтиҳон",
                "russian": "экзамен",
                "uzbek": "имтиҳон",
                "kazakh": "емтихан",
                "kyrgyz": "экзамен"
            },
            "sentences": {
                "tajik": "Ман барои имтиҳон омода мешавам.",
                "russian": "Я готовлюсь к экзамену.",
                "uzbek": "Мен имтиҳонга тайёрланяпман.",
                "kazakh": "Мен емтиханға дайындалып жатырмын.",
                "kyrgyz": "Мен экзаменге даярданып жатам."
            }
        },
        {
            "word": "library",
            "translations": {
                "tajik": "китобхона",
                "russian": "библиотека",
                "uzbek": "китобхона",
                "kazakh": "кітапхана",
                "kyrgyz": "китепкана"
            },
            "sentences": {
                "tajik": "Ман ба китобхона меравам.",
                "russian": "Я иду в библиотеку.",
                "uzbek": "Мен китобхонага бораяпман.",
                "kazakh": "Мен кітапханаға барамын.",
                "kyrgyz": "Мен китепканага барам."
            }
        },
        {
            "word": "map",
            "translations": {
                "tajik": "харита",
                "russian": "карта",
                "uzbek": "харита",
                "kazakh": "карта",
                "kyrgyz": "карта"
            },
            "sentences": {
                "tajik": "Ман ба харита назар мекунам.",
                "russian": "Я смотрю на карту.",
                "uzbek": "Мен харитага қарайман.",
                "kazakh": "Мен картаға қарап жатырмын.",
                "kyrgyz": "Мен картага карап жатам."
            }
        },
        {
            "word": "science",
            "translations": {
                "tajik": "илм",
                "russian": "наука",
                "uzbek": "илм",
                "kazakh": "ғылым",
                "kyrgyz": "илим"
            },
            "sentences": {
                "tajik": "Ман илмро дӯст медорам.",
                "russian": "Я люблю науку.",
                "uzbek": "Мен илмни яхши кўраман.",
                "kazakh": "Мен ғылымды жақсы көремін.",
                "kyrgyz": "Мен илимди жакшы көрөм."
            }
        }
    ]
    
    
};
