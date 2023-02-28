// const form = document.forms.formMessage;
// const name = formMessage.name;
// const email = formMessage.email;
// const message = formMessage.message;
// const error = document.querySelector("#error");

// function sendForm(e) {
//   e.preventDefault();

//   if (name.value === "" || email.value === "" || message.value === "") {
//     name.classList.add("allError");
//     email.classList.add("allError");
//     message.classList.add("allError");
//     error.classList.add("error");
//     error.innerHTML = 'Fill all inputs!';
//     error.setAttribute(
//         "style",
//         "top: 175px"
//     )
//   } else {
//     console.log(`User name: ${name.value}`);
//     console.log(`User email: ${email.value}`);
//     console.log(`User message: ${message.value}`);
//     error.classList.remove("error");
//     name.classList.remove("allError");
//     email.classList.remove("allError");
//     message.classList.remove("allError");
//     error.innerHTML = '';
//   }
// }

// email.addEventListener("blur", function () {
//   if (!email.value.includes("@")) {
//     error.classList.add("error");
//     error.innerHTML = 'Email should contains "@"';
//     error.setAttribute(
//         "style",
//         "top: 175px"
//     )
//   }
// });

// email.addEventListener("focus", function () {
//   if (error.classList.contains("error")) {
//     error.classList.remove("error");
//     error.innerHTML = "";
//   }
// });

// message.addEventListener("blur", function () {
//   if (message.value.length < 30) {
//     error.classList.add("error");
//     error.innerHTML = `Length latest of 30 charts, you have ${message.value.length}`;
//     error.setAttribute(
//         "style",
//         "top: 275px"
//     )
//   }
// });

// error.classList.remove("error");
// error.innerHTML = "";

// formMessage.onsubmit = sendForm;

const form = document.forms.registr;
const uName = registr.userName;
const email = registr.email;
const pass = registr.password;
const rePass = registr.rePassword;
const error = document.querySelector("#error");
const submit = document.querySelector("#submit");
const check = registr.checkbox;
const success = document.querySelector("#success");
let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if (
  uName.value === "" ||
  email.value === "" ||
  pass.value === "" ||
  rePass.value === ""
) {
  uName.classList.add("empty");
  email.classList.add("empty");
  pass.classList.add("empty");
  rePass.classList.add("empty");
  error.classList.remove("success");
  submit.disabled = true;
}

uName.addEventListener("blur", () => {
  if (uName.value.length < 4) {
    error.classList.add("error");
    error.innerHTML = "Name length must be more 4";
    uName.classList.remove("inputDone");
    uName.classList.add("inputError");
  } else {
    uName.classList.add("inputDone");
    uName.classList.remove("empty");
  }
});

uName.addEventListener("focus", () => {
  if (error.classList.contains("error")) {
    error.classList.remove("error");
    error.innerHTML = "";
  }
});

email.addEventListener("blur", () => {
  email.value.toLowerCase();
  if (!regExp.test(email.value)) {
    error.classList.add("error");
    error.innerHTML = "Invalid email value";
    email.classList.remove("inputDone");
    email.classList.add("inputError");
  } else {
    email.classList.add("inputDone");
    email.classList.remove("empty");
  }
});

email.addEventListener("focus", () => {
  if (error.classList.contains("error")) {
    error.classList.remove("error");
    error.innerHTML = "";
  }
});

pass.addEventListener("blur", () => {
  if (pass.value.length < 8) {
    error.classList.add("error");
    error.innerHTML = "Password length must be 8";
    pass.classList.remove("inputDone");
    pass.classList.add("inputError");
  } else {
    pass.classList.add("inputDone");
    pass.classList.remove("empty");
  }
});

pass.addEventListener("focus", () => {
  if (error.classList.contains("error")) {
    error.classList.remove("error");
    error.innerHTML = "";
  }
});

rePass.addEventListener("input", () => {
  if (pass.value !== rePass.value || rePass.value.length < 8) {
    error.classList.add("error");
    error.innerHTML = "Password are not the same";
    rePass.classList.remove("inputDone");
    rePass.classList.add("inputError");
  } else {
    error.classList.remove("error");
    error.innerHTML = "";
    rePass.classList.add("inputDone");
    rePass.classList.remove("empty");
  }
});

rePass.addEventListener("focus", () => {
  if (error.classList.contains("error")) {
    error.classList.remove("error");
    error.innerHTML = "";
  }
});

registr.addEventListener("input", function () {
  if (
    uName.classList.contains("empty") ||
    email.classList.contains("empty") ||
    pass.classList.contains("empty") ||
    rePass.classList.contains("empty")
  ) {
    submit.disabled = true;
  } else {
    submit.disabled = false;
  }
});

function sendForm(e) {
  e.preventDefault();
  console.log(`User name: ${uName.value}`);
  console.log(`User email: ${email.value}`);
  console.log(`User password: ${pass.value}`);
  console.log(`Checkbox: ${check.checked}`);
  error.classList.add("success");
  error.innerHTML = "No errors";
  uName.value = '';
  email.value = '';
  pass.value = '';
  rePass.value = '';
  check.checked = false;
}

registr.onsubmit = sendForm;

// qwerqwer
