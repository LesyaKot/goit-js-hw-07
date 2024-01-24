// `use strict`;

const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const userEmail = event.currentTarget.elements.email.value.trim();
  const userPassword = event.currentTarget.elements.password.value.trim();

  const button = document.querySelector(".Login");
  console.log(button);

  if (userEmail === "" || userPassword === "") {
    return alert("All form fields must be filled in");
  } else {
    const result = {
      email: userEmail,
      password: userPassword,
    };

    console.log(result);
    loginForm.reset();
  }
});
