export function validateEmail() {
  const email = document.getElementById("email");
  const inputChar = email.value;
  const emailRegex = /^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@gmail.com$/.test(inputChar);

  if (emailRegex) {
    email.classList.remove("border-red-500");
    email.classList.add("border-green-500");
  }else {
    email.classList.remove("border-green-500");
    email.classList.add("border-red-500");
  }
}