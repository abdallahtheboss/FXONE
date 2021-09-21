let text = document.getElementById("book");

if (localStorage.getItem("text") == null || localStorage.getItem("text") != null) {
  window.onload = function () {
    text.value = localStorage.getItem("text");
  };
  text.onkeyup = function () {
    localStorage.setItem("text", text.value);
  };
}
