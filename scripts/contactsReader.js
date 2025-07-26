function fetchContacts() {
	fetch('./data/contacts.json')
		.then(response => response.json())
		.then(data => populateContacts(data))
		.catch(error => console.error('Error loading contacts:', error));
}

function populateContacts(data) {
	const contactsSection = document.querySelector('.contacts .sidebar-body ul');
	contactsSection.innerHTML = '';

	data.contacts.forEach(contact => {
		const contactItem = document.createElement('li');
		contactItem.innerHTML = `
			<img class="contact-icon" src="./img/${contact.icon}" alt="${contact.alt}" />
			${contact.link ? `<a href="${contact.link}" target="_blank">${contact.text}</a>` : `<p>${contact.text}</p>`}
		`;
		contactsSection.appendChild(contactItem);
	});
}

fetchContacts();
