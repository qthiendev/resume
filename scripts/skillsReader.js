function fetchSkills() {
	fetch('./data/skills.json')
		.then((response) => response.json())
		.then((data) => renderSkills(data))
		.catch((error) => console.error('Error loading Skills:', error));
}

function renderSkills(data) {
	const skillContainer = document.getElementById('my-skill');

	const mainBody = skillContainer.querySelector('.main-body');
	mainBody.innerHTML = '';

	data.skills.forEach((row, rowIndex) => {
		const ul = document.createElement('ul');
		row.icons.forEach((icon, iconIndex) => {
			const li = document.createElement('li');
			li.innerHTML = `<img class="skill-icon" src="${icon.src}" alt="${icon.alt}" />`;
			ul.appendChild(li);
		});
		mainBody.appendChild(ul);
	});
}

fetchSkills();
