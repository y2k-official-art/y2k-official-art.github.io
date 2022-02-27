function Close() {
  var x = document.getElementsByClassName("moble_container");
  x[0].style.display = "none";
}

function showWorks() {
  var x = document.getElementById("moble_works");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    x.style.lineHeight = "20px";
    x.style.marginBottom = "60px";
    x.style.fontSize = "16px";
  }
}

function Open() {
  var x = document.getElementsByClassName("moble_container");
  x[0].style.display = "block";
}
