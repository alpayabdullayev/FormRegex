// getElementById
const container = document.getElementById("container");
const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const btn = document.getElementById("btn");

const errorText = document.querySelector("span");
errorText.style.color = "red";

const userNameSurNameRegex =
  /^[A-ZƏŞÇÖÜ][a-zəşçöğıüğ]{1,24}\s[A-ZƏŞÇÖÜ][a-zəşçöğıüüğ]{2,24}$/;

const passwordRegex = /^[A-Z][a-zA-z.\d]{7,20}$/;

btn.addEventListener("click", (event) => {
  event.preventDefault();
  errorText.textContent = "";

  if (
    firstName.value.trim() === "" ||
    password.value.trim() === "" ||
    confirmPassword.value.trim() === ""
  ) {
    errorText.textContent = "Inputları tam doldurun";
    return -1;
  }

  if (!userNameSurNameRegex.test(firstName.value)) {
    errorText.textContent = "Ad ve Soyadı düzgün daxil edin";
    return;
  }

  if (!passwordRegex.test(password.value)) {
    errorText.textContent = "Kod daxil ederken simvollara diqqet edin";
    return;
  }

  if (password.value !== confirmPassword.value) {
    errorText.textContent = "Kodu düzgün daxil edin";
    return -1;
  } else {
    const successMessage = document.createElement("div");
    successMessage.textContent = "Qeydiyyat başa çatdı";
    successMessage.style.color = "green";
    successMessage.style.textAlign = "center";
    successMessage.style.fontSize = "32px";
    form.appendChild(successMessage);
  }

  firstName.value = "";
  password.value = "";
  confirmPassword.value = "";
});
