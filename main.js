const card = document.getElementsByClassName("card")[0];
const success_card = document.getElementsByClassName("success-card")[0];
const email_input = document.getElementById("email");
const submit_btn = document.getElementById("submit");
const dimiss_btn = document.getElementsByClassName("dimiss-button")[0];
const invalid_email = document.getElementsByClassName("invalid")[0];
const submitted_email = document.getElementsByClassName("submitted-email")[0];

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

submit_btn.onclick = () => {
  if (!validateEmail(email_input.value)) return error();
  success();
};

dimiss_btn.onclick = () => {
  return dimiss();
};

function error() {
  email_input.classList.add("error");
  invalid_email.style.display = "inline-block";
}

function success() {
  email_input.classList.remove("error");
  invalid_email.style.display = "none";
  card.style.display = "none";
  success_card.style.display = "block";
  submitted_email.innerText = email_input.value;
  email_input.value = "";
}

function dimiss() {
  console.log(0);
  card.style.display = "flex";
  success_card.style.display = "none";
}
