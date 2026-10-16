// Альбомы
const albums = [
  {
    title: "Pablo Honey",
    year: 1993,
    image: "images/albom_01.jpg",
    text: "Дебютный альбом с гитарным альтернативным роком. На нём вышел сингл \"Creep\", который сделал группу известной."
  },
  {
    title: "The Bends",
    year: 1995,
    image: "images/albom_02.jpg",
    text: "Более зрелые и мелодичные песни, среди них \"Fake Plastic Trees\" и \"Street Spirit (Fade Out)\"."
  },
  {
    title: "OK Computer",
    year: 1997,
    image: "images/albom_03.jpg",
    text: "Альбом о технологиях и одиночестве с песнями \"Paranoid Android\" и \"Karma Police\". Часто попадает в списки лучших альбомов всех времён."
  },
  {
    title: "Kid A",
    year: 2000,
    image: "images/albom_04.jpg",
    text: "Резкий поворот к электронике. Гитары отошли на второй план, а голос Тома Йорка часто звучит как ещё один инструмент."
  },
  {
    title: "Amnesiac",
    year: 2001,
    image: "images/albom_05.jpg",
    text: "Записан в тех же сессиях, что и Kid A. Сюда вошли \"Pyramid Song\" и \"Knives Out\"."
  },
  {
    title: "Hail to the Thief",
    year: 2003,
    image: "images/albom_06.jpg",
    text: "Здесь снова больше гитар, но электроника тоже осталась. Одна из самых известных песен альбома - \"There There\"."
  },
  {
    title: "In Rainbows",
    year: 2007,
    image: "images/albom_07.jpg",
    text: "Группа выложила его в интернет и разрешила слушателям самим выбрать цену. Тёплый и мягкий альбом с песнями \"Nude\" и \"Reckoner\"."
  },
  {
    title: "The King of Limbs",
    year: 2011,
    image: "images/albom_08.jpg",
    text: "Короткий альбом из восьми треков, построенный на ритмах, петлях и сэмплах."
  },
  {
    title: "A Moon Shaped Pool",
    year: 2016,
    image: "images/albom_09.jpg",
    text: "Спокойный альбом со струнными и хором, которые аранжировал Джонни Гринвуд. Заканчивается песней \"True Love Waits\"."
  }
];

// Факты
const facts = [
  "Сначала группа называлась On a Friday, потому что по пятницам у них были репетиции.",
  "Название Radiohead взято из песни Talking Heads \"Radio Head\".",
  "Состав группы ни разу не менялся: все пятеро играют вместе с середины 80-х.",
  "Kid A и Amnesiac записаны в одних и тех же студийных сессиях и вышли с разницей меньше чем в год.",
  "В 2007 году In Rainbows выпустили в интернете по принципу \"заплатите, сколько хотите\". Для известной группы это было очень необычно.",
  "Джонни Гринвуд играет на волнах Мартено, редком электронном инструменте, придуманном ещё в 1920-х.",
  "Продюсер Найджел Годрич записывает с группой все студийные альбомы, начиная с OK Computer.",
  "Песню \"True Love Waits\" группа играла на концертах больше двадцати лет, прежде чем записала её для A Moon Shaped Pool.",
  "OK Computer и Kid A получили \"Грэмми\" как лучшие альтернативные альбомы.",
  "В 2019 году Radiohead включили в Зал славы рок-н-ролла."
];


const themeBtn = document.getElementById("theme-btn");

function setTheme(dark) {
  document.body.classList.toggle("dark", dark);
  themeBtn.textContent = dark ? "Светлая тема" : "Тёмная тема";
}

setTheme(localStorage.getItem("theme") === "dark");

themeBtn.addEventListener("click", function () {
  const dark = !document.body.classList.contains("dark");
  setTheme(dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
});


const moreButtons = document.querySelectorAll(".more-btn");

moreButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const text = button.nextElementSibling;
    text.hidden = !text.hidden;
    button.textContent = text.hidden ? "Подробнее" : "Скрыть";
  });
});


// Альбомы
let albumIndex = 0;

function showAlbum() {
  const album = albums[albumIndex];
  document.getElementById("album-img").src = album.image;
  document.getElementById("album-img").alt = "Обложка альбома " + album.title;
  document.getElementById("album-title").textContent = album.title;
  document.getElementById("album-year").textContent = album.year;
  document.getElementById("album-text").textContent = album.text;
  document.getElementById("album-counter").textContent = (albumIndex + 1) + " / " + albums.length;
}

document.getElementById("next-album").addEventListener("click", function () {
  albumIndex++;
  if (albumIndex === albums.length) albumIndex = 0;
  showAlbum();
});

document.getElementById("prev-album").addEventListener("click", function () {
  albumIndex--;
  if (albumIndex < 0) albumIndex = albums.length - 1;
  showAlbum();
});

showAlbum();


// Факты
let factIndex = 0;
const factsSection = document.getElementById("facts");

function showFact() {
  document.getElementById("fact-text").textContent = facts[factIndex];
  document.getElementById("fact-number").textContent = "Факт " + (factIndex + 1) + " из " + facts.length;
}

function openFacts(event) {
  event.preventDefault();
  factsSection.hidden = false;
  factsSection.scrollIntoView({ behavior: "smooth" });
}

document.getElementById("show-facts").addEventListener("click", openFacts);
document.getElementById("nav-facts").addEventListener("click", openFacts);

document.getElementById("next-fact").addEventListener("click", function () {
  factIndex++;
  if (factIndex === facts.length) factIndex = 0;
  showFact();
});

showFact();
