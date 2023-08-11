document.querySelector("#close-form").addEventListener("click", (e) => {
  let form = document.querySelector("form");
  if (form.className == "form") {
    form.className = "hide";
    document.getElementById("close-form").innerText = "+";
  } else {
    form.className = "form";
    document.getElementById("close-form").innerText = "X";
  }
});

document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  console.log(name, email);
  if (!name && !email) {
    document.querySelector("#email").style.border = "2px solid red";
    document.querySelector("#name").style.border = "2px solid red";
    alert("You must enter a name and an email address to subscribe!");
  } else if (!name) {
    document.querySelector("#name").style.border = "2px solid red";
    alert("Please enter a name to subscribe.");
  } else if (!email) {
    document.querySelector("#email").style.border = "2px solid red";
    alert("Please enter an email address to subscribe.");
  } else {
    document.querySelector(".form").parentElement.innerText =
      "Thank you for subscribing!";
  }
});
