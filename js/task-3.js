`use strict`;

const nameInput = document.getElementById(`name-input`);
const nameOutput = document.getElementById(`name-output`);

nameInput.addEventListener(`input`, () => {
  const username = nameInput.value.trim();
  if (username === "") {
    nameOutput.textContent = `Anonimus`;
  } else {
    nameOutput.textContent = username;
  }
});
