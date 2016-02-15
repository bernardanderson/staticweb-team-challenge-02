var mainDiv = document.getElementById("main-div");
var isFormVisible = document.getElementsByTagName('input');
var divs = document.getElementsByClassName("flex-div");

// Thi
function addInitialColor() {
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.background = "gray";
  }
}

function addDivListeners() {
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", addBorderRevealForm);
  }
}

function addBorderRevealForm() {
  for (var i = 0; i < divs.length; i++) {
    if (divs[i].classList.contains("selected")) {
      divs[i].classList.remove("selected");
      divs[i].style.border = "";
      break;
    }
  }
  this.classList.add("selected");
  this.style.border = "2px solid red";
  buildForm();
}

function buildForm() {
  if (isFormVisible.length === 0) {
    var formDiv = document.createElement("div");
    formDiv.classList.add("form-div")
    formDiv.innerHTML = "<input type='text' id='input-color' placeholder='Enter a color'>";
    formDiv.innerHTML += "<p id='button'>COLOR IT</p>";
    mainDiv.appendChild(formDiv);
    checkForColorClick();
  }
}

function checkForColorClick() {
  var button = document.getElementById("button");
  button.addEventListener("click", insertColor);
}

function insertColor() {
  var bgColor = document.getElementById("input-color");
  for (var i = 0; i < divs.length; i++) {
    if (divs[i].classList.contains("selected")) {
      divs[i].style.background = bgColor.value;
      break;
    }
  }
}

addInitialColor();
addDivListeners();
