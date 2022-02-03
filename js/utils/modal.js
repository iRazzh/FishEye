/* MODALE SLIDER */

function generateSliderLightbox() {
    const items = document.getElementsByClassName("main--modal__allImg--pictures");
    const nbSlide = items.length;
    const aModal = document.getElementsByClassName("main--medias__article--redirect");
    const modal = document.getElementsByClassName("main--modal")[0];
    const btnClose = document.getElementsByClassName("main--modal__close")[0];
    const btnContact = document.getElementsByClassName("main--presentation__article--btn")[0];
    
    const precedent = document.querySelector(".btnLeft");
    const suivant = document.querySelector(".btnRight");
    
    let count = 0;
    
    function slidePrecedent() {
      items[count].classList.remove("active");
    
      if (count > 0) {
        count--;
      } else {
        count = nbSlide - 1;
      }
      items[count].classList.add("active");
    }
    precedent.addEventListener("click", slidePrecedent);
    
    function slideSuivante() {
      items[count].classList.remove("active");
    
      if (count < nbSlide - 1) {
        count++;
      } else {
        count = 0;
      }
      items[count].classList.add("active");
    }
    suivant.addEventListener("click", slideSuivante);

    
    function closeModal() {
        if (document.querySelector('.main--modal__allImg img.active') !== null) {
          document.querySelector('.main--modal__allImg img.active').classList.remove('active');
        } else if (document.querySelector('.main--modal__allImg video.active') !== null) {
          document.querySelector('.main--modal__allImg video.active').classList.remove('active');
        }
        modal.style.display = "none";
        if (modal.style.display == "none") {
          btnContact.style.display = "block";
        }
    }
    btnClose.addEventListener("click", closeModal);
    
    function openModal(position) {
      document.querySelector(`.main--modal__allImg--pictures:nth-child(${position})`).classList.add("active")
      modal.style.display = "block";
      if (modal.style.display == "block") {
        btnContact.style.display = "none";
      }
    }
    
    let countModal = 0;
    for (i = 0; i < aModal.length; i++) {
      truc = aModal[i].getAttribute("id")
      aModal[i].addEventListener("click", (e) => {
        count = e.target.parentNode.getAttribute("id")-1
        openModal(count+1)
      });
      countModal++
    }
    
    function keyPress(e) {
      if(e.keyCode === 37) {
          slidePrecedent();
      } else if(e.keyCode === 39) {
        slideSuivante();
      }
    }
    document.addEventListener('keydown', keyPress);
}