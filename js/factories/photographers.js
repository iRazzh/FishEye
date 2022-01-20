function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;
    const picture = `img/photographers_id/${portrait}`;
    const linkTo = `photographers.html?id=${id}`;

    function getUserCardDOM() {
        let article = document.createElement( 'article' );
        article.classList.add('authors--article')

        let templateArticleIndex = `
        <a href="${linkTo}" class="authors--article__redirection">
            <img src="${picture}" "alt="Portrait de l'artiste ${name}" class="authors--article__redirection--img">
            <h2 class="authors--article__redirection--name">${name}</h2>
        </a>
        <p class="authors--article__loca">${city}, <span class="author--loca__country">${country}</span></p>
        <p class="authors--article__description">${tagline}</p>
        <p class="authors--article__price">${price}€/jour</p>
        `
        article.innerHTML = templateArticleIndex;
        return article;
    }
    return { getUserCardDOM }
}