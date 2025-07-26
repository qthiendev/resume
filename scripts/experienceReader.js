function fetchExperience() {
	fetch('./data/experience.json')
		.then((response) => response.json())
		.then((data) => {
			renderExperience(data);
			document.dispatchEvent(new Event("experienceLoaded"));
		})
		.catch((error) => console.error('Error loading experience:', error));
}

function renderExperience(data) {
	const experienceContainer = document.querySelector('#my-experience .main-body');
	const timeList = experienceContainer.querySelector('.experience-info-time');
	const descriptionList = experienceContainer.querySelector('.experience-info-description');

	timeList.innerHTML = '';
	descriptionList.innerHTML = '';

	data.experience.forEach((item, index) => {
		const timeElement = document.createElement('li');
		timeElement.className = 'experience-time';
		timeElement.id = `experience-time-${index}`;
		timeElement.innerHTML = `<p>${item.time}</p>`;
		timeList.appendChild(timeElement);

		const descriptionElement = document.createElement('li');
		descriptionElement.className = 'info-description-li';
		descriptionElement.id = `experience-description-${index}`;

		const linkStart = item.link ? `<a href="${item.link}" target="_blank">` : '';
		const linkEnd = item.link ? `</a>` : '';

		descriptionElement.innerHTML = `
			${linkStart}
			<div class="experience-header">
				<p class="experience-position">${item.position}</p>
				<p class="experience-company">${item.company}</p>
			</div>
			<ul class="experience-description">
				${item.details.map((detail) => `<li><p>${detail}</p></li>`).join('')}
			</ul>
			${linkEnd}
		`;
		descriptionList.appendChild(descriptionElement);
	});
}

fetchExperience();
