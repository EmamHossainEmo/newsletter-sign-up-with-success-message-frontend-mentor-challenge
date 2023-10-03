const submitBtn = document.querySelector("#sub-btn");
const dismissBtn = document.querySelector("#dismiss-btn");
submitBtn.addEventListener("click", sendSuccessMessage);

const signUpFormSection = document.querySelector("#sign-up");
const successMessageSection = document.querySelector("#success-message");

successMessageSection.style.display = "none";

dismissBtn.addEventListener("click", run);

function sendSuccessMessage() {
  const userEmail = document.querySelector("#email").value;
  if (/^\w{3,16}@[a-z]{3,9}\.com/g.test(userEmail)) {
    const outputEmail = document.querySelector("#input-value");
    outputEmail.innerText = userEmail;
    signUpFormSection.style.display = "none";
    successMessageSection.style.display = "block";
  } else {
    if (document.querySelector("#error-message") === null) {
      const form = document.querySelector("form");
      const emailLabel = document.querySelector("#email-label");
      const errorMessage = document.createElement("span");
      const errorInput = document.querySelector("#email");
      errorMessage.setAttribute("id", "error-message");
      errorInput.setAttribute("class", "error-input");
      errorMessage.innerText = "Valid email required";
      form.insertBefore(errorMessage, emailLabel);
    }
  }
}

function run() {
  location.reload();
}
