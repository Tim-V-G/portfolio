// Translation for project pages

function translatePage(language) {
    fetch('../lang.json')
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

const languageSelectorProjects = document.querySelector('.language-selectorProjects');
languageSelectorProjects.addEventListener('change', function () {
    const selectedLanguageProject = languageSelectorProjects.value;
    translatePage(selectedLanguageProject);
});