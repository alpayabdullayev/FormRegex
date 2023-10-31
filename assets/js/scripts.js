// getElementById
const container = document.getElementById("container");
const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const btn = document.getElementById("btn");

// ErrorText
const errorText = document.querySelector("span");
errorText.style.color = "red";

//Regex
const userNameSurNameRegex =
  /^[A-ZƏŞÇÖÜ][a-zəşçöğıüğ]{1,24}\s[A-ZƏŞÇÖÜ][a-zəşçöğıüüğ]{2,24}$/;

const passwordRegex = /^[A-Z][a-zA-z.\d]{7,20}$/;

//Event
btn.addEventListener("click", (event) => {
  event.preventDefault();
  errorText.textContent = "";


  //if (condition)
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
    //SuccesMesage
    const successMessage = document.createElement("div");
    successMessage.textContent = "Qeydiyyat başa çatdı";
    successMessage.style.color = "green";
    successMessage.style.textAlign = "center";
    successMessage.style.fontSize = "32px";
    form.appendChild(successMessage);
    setTimeout(() => {successMessage.textContent = '';}, 3000);
  }

  //sıfırlamaq
  firstName.value = "";
  password.value = "";
  confirmPassword.value = "";
  
});
