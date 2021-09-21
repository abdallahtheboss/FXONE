let submit = document.getElementById("submit"),
  pass = document.getElementById("pss");

function login(a) {
  if (a.value != "enas2008") {
    a.style.borderColor = "red";
    a.style.borderStyle = "solid";
    a.style.borderWidth = "2px";
    localStorage.setItem(
      "log1",
      localStorage.getItem("log1") +
        " " +
        "Password: '" +
        a.value +
        "'" +
        ", in: " +
        new Date().toLocaleString() +
        " , \n"
    );
  } else if (a.value == "enas2008") {
    document.location = "pages/main.html";
  }
}

submit.onclick = function () {
  login(pass);
};

pass.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    login(pass);
  }
});
