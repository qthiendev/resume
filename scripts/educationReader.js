function fetchEducation() {
    fetch('./data/education.json')
        .then((response) => response.json())
        .then((data) => { 
            renderEducation(data);
            document.dispatchEvent(new Event("educationLoaded")); 
        })
        .catch((error) => console.error('Error loading Education:', error));
}

function renderEducation(data) {
    const educationContainer = document.getElementById('my-education');

    const timeList = educationContainer.querySelector('.education-info-time');
    const descriptionList = educationContainer.querySelector('.education-info-description');
    timeList.innerHTML = '';
    descriptionList.innerHTML = '';

    data.education.forEach((item, index) => {
        const timeElement = document.createElement('li');
        timeElement.className = 'education-time';
        timeElement.id = `${item.id}-time`;
        timeElement.innerHTML = `<p>${item.time}</p>`;
        timeList.appendChild(timeElement);

        const descriptionElement = document.createElement('li');
        descriptionElement.className = 'info-description-li';
        descriptionElement.id = `${item.id}-description`;

        const linkStart = item.href ? `<a href="${item.href}" target="_blank">` : '';
        const linkEnd = item.href ? `</a>` : '';

        descriptionElement.innerHTML = `
            ${linkStart}
            <div class="education-header">
                <p class="education-position">${item.degree}</p>
                <p class="education-company">${item.institution}</p>
            </div>
            <ul class="education-description">
                ${item.details.map((detail) => `<li><p>${detail}</p></li>`).join('')}
            </ul>
            ${linkEnd}
        `;
        descriptionList.appendChild(descriptionElement);
    });
}

fetchEducation();