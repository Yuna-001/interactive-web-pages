const subscribeForm = document.querySelector(".newsletter form");

subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const fd = new FormData(event.target);
  const email = fd.get("email");
  const isValidEmail = validateEmail(email);

  if (!isValidEmail) {
    const errorText = document.querySelector(".error-text");
    errorText.style.display = "block";

    this.addEventListener(
      "input",
      () => {
        errorText.style.display = "none";
      },
      { once: true }
    );
  }
});

function validateEmail(email) {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

  return pattern.test(email);
}
