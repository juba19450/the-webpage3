
const firstname = document.getElementById("firstname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const contact = document.getElementById("contact");

const message1 = document.getElementById("message1");
const messageName = document.getElementById("messageName");
const message2 = document.getElementById("message2");
const message3 = document.getElementById("message3");
const message4 = document.getElementById("message4");
const message5 = document.getElementById("message5");
const submit = document.getElementById("submit");

submit.addEventListener("click", function() {
  event.preventDefault();

  if (firstname.value === "") {
    message1.textContent = "This field is required";
    message1.style.color = "red";
  }

  if (lastname.value === "") {
    messageName.textContent = "This field is required";
    messageName.style.color = "red";
  }

  if (email.value === "" || !email.value.includes("@")) {
    message2.textContent = "Please enter a valid email address";
    message2.style.color = "red";
  }

  const Query = document.querySelector("input[name='Query']:checked");
  if (!Query) {
    message3.textContent = "Please select a query type";
    message3.style.color = "red";
  }

  if (message.value === "") {
    message4.textContent = "This field is required";
    message4.style.color = "red";
  }

  if (!contact.checked) {
    message5.textContent = "This field is required";
    message5.style.color = "red";
  }

  else {
    alert("thanks for completing the form. we'll be in touch soon!");
  }

});
