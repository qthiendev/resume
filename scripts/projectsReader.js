function fetchProjects() {
	fetch('./data/projects.json')
		.then((response) => response.json())
		.then((data) => {
			renderProjects(data);
			document.dispatchEvent(new Event("projectLoaded"));
		})
		.catch((error) => console.error('Error loading Projects:', error));
}

function renderProjects(data) {
	const projectContainer = document.getElementById('my-project');

	const timeList = projectContainer.querySelector('.project-info-time');
	const descriptionList = projectContainer.querySelector('.project-info-description');
	timeList.innerHTML = '';
	descriptionList.innerHTML = '';

	data.projects.forEach((item) => {
		const timeElement = document.createElement('li');
		timeElement.className = 'project-time';
		timeElement.id = `${item.id}-time`;
		timeElement.innerHTML = `<p>${item.time}</p>`;
		timeList.appendChild(timeElement);

		const descriptionElement = document.createElement('li');
		descriptionElement.className = 'info-description-li';
		descriptionElement.id = `${item.id}-description`;

		const linkStart = item.link ? `<a href="${item.link}" target="_blank">` : '';
		const linkEnd = item.link ? `</a>` : '';

		descriptionElement.innerHTML = `
			${linkStart}
			<div class="project-header">
				<p class="project-position">${item.title}</p>
				<p class="project-company">${item.company}</p>
			</div>
			<ul class="project-description">
				${item.details.map((detail) => `<li><p>${detail}</p></li>`).join('')}
			</ul>
			${linkEnd}
		`;
		descriptionList.appendChild(descriptionElement);
	});
}

fetchProjects();
