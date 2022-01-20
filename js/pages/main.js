async function displayData(photographers) {
    const photographersSection = document.querySelector(".authors");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
	fetch("./js/data/photographers.json")
	.then(response => {
		return response.json()
	})
	.then(myData => {
		displayData(myData.photographers);
	})
};

init();