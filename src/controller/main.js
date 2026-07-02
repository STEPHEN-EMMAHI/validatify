import { validateEmail } from "../model/validate-email.js";
import {showPasswordRules, showOrHidePassword, clearPasswordRules} from "../model/validate-password.js";

const email = document.getElementById("email");
email.addEventListener("input", validateEmail);

email.addEventListener("focus", clearPasswordRules );

const password = document.getElementById("password");
password.addEventListener("focus", showPasswordRules);

const showHidePassword = document.getElementById("showHidePassword");
showHidePassword.addEventListener("click", showOrHidePassword);