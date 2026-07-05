export function submitBtn() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    
    const emailRegex = /^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@gmail.com$/.test(email.value);

    const upperCase = document.getElementById("upper");
    const hasUpperCase = /[A-Z]+/.test(password.value);

    const lowerCase = document.getElementById("lower");
    const hasLowerCase = /[a-z]+/.test(password.value);

    const passwordLengthValid = password.value.length >= 8 && password.value.length <= 20;
    const checkBox = document.getElementById("checkbox");
    
    const submitButton = document.getElementById("submitBtn");

    if (emailRegex && passwordLengthValid && hasUpperCase && hasLowerCase && checkBox.checked && password.value !== email.value) {
        submitButton.disabled = false;
        submitButton.classList.add("bg-green-500", "text-white");
    } else {
        submitButton.disabled = true;
        submitButton.classList.remove("bg-green-500", "text-white");
    }

}