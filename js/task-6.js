"use strict";

const controls = document.querySelector("#controls");
const inputNumb = controls.querySelector("input");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  destroyBoxes();

  const amount = Number(inputNumb.value);

  if (amount >= 1 && amount <= 100) {
    const arrayOfBoxes = [];

    for (let i = 0; i < amount; i++) {
      const div = document.createElement("div");

      div.style.width = `${30 + i * 10}px`;
      div.style.height = `${30 + i * 10}px`;
      div.style.backgroundColor = getRandomHexColor();
      arrayOfBoxes.push(div);
    }

    boxes.append(...arrayOfBoxes);
  } else {
    alert("Please enter a number between 1 and 100.");
  }

  inputNumb.value = "";
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
