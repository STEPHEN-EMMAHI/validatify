/* Show Password Rules Function */
export function showPasswordRules() {
    const passwordRules = document.getElementById("password-rules");

    if (passwordRules.classList.contains("hidden")) {
        passwordRules.classList.remove("hidden");
    }
}

/* Show or Hide Password Function */
export function showOrHidePassword() {
    const password = document.getElementById("password");
    const showOrHideBtn = document.getElementById("showHidePasswordBtn");
    
    if (password.type === "password") {
        password.type = "text";
        showOrHideBtn.textContent = "hide";
    } else if (password.type === "text") {
        password.type = "password";
        showOrHideBtn.textContent = "show";
    }
}

/* Validate Password Rules Function */
export function validatePasswordRules() {
    const password = document.getElementById("password");
    const charactersLong = document.getElementById("char-long");
    const upperCase = document.getElementById("upper");
    const lowerCase = document.getElementById("lower");

    // validate password length
    if (password.value.length >= 8 && password.value.length <= 20 
        && /[A-Z]+/.test(password.value) && /[a-z]+/.test(password.value) ) {
        charactersLong.classList.add("hidden");
        password.classList.remove("border-red-500");
        password.classList.add("border-green-500");
    } else {
        charactersLong.classList.remove("hidden");
        password.classList.remove("border-green-500");
        password.classList.add("border-red-500");
    }

    if (password.value.length >= 1 && password.value.length < 8) {
        charactersLong.textContent = "At least 8 characters long";
    } else if (password.value.length > 20) {
        charactersLong.textContent = "At most 20 characters long";
    } else if (password.value.length === 0) {
        charactersLong.textContent = "From 8 to 20 characters long";
    }

    // validate uppercase letter
    if (/[A-Z]+/.test(password.value)) {
        upperCase.classList.add("hidden");
    }else {
        upperCase.classList.remove("hidden");
    }

    // validate lowercase letter
    if (/[a-z]+/.test(password.value)) {
        lowerCase.classList.add("hidden");
    }else {
        lowerCase.classList.remove("hidden");
    }
}