//CLEAR CONTAINER FUNCTION
//HOW THIS WORKS: While container has a child, RUN this code. removeChild does exactly that, removes the child element ONLY IF it has a first child. 
function clearContainer() {
  while (interiorContainer.firstChild) {
    interiorContainer.removeChild(interiorContainer.firstChild);
  }
}


//CLEAR THE INPUT FIELD FOR THE BLACK DIVS  
function clearBlackDivsNumber (){
  let inputRaw = document.getElementById('blackDivs');
  inputRaw.value = ""; 
}

//GENERATE BLACK DIVS ONLY
blackDivsButton.addEventListener('click', function () {
  let inputRaw = document.getElementById('blackDivs');
  let i = inputRaw.value;
  let j = 1;

  if (i < 1 || i > 99) {
    inputRaw.value = "";
    i = 0; //Need to set this to 0 otherwise the if statement below will parse the i from above
    alert("Please enter a number between 1 and 99");
  } else {
    i = Number(i);
  }

  if (interiorContainer.firstChild) {
    clearContainer();
      for (let j = 1; j <= i; j++) {
        let div = document.createElement("div");
        div.className = "blackStyledDiv";
        document.getElementById("interiorContainer").appendChild(div);
      }
  } else {
    for (let j = 1; j <= i; j++) {
      let div = document.createElement("div");
      div.className = "blackStyledDiv";
      document.getElementById("interiorContainer").appendChild(div);
    }
    //The first step needs to be creating X number of rows that take up x percent of the parent box. These should be horzontal rows. Then create boxes inside these rows which give the appearence of having columns. 

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


