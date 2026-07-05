import { validateEmail } from "../model/validate-email.js";
import {showPasswordRules, showOrHidePassword, validatePasswordRules} from "../model/validate-password.js";
import { submitBtn } from "../model/submit-btn.js";

const email = document.getElementById("email");
email.addEventListener("input", () => {
  validateEmail();
  submitBtn();
});

const password = document.getElementById("password");
password.addEventListener("focus", showPasswordRules);

const showHidePassword = document.getElementById("showHidePasswordBtn");
showHidePassword.addEventListener("click", showOrHidePassword);

password.addEventListener("input", () => {
  validatePasswordRules();
  submitBtn();
});

const checkBox = document.getElementById("checkbox");
checkBox.addEventListener("change", submitBtn);

submitBtn();