/* MODALE CONTACT */
function generateContact() {
    const btnOpenModal = document.getElementsByClassName("main--presentation__article--btn")[0];
    const btnCloseModal = document.getElementsByClassName("main--form__send")[0];
    const btnCloseModalCroix = document.getElementsByClassName("main--form__titleClose--closeModal")[0];
    const btnCloseTotalLikes = document.getElementsByClassName("main--totalLike")[0];
    const form = document.getElementById("contact_modal");

    function displayModal() {
      form.style.display = "block";
      
      if (form.style.display !== "none") {
        btnOpenModal.style.display = "none";
        btnCloseTotalLikes.style.display = "none";
      }
    }
    btnOpenModal.addEventListener("click", displayModal);
    
    function closeModal() {
      form.style.display = "none";
      if (form.style.display == "none") {
        btnOpenModal.style.display = "block";
        btnCloseTotalLikes.style.display = "flex";
      }
    }
    btnCloseModalCroix.addEventListener("click", closeModal);

    
    // Création des différents regex
    const regexNumber = /[0-9]/;
    const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const regexSpecialsCharacters = /[§!@#$%^&*().?":{}|<>]/;

    let validFirstname = false;
    let validLastname = false;
    let validEmail = false;
    let validMessage = false;
    
    function verifFirstname() {
      const firstnameValue = document.getElementById("firstname");
      if (regexNumber.test(firstnameValue.value) == true || regexSpecialsCharacters.test(firstnameValue.value) == true || firstnameValue.value == ' ' || firstnameValue.value == null || firstnameValue.value.length < 2){
        console.log("Problème au niveau du prénom")
        return (validFirstname = false);
      } else {
        console.log("Prénom valide!")
        return (validFirstname = true);
      }
    }
    function verifLastname() {
      const lastnameValue = document.getElementById("lastname");      
      if (regexNumber.test(lastnameValue.value) == true || regexSpecialsCharacters.test(lastnameValue.value) == true || lastnameValue.value == ' ' || lastnameValue.value == null || lastnameValue.value.length < 2){
        console.log("Problème au niveau du nom")
        return (validLastname = false);
      } else {
        console.log("Nom valide!")
        return (validLastname = true);
      }
    }
    function verifEmail() {
      const emailValue = document.getElementById("email");
      if (regexMail.test(emailValue.value) == false){
        console.log("Problème au niveau de l'email")
        return (validEmail = false);
      } else {
        console.log("Email valide!")
        return (validEmail = true);
      }
    }
    function verifMessage() {
      const messageValue = document.getElementById("message");
      if (regexNumber.test(messageValue.value) == true || regexSpecialsCharacters.test(messageValue.value) == true || messageValue.value == ' ' || messageValue.value == null || messageValue.value.length < 2){
        console.log("Problème au niveau du message")
        return (validMessage = false);
      } else {
        console.log("Message valide!")
        return (validMessage = true);
      }
    }

    function formValid(e) {
      e.preventDefault();         

      verifFirstname();
      verifLastname();
      verifEmail();
      verifMessage();
      if (validFirstname === true && validLastname === true && validEmail === true && validMessage === true) {
        closeModal();
      }
    }
    form.addEventListener("submit", formValid);
}

