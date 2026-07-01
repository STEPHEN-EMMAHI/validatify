import { validateEmail } from "../model/validate-email.js";

const email = document.getElementById("email");
email.addEventListener("input", validateEmail);
