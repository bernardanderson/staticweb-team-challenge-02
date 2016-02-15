var mainDiv = document.getElementById("main-div");
var isFormVisible = document.getElementsByTagName('input');
var divs = [];

// This adds the initial divs to color to the DOM and gets 
//  their element list
function addDivs() {
  for (var i = 0; i < 3; i++){
    var createDiv = document.createElement("div");
    createDiv.classList.add("flex-div");
    mainDiv.appendChild(createDiv);
  }
  divs = document.getElementsByClassName("flex-div");
}

// This function adds a click listener to the initial three divs
function addDivListeners() {
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", addBorderRevealForm);
  }
}

// This function adds an bg color to the initial three divs
function addInitialColor() {
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.background = "gray";
  }
}

// This function checks to see if any divs have been clicked before
//  and turns off the border.  It then adds the border around the 
//  currently clicked div.  It then calls the function to dynamically
//  add the form components to the DOM.
function addBorderRevealForm() {
  if (this.classList.contains("selected")) {
    this.classList.remove("selected");
    this.style.border = "";
  } else {
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
}

// This builds the form and inserts it in the DOM.  It first checks if
//  the form has already been added.  If not then it builds and inserts
//  the form components.
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

// This adds the listener for color button from the form
function checkForColorClick() {
  var button = document.getElementById("button");
  button.addEventListener("click", insertColor);
}

// This sets the bg color from the form text input into the for the
//  currently selected div 
function insertColor() {
  var bgColor = document.getElementById("input-color");
  for (var i = 0; i < divs.length; i++) {
    if (divs[i].classList.contains("selected")) {
      divs[i].style.background = bgColor.value;
      break;
    }
  }
}

addDivs();
addInitialColor();
addDivListeners();
