var divs = document.getElementsByClassName("flex-div");
var formDiv = document.getElementById("form-div");

function addInitialColor() {
  for (var i = 0; i < divs.length; i++) {
    divs[i].classList.add("color"+i);
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
    }
  }
  this.classList.add("selected");
  formDiv.classList.remove("hidden");
  buildForm();
}

function buildForm() {
  
}


addInitialColor();
addDivListeners();

