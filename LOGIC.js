blackDivsButton.addEventListener('click', function () {
  let inputRaw = document.getElementById('blackDivs');
  let i = inputRaw.value;
  let j = 1;

  if (i < 1 || i > 99) {
    inputRaw.value = ""; // Clear the input field
    i = 0;
    alert("Please enter a number between 1 and 99");
  } else {
    i = Number(i);
  }

  for (let j = 1; j <= i; j++) {
    let div = document.createElement("div");
    div.textContent = 'Yes';
    div.className = "blackStyledDiv";
    document.getElementById("container").appendChild(div);
  }

  //alert(typeof i);
  //alert(i);
  //let div = document.createElement("div");
  //div.appendChild(para);
  //document.getElementById("container").appendChild(div);
});

rainbowDivsButton.addEventListener('click', function () {
  alert("it's working");
});

clearButton.addEventListener('click', function () {
  //HOW THIS WORKS: While container has a child, RUN this code. removeChild does exactly that, removes the child element ONLY IF it has a first child. 
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
});