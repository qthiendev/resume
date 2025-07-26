function adjustExperienceHeight() {
	const timeElements = document.querySelectorAll('.experience-time');
	const descriptionElements = document.querySelectorAll('.experience-info-description .info-description-li');

	timeElements.forEach((timeElement, index) => {
		const descriptionElement = descriptionElements[index];
		if (descriptionElement) {
			timeElement.style.height = `${descriptionElement.offsetHeight + 40}px`;
		}
	});
}

function adjustProjectHeight() {
	const timeElements = document.querySelectorAll('.project-time');
	const descriptionElements = document.querySelectorAll('.project-info-description .info-description-li');

	timeElements.forEach((timeElement, index) => {
		const descriptionElement = descriptionElements[index];
		if (descriptionElement) {
			timeElement.style.height = `${descriptionElement.offsetHeight + 40}px`;
		}
	});
}

function adjustEducationHeight() {
	const timeElements = document.querySelectorAll('.education-time');
	const descriptionElements = document.querySelectorAll('.education-info-description .info-description-li');

	timeElements.forEach((timeElement, index) => {
		const descriptionElement = descriptionElements[index];
		if (descriptionElement) {
			timeElement.style.height = `${descriptionElement.offsetHeight + 40}px`;
		}
	});
}

const loaders = [
	new Promise((resolve) => document.addEventListener("experienceLoaded", resolve)),
	new Promise((resolve) => document.addEventListener("educationLoaded", resolve)),
	new Promise((resolve) => document.addEventListener("projectsLoaded", resolve)),
];

Promise.race([
	Promise.all(loaders),
	new Promise((resolve) => setTimeout(resolve, 1000))
]).then(() => {
	const overlay = document.getElementById("loading-overlay");
	overlay.classList.add("hidden");

	const sections = document.querySelectorAll(".fade-up");
	sections.forEach((section) => {
		section.classList.add("show");
	});

	adjustExperienceHeight();
	adjustProjectHeight();
	adjustEducationHeight();
});

window.onresize = () => {
	adjustExperienceHeight();
	adjustProjectHeight();
	adjustEducationHeight();
};
