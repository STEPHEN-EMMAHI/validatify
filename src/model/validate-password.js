export function showPasswordRules() {
    const passwordRules = document.getElementById("password-rules");

    if (passwordRules.classList.contains("hidden")) {
        passwordRules.classList.remove("hidden");
    }
}

export function showOrHidePassword() {
    const password = document.getElementById("password");
    
    if (password.type === "password") {
        password.type = "text";
    }else if (password.type === "text") {
        password.type = "password";
    }
}

export function clearPasswordRules() {
  const passwordRules = document.getElementById("password-rules");
  
  if (!passwordRules.classList.contains("hidden")) {
    passwordRules.classList.add("hidden");
  }
}