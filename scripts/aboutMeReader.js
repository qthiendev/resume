function fetchAboutMe() {
	fetch('./data/aboutMe.json')
		.then((response) => response.json())
		.then((data) => renderAboutMe(data))
		.catch((error) => console.error('Error loading About Me:', error));
}

function renderAboutMe(data) {
	const aboutMeContainer = document.getElementById('about-me');

	const headerElement = (document.getElementById('about-me')).querySelector('.header-name');
	headerElement.innerText = data.aboutMe.header;

	const mainBody = aboutMeContainer.querySelector('.main-body');
	mainBody.innerHTML = '';
	data.aboutMe.description.forEach((paragraph) => {
		const p = document.createElement('p');
		p.innerText = paragraph;
		mainBody.appendChild(p);
	});
}

fetchAboutMe();
