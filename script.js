const box = document.querySelector(".box");

function createGrid() {
 for (let i = 0; i < 256; i++) {
   const div = document.createElement("div");
   div.classList.add("cell");
   div.setAttribute('id', 'cell');
   box.appendChild(div);
 }
}

createGrid();

const userInput = document.getElementById("quantity");

function updateGrid() {
  grid.innerHTML = "";
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${userInput.value}, 2fr)`
  );
  grid.style.setProperty(
    "grid-template-rows",
    `repeat(${userInput.value}, 2fr)`
  );
  for (let i = 0; i < userInput.value * userInput.value; i++) {
   const div = document.createElement("div");
   div.classList.add("cell");
   div.setAttribute('id', 'cell');
   box.appendChild(div);
  }
  console.log(userInput.value);
}

userInput.addEventListener("change", updateGrid);

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}


var red = "";
var blue = "";
var green = "";
var defaultColor = '.cell:hover{background-color: #e6e6e6}';
var style = document.createElement('style');

// Click events for the dropdown menu
window.onclick = function(event) {
 if (!event.target.matches('.dropbtn')) {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
   var openDropdown = dropdowns[i];
   if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
   }
  }
  if (style.styleSheet) {
   style.styleSheet.cssText = defaultColor;
  } else {
   style.appendChild(document.createTextNode(defaultColor));
  }
  document.getElementsByTagName('head')[0].appendChild(style);
 }

 if (event.target.matches('.red')) {
  red = true;
  blue = false;
  green = false;
 } else if (event.target.matches('.blue')) {
  red = false;
  blue = true;
  green = false;
 } else if (event.target.matches('.green')) {
  red = false;
  blue = false;
  green = true;
 }
}

const fill = document.querySelector("div");
fill.addEventListener("mouseover", function(event) {
 if (red) {
  event.target.classList.replace("cell", "red-cell");
  event.target.classList.replace("blue-cell", "red-cell");
  event.target.classList.replace("green-cell", "red-cell");
 } else if (blue) {
  event.target.classList.replace("cell", "blue-cell");
  event.target.classList.replace("red-cell", "blue-cell");
  event.target.classList.replace("green-cell", "blue-cell");
 } else if (green) {
  event.target.classList.replace("cell", "green-cell");
  event.target.classList.replace("red-cell", "green-cell");
  event.target.classList.replace("blue-cell", "green-cell");
 }
});

