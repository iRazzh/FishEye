// ADD HEADER PHOTOGRAPHER
async function displayDataPhotographer(photographers) {
  const photographersSection = document.querySelector(".main--presentation");

  photographers.forEach((photographer) => {
    const photographerModel = photographerHeader(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}
// INIT HEADER PHOTOGRAPHER
async function initPhotographer() {
  fetch("./js/data/photographers.json")
    .then((response) => {
      return response.json();
    })
    .then((myData) => {
      displayDataPhotographer(myData.photographers);
    });
}
initPhotographer();

/***************************************************************************/

// ADD MEDIAS PHOTOGRAPHERS
async function displayData(medias, id, nbLikes) {
  // Récupère la section pour les medias
  const mediasSection = document.querySelector(".main--medias");
  const mediasLightbox = document.querySelector(".main--modal__allImg"); // Ajout de la section comprenant la Lightbox
  // Permet de reset "mediasSection"
  mediasSection.innerHTML = "";
  mediasLightbox.innerHTML = "";


  // TRI PAR MEDIAS
  let mediaArray = [];
  let dataMedias = medias;
  let btnSort = document.getElementById("orderby");

  btnSort.addEventListener("change", () => {
    if (btnSort.value == "popularite") {
      mediaArray = dataMedias.sort((a, b) => {
        return b.likes - a.likes;
      });
    } else if (btnSort.value == "date") {
      mediaArray = dataMedias.sort((a, b) => {
        return new Date(a.date).valueOf() - new Date(b.date).valueOf();
      });
    } else if (btnSort.value == "titre") {
      mediaArray = dataMedias.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        }
      });
    }
    allLikes(dataMedias, id)
  });

  // Permet de récupérer la page du photographe correspondant à son id
  nbMedias = 0;
  medias.forEach((media) => {
    if (id == media.photographerId) {
      nbMedias++
      const mediasModel = mediasFactory(media, nbLikes);
      const userCardDOM = mediasModel.getUserCardDOM(nbLikes, nbMedias);
      const userCardLightbox = mediasModel.getUserCardLightbox();
      mediasSection.appendChild(userCardDOM);
      mediasLightbox.appendChild(userCardLightbox);
    }
  });
  // Appelle la function generateContact() pour display la modale
  generateContact();
  // Appelle la function generateSliderLightbox() pour display la lightbox
  generateSliderLightbox();
}
  // INIT MEDIAS PHOTOGRAPHERS
  async function init() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
    
    fetch("./js/data/photographers.json")
    .then((response) => {
      return response.json();
    })
    .then((myData) => {
      myData.media = myData.media.sort((a, b) => {
        return b.likes - a.likes;
      });
      allLikes(myData.media,id)
    });
  }
  init();

  function allLikes(myData, id) {
    // Récupère les likes pour les afficher
    let likesTotalPhotographers = [];
    for (let i = 0; i < myData.length; i++) {
      if(myData[i].photographerId == id) {
        let likesPhoto = myData[i].likes;
        likesTotalPhotographers.push(likesPhoto);
      }
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const likesTotal = likesTotalPhotographers.reduce(reducer);
    displayData(myData, id, likesTotal);

    // Rends les likes dynamiques au click
    const heartLiked = document.querySelectorAll(".main--medias__article--description__like");
    heartLiked.forEach(function(e) {
      e.addEventListener("click", function () {
        let elementCounter = e.querySelector(".main--medias__article--description__like--number");
        let buttonIcon = e.querySelector(".fa-heart")
        let likeSum = Number(elementCounter.textContent);
        const liked = e.dataset.liked === "true";
        e.dataset.liked = !liked;
        elementCounter.innerHTML = likeSum +(!liked ? 1 : -1);
        let total = document.querySelector(".main--totaLike__number");
        if(liked) {
          buttonIcon.classList.add("far");
          buttonIcon.classList.remove("fas");
          total.innerHTML = Number(total.innerHTML) - 1;
        } else if (!liked) {
          buttonIcon.classList.add("fas");
          buttonIcon.classList.remove("far");
          total.innerHTML = Number(total.innerHTML) + 1;
        }
      })
    })
  }