// FACTORY PHOTOGRAPHER HEADER
function photographerHeader(data) {
  const { name, id, city, country, tagline, price, portrait } = data;
  const picture = `img/photographers_id/${portrait}`;

  function getUserCardDOM() {
    let article = document.createElement("article");
    article.classList.add("main--presentation__article");
    const idPhotographer = window.location.search.split("id=")[1];

    if (idPhotographer == id) {
      const templateProfil = ` 
            <div class="main--presentation__article--photograph">
                <h2 class="main--presentation__article--photograph__name">${name}</h2>
                <p class="main--presentation__article--photograph__loca">${city}, ${country}</p>
                <p class="main--presentation__article--photograph__description">${tagline}</p>
            </div>
            <button class="main--presentation__article--btn">Contactez-moi</button>
            <a href='#'><img src="${picture}"></a>`;
      article.innerHTML = templateProfil;
    }
    return article;
  }
  return { getUserCardDOM };
}

// FACTORY MEDIA
function mediasFactory(data) {
  const { id, photographerId, title, video, image, likes, date, price } = data;
  // Permet de récupérer le nom du photographe pour afficher les médias
  let showName = document.getElementsByClassName("main--presentation__article--photograph__name")[0].innerHTML;
  const pictureImg = `img/photographers_pictures/${showName}/${image}`;
  const pictureVideo = `img/photographers_pictures/${showName}/${video}`;

  function getUserCardDOM(nbLikes) {
    let article = document.createElement("article");
    article.classList.add("main--medias__article");
    let templateMedia = ``;

    if (data.image) {
      templateMedia = `<img src="${pictureImg}" "alt="Photographie s'intitulant ${title}">`;
    } else {
      templateMedia = `<video src="${pictureVideo}" "alt="Vidéo s'intitulant ${title}">`;
    }

    let templateArticleMedias = `
    <a href="#" class="main--medias__article--redirect">
      ${templateMedia}
    </a>
    <div class="main--medias__article--description">
      <h2 class="main--medias__article--description__title">${title}</h2>
      <div class="main--medias__article--description__like">
        <span class="main--medias__article--description__like--number">${likes}</span>
        <i id="icon" class="far fa-heart main--medias__article--description__like--heart"></i>
      </div>
    </div>
    `;

    article.innerHTML = templateArticleMedias;

    // Gère le nb de likes
    const displayLikes = document.getElementsByClassName("main--totaLike__number")[0];
    displayLikes.innerHTML = nbLikes;
    
    // Appelle la function generateContact() pour display la modale
    generateContact();

    // Appelle la function generateSliderLightbox() pour display la lightbox
    generateSliderLightbox();

    return article;
  }
  return { getUserCardDOM };
}