// Code for the carousel

const carousel = document.querySelector("#carousel");
const container = document.querySelector(".carousel-container");
const images = document.querySelectorAll(".carouselImage");
const prevButton = document.querySelector(".btn-previous");
const nextButton = document.querySelector(".btn-next");
let currentIndex = 0;

function showImage(index) {
    const translateValue = -100 * index; // Calculate the translation
    container.style.transform = `translateX(${translateValue}%)`;
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

showImage(currentIndex);



// Translation with json

function translatePage(language) {
    fetch('lang.json')
        .then(response => response.json())
        .then(translations => {
            const elements = document.querySelectorAll('.translatable');
            elements.forEach(element => {
                const key = element.getAttribute('data-key');
                const translation = translations[language][key];
                element.textContent = translation;
            });
        })
        .catch(error => console.error('Error loading translations', error));
}

translatePage('nl');

const languageSelector = document.getElementById('language-selector');
languageSelector.addEventListener('change', function () {
    const selectedLanguage = languageSelector.value;
    translatePage(selectedLanguage);
});



// (Hamburger)Menu op mobiel

let state = 0;
function openNav(){
    if (state == 0) {
        document.getElementById('navmenu').style.display = "initial";
        // document.getElementById('header').classList.add("blur-phone");
        state = 1;
    } else {
        document.getElementById('navmenu').style.display = "none";
        state = 0;
    }
}



// sticky navigation

const header = document.querySelector("#header");
const toggleClass = "is-sticky";
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});
