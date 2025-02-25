//CLEAR CONTAINER FUNCTION
//HOW THIS WORKS: While container has a child, RUN this code. removeChild does exactly that, removes the child element ONLY IF it has a first child. 
function clearContainer() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

//CLEAR THE INPUT FIELD FOR THE BLACK DIVS  
function clearBlackDivsNumber() {
  let inputRaw = document.getElementById('blackDivs');
  inputRaw.value = "";
}

//GENERATE BLACK DIVS ONLY
blackDivsButton.addEventListener('click', function () {
  let inputRaw = document.getElementById('blackDivs');
  let i = inputRaw.value;
  let j = 1;
  let k;

  if (i < 1 || i > 99) {
    inputRaw.value = "";
    i = 0; //Need to set this to 0 otherwise the if statement below will parse the i from above
    alert("Please enter a number between 1 and 99");
  } else {
    i = Number(i*i);
  }

  if (container.firstChild) {
    //This runs because there is a space in the container HTML, which reads as a child node. 
    clearContainer(); 
    for (let j = 1; j <= i; j++) {
      let div = document.createElement("div");
      div.className = "blackStyledDiv";
      document.getElementById("container").appendChild(div);
    }
  } 
});



//GENERATE RANIBOW DIVS ONLY
rainbowDivsButton.addEventListener('click', function () {
  alert("it's working");
});

//CLEAR ALL DIVS 
clearButton.addEventListener('click', function () {
  clearContainer();
  clearBlackDivsNumber();
});


