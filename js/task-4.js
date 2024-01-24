// `use strict`;

const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = document.querySelector(".email");
  const passwordInput = document.querySelector(".password");

  const userEmail = emailInput.value.trim();
  const userPassword = passwordInput.value.trim();

  const button = document.querySelector(".Login");
  console.log(button);

  if (userEmail === "" || userPassword === "") {
    return alert ("All form fields must be filled in");
  } else {
    const result = {
      email: userEmail,
      password: userPassword,
    };
  }
});
