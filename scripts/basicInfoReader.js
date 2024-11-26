function fetchBasicInfo() {
    fetch('./data/basic-info.json')
        .then(response => response.json())
        .then(data => populateBasicInfo(data))
        .catch(error => console.error('Error loading basic info:', error));
}

function populateBasicInfo(data) {
    const basicInfo = document.querySelector('.basic-info');
    basicInfo.innerHTML = `
      <p id="name">${data.name}</p>
      <p id="career">${data.career}</p>
      <p id="bio">${data.bio}</p>
    `;

    const avatar = document.querySelector('.avatar');
    avatar.src = data.avatar.src;
    avatar.alt = data.avatar.alt;
}

fetchBasicInfo();
