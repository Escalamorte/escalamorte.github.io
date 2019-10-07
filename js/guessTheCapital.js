function hideBtn() {
    document.getElementById("welcome").style.display = 'none';
    document.getElementById("game").style.display = 'table';
    setCountry();
}

function setCountry() {

    let countryArr = [
        "Австрия;Вена",
        "Азербайджан;Баку",
        "Албания;Тирана",
        "Алжир;Алжир",
        "Ангола;Луанда",
        "Андорра;Андорра-ла-Велья",
        "Антигуа и Барбуда;Сент-Джонс",
        "Аргентина;Буэнос-Айрес",
        "Армения;Ереван",
        "Афганистан;Кабул",
        "Багамы;Нассау",
        "Бангладеш;Дакка",
        "Барбадос;Бриджтаун",
        "Бахрейн;Манама",
        "Беларусь;Минск",
        "Белиз;Бельмопан",
        "Бельгия;Брюссель",
        "Бенин;Порто-Ново",
        "Болгария;София",
        "Боливия;Сукре",
        "Босния и Герцеговина;Сараево",
        "Ботсвана;Габороне",
        "Бразилия;Бразилиа",
        "Бруней;Бандар-Сери-Багаван",
        "Буркина Фасо;Уагадугу",
        "Бурунди;Бужумбура",
        "Бутан;Тхимпху",
        "Вануату;Порт-Вила",
        "Ватикан;Ватикан",
        "Великобритания;Лондон",
        "Венгрия;Будапешт",
        "Венесуэла;Каракас",
        "Восточный Тимор;Дили",
        "Вьетнам;Ханой",
        "Габон;Либревиль",
        "Гаити;Порт-о-Пренс",
        "Гайана;Джорджтаун",
        "Гамбия;Банжул",
        "Гана;Аккра",
        "Гватемала;Гватемала",
        "Гвинея;Конакри",
        "Гвинея-Бисау;Бисау",
        "Германия;Берлин",
        "Гондурас;Тегусигальпа",
        "Гренада;Сент-Джорджес",
        "Греция;Афины",
        "Грузия;Тбилиси",
        "Дания;Копенгаген",
        "Джибути;Джибути",
        "Доминика;Розо",
        "Доминиканская Республика;Санто-Доминго",
        "Египет;Каир",
        "Замбия;Лусака",
        "Зимбабве;Хараре",
        "Израиль;Иерусалим",
        "Индия;Нью-Дели",
        "Индонезия;Джакарта",
        "Иордания;Амман",
        "Ирак;Багдад",
        "Иран;Тегеран",
        "Ирландия;Дублин",
        "Исландия;Рейкьявик",
        "Испания;Мадрид",
        "Италия;Рим",
        "Йемен;Сана",
        "Кабо-Верде;Прая",
        "Казахстан;Астана",
        "Камбоджа;Пномпень",
        "Камерун;Яунде",
        "Канада;Оттава",
        "Катар;Доха",
        "Кения;Найроби",
        "Кипр;Никосия",
        "Киргизия;Бишкек",
        "Кирибати;Южная Тарава",
        "Китай;Пекин",
        "Колумбия;Санта-Фе-де-Богота",
        "Коморы;Морони",
        "Конго, демократическая республика;Киншаса",
        "Конго, республика;Браззавиль",
        "Коста-Рика;Сан-Хосе",
        "Кот-д’Ивуар;Ямусукро",
        "Куба;Гавана",
        "Кувейт;Эль-Кувейт",
        "Лаос;Вьентьян",
        "Латвия;Рига",
        "Лесото;Масеру",
        "Либерия;Монровия",
        "Ливан;Бейрут",
        "Ливия;Триполи",
        "Литва;Вильнюс",
        "Лихтенштейн;Вадуц",
        "Люксембург;Люксембург",
        "Маврикий;Порт-Луи",
        "Мавритания;Нуакшот",
        "Мадагаскар;Антананариву",
        "Македония;Скопье",
        "Малави;Лилонгве",
        "Малайзия;Куала-Лумпур",
        "Мали;Бамако",
        "Мальдивы;Мале",
        "Мальта;Валлетта",
        "Марокко;Рабат",
        "МаршалловыОстрова;Маджуро",
        "Мексика;Мехико",
        "Мозамбик;Мапуту",
        "Молдавия;Кишинев",
        "Монако;Монако",
        "Монголия;Улан-Батор",
        "Мьянма;Найпьидо",
        "Намибия;Виндхук",
        "Непал;Катманду",
        "Нигер;Ниамей",
        "Нигерия;Абуджа",
        "Нидерланды;Амстердам",
        "Никарагуа;Манагуа",
        "Новая Зеландия;Веллингтон",
        "Норвегия;Осло",
        "Объединенные Арабские Эмираты;Абу-Даби",
        "Оман;Маскат",
        "Пакистан;Исламабад",
        "Палау;Мелекеок",
        "Панама;Панама",
        "Папуа-Новая Гвинея;Порт-Морсби",
        "Парагвай;Асунсьон",
        "Перу;Лима",
        "Польша;Варшава",
        "Португалия;Лиссабон",
        "Россия;Москва",
        "Руанда;Кигали",
        "Румыния;Бухарест",
        "Сальвадор;Сан-Сальвадор",
        "Самоа;Апиа",
        "Сан-Марино;Сан-Марино",
        "Сан-Томе и Принсипи;Сан-Томе",
        "Саудовская Аравия;Эр-Рияд",
        "Свазиленд;Мбабане",
        "Северная Корея;Пхеньян",
        "Сейшелы;Виктория",
        "Сенегал;Дакар",
        "Сент-Винсент и Гренадины;Кингстаун",
        "Сент-Китс и Невис;Бастер",
        "Сент-Люсия;Кастри",
        "Сербия;Белград",
        "Сингапур;Сингапур",
        "Сирия;Дамаск",
        "Словакия;Братислава",
        "Словения;Любляна",
        "Соединенные Штаты Америки;Вашингтон",
        "Соломоновы Острова;Хониара",
        "Сомали;Могадишо",
        "Судан;Хартум",
        "Суринам;Парамарибо",
        "Сьерра-Леоне;Фритаун",
        "Таджикистан;Душанбе",
        "Таиланд;Бангкок",
        "Танзания;Додома",
        "Того;Ломе",
        "Тонга;Нукуалофа",
        "Тринидад и Тобаго;Порт-оф-Спейн",
        "Тувалу;Фунафути",
        "Тунис;Тунис",
        "Туркмения;Ашхабад",
        "Турция;Анкара",
        "Уганда;Кампала",
        "Узбекистан;Ташкент",
        "Украина;Киев",
        "Уругвай;Монтевидео",
        "Федеративные штаты Микронезии;Паликир",
        "Фиджи;Сува",
        "Филиппины;Манила",
        "Финляндия;Хельсинки",
        "Франция;Париж",
        "Хорватия;Загреб",
        "Центрально-Африканская Республика;Банги",
        "Чад;Нджамена",
        "Черногория;Подгорица",
        "Чехия;Прага",
        "Чили;Сантьяго",
        "Швейцария;Берн",
        "Швеция;Стокгольм",
        "Шри-Ланка;Коломбо",
        "Эквадор;Кито",
        "Экваториальная Гвинея;Малабо",
        "Эритрея;Асмэра",
        "Эстония;Таллин",
        "Эфиопия;Аддис-Абеба",
        "Южная Корея;Сеул",
        "Южно-Африканская Республика;Претория",
        "Ямайка;Кингстон",
        "Япония;Токио",
    ]

    window.randomString = countryArr[Math.round((Math.random() * (countryArr.length-1)))];
    window.randomCnt = randomString.substr(0, randomString.indexOf(";"));
    window.capital = randomString.substr(randomString.lastIndexOf(";")+1);
    window.flagDir = "../images/flags/" + randomCnt + ".png";

    console.log(randomString);
    console.log(randomCnt);
    console.log(capital);

    document.getElementById("tdCountry").innerHTML = randomCnt;
    document.getElementById("tdCapital").innerHTML = hideCapital(capital);
    document.getElementById("tdFlag").setAttribute("src", flagDir);
}

function hideCapital(capital) {
    window.answer = Array.from(capital);
    console.log(answer);
    for (let i = 0; i < answer.length; i++) {
        console.log(answer[i]);
        console.log(answer.length);
        if (answer[i] !== "-" || answer[i] !== " " || answer[i] !== "," || answer[i] !== "’"){
            answer[i] = "*";
        }
    }
    return answer.join("");
}
function checkAnswer(e) {
    let key = String.fromCharCode(e.keyCode);

    for (let i = 0; i < capital.length; i++) {
        if(capital[i] === key){
            console.log("right!")
            window.answer[i] = key;

        }
    }
    document.getElementById("tdCapital").innerHTML = answer.join("");
}