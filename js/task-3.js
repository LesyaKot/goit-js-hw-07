"use strict";

const nameInput = document.getElementById(`name-input`);
const nameOutput = document.getElementById(`name-output`);

nameInput.addEventListener(`input`, () => {
  const username = nameInput.value.trim();
  if (username === "") {
    nameOutput.textContent = `Anonymous`;
  } else {
    nameOutput.textContent = username;
  }
});
