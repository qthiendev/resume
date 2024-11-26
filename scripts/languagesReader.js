function fetchLanguages() {
    fetch('./data/languages.json')
        .then((response) => response.json())
        .then((data) => renderLanguages(data))
        .catch((error) => console.error('Error loading languages:', error));
}

function renderLanguages(data) {
    const languagesContainer = document.querySelector('.languages .sidebar-body ul');
    languagesContainer.innerHTML = '';

    data.languages.forEach((language) => {
        const languageItem = document.createElement('li');
        languageItem.innerHTML = `
        <img class="contact-icon" src="${language.icon}" alt="${language.alt}" />
        <p>${language.name} (${language.proficiency})</p>
      `;
        languagesContainer.appendChild(languageItem);
    });
}

fetchLanguages();
