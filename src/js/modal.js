export function initializeModal() {
  const modal = document.querySelector(".modal");
  const form = document.querySelector(".modal__contact-form");
  const modalInner = document.querySelector(".modal__inner");
  const modalBtn = document.querySelectorAll(".contacts__btn");

  modalBtn.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation();
      modal.style.display = "block";
    });
  });

  window.addEventListener("click", (event) => {
    if (!modalInner.contains(event.target) && modal.style.display === "block") {
      modal.style.display = "none";
    }
  });

  //-------------------------------------------------------------------

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (isValid()) {
      console.log("Complete!");
      modal.style.display = "none";
    }
  });

  function isValid() {
    let isValidForm = true;

    const nameInput = form.elements[0];
    const nameErorr = document.querySelector(".modal__error-name");
    nameErorr.style.display = "none";

    if (!nameInput.value.trim()) {
      nameErorr.style.display = "block";
      isValidForm = false;
    }

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const mailInput = form.elements[1];
    const mailError = document.querySelector(".modal__error-email");
    mailError.style.display = "none";

    if (!regex.test(mailInput.value)) {
      mailError.style.display = "block";
    }

    const messageInput = form.elements[2];
    const messageError = document.querySelector(".modal__error-message");
    messageError.style.display = "none";

    if (messageInput.value.trim().length < 10) {
      messageError.style.display = "block";
      isValidForm = false;
    }
    return isValidForm;
  }
}
