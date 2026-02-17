const form = document.querySelector(".contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const formMessage = document.querySelector("#formMessage");

function showMessage(text, type) {
  formMessage.textContent = text;
  formMessage.className = type; // "error" eller "success"
}

function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name.length < 2) {
    showMessage("Namn måste vara minst 2 tecken.", "error");
    return;
  }

  if (!isValidEmail(email)) {
    showMessage("Skriv en giltig e-postadress.", "error");
    return;
  }

  if (message.length < 10) {
    showMessage("Meddelandet måste vara minst 10 tecken.", "error");
    return;
  }

  showMessage("Ditt meddelande har skickats. Tack!", "success");
  form.reset();
});