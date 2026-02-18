/* =========================
  Hämtar HTML-element så JS kan läsa och uppdatera formuläret.
========================= */
const form = document.querySelector(".contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const formMessage = document.querySelector("#formMessage");


/* =========================
  Visar fel eller success direkt i gränssnittet (inte alert).
  type används som CSS-klass: "error" eller "success".
========================= */
function showMessage(text, type) {
  formMessage.textContent = text;
  formMessage.className = type;
}


/* =========================
  En enkel kontroll som avgör om e-post ser rimlig ut.
  Returnerar true/false.
========================= */
function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}


/* =========================
  1) Stoppar standard-submit med preventDefault()
  2) Läser in data från fälten
  3) Validerar steg för steg
  4) Visar fel i UI eller success + reset
========================= */
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
