function fetchConnects() {
    fetch('./data/connects.json')
        .then((response) => response.json())
        .then((data) => renderConnects(data))
        .catch((error) => console.error('Error loading connects:', error));
}

function renderConnects(data) {
    const connectsContainer = document.querySelector('.connects .sidebar-body ul');
    connectsContainer.innerHTML = '';

    const listItem = document.createElement('li');

    data.connects.forEach((connect) => {
        const link = document.createElement('a');
        link.href = connect.link;
        link.target = '_blank';

        const icon = document.createElement('img');
        icon.className = 'social-icon';
        icon.src = connect.icon;
        icon.alt = connect.alt;

        link.appendChild(icon);
        listItem.appendChild(link);
    });

    connectsContainer.appendChild(listItem);
}

fetchConnects();
