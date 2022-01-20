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
    
    function nextSlide() {
      items[count].classList.remove("active");
    
      if (count > 0) {
        count--;
      } else {
        count = nbSlide - 1;
      }
      items[count].classList.add("active");
      console.log(count);
    }
    precedent.addEventListener("click", nextSlide);
    
    function slideSuivante() {
      items[count].classList.remove("active");
    
      if (count < nbSlide - 1) {
        count++;
      } else {
        count = 0;
      }
      items[count].classList.add("active");
      console.log(count);
    }
    suivant.addEventListener("click", slideSuivante);
    
    function closeModal() {
      modal.style.display = "none";
      if (modal.style.display == "none") {
        btnContact.style.display = "block";
      }
    }

    btnClose.addEventListener("click", closeModal);
    for (i = 0; i < aModal.length; i++) {
      aModal[i].addEventListener("click", function () {
        modal.style.display = "block";
        if (modal.style.display == "block") {
          btnContact.style.display = "none";

        }
      });
    }
}
