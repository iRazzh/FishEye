/* MODALE CONTACT */
function generateContact() {
    const btnOpenModal = document.getElementsByClassName(
      "main--presentation__article--btn"
    )[0];
    const btnCloseModal =
      document.getElementsByClassName("main--form__send")[0];
    const btnCloseModalCroix = document.getElementsByClassName(
      "main--form__titleClose--closeModal"
    )[0];
    const form = document.getElementById("contact_modal");

    function displayModal() {
      form.style.display = "block";

      if (form.style.display !== "none") {
        btnOpenModal.style.display = "none";
      }
    }
    btnOpenModal.addEventListener("click", displayModal);

    function closeModal(event) {
      form.style.display = "none";
      if (form.style.display == "none") {
        event.preventDefault();
        btnOpenModal.style.display = "block";
      }
    }
    btnCloseModal.addEventListener("click", closeModal);
    btnCloseModalCroix.addEventListener("click", closeModal);
  }