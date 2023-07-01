const inputName = document.querySelector(".input__name");
const labelName = document.querySelector(".label__name");
const inputEmail = document.querySelector(".input__email");
const labelEmail = document.querySelector(".label__email");

inputName.addEventListener("input", function () {
  if (inputName.value.trim() !== "") {
    labelName.classList.add("active");
  } else {
    labelName.classList.remove("active");
  }
});

inputEmail.addEventListener("input", function () {
  if (inputEmail.value.trim() !== "") {
    labelEmail.classList.add("active");
  } else {
    labelEmail.classList.remove("active");
  }
});
