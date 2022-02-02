document.addEventListener("DOMContentLoaded", function () {
  let btnDiv = document.createElement("div");
  let h3 = document.createElement("h3");
  let button = document.createElement("button");

  document.body.appendChild(h3);
  let h3Text = document.createTextNode("1.");
  h3.appendChild(h3Text);
  document.body.appendChild(btnDiv);

  let btnText = document.createTextNode("Alert Button");
  button.className = "button";
  button.appendChild(btnText);

  btnDiv.appendChild(button);

  button.addEventListener("click", function () {
    alert("you clicked a button wow");
  });
  
});
let colorArray = [
  "#242582",
  "#41b3a3",
  "#c38d9e",
  "#E8a87c",
  "#85DCB0",
  "#e27d60",
  "#553d67",
  "#f64c72",
];

squDiv.addEventListener("click", function (e) {
  if (e.target.className === "blackSquare") {
    e.target.style.background =
      colorArray[Math.floor(Math.random() * colorArray.length)];
  }
});

squDiv.addEventListener("dblclick", function (e) {
  if (e.target.id % 2 === 0) {
    let clickedId = Number(e.target.id);
    let remove = document.getElementById(clickedId + 1);
    if (!remove) {
      alert("ain't no box here");
    } else {
      remove.remove();
    }
  } else {
    let clickedId = Number(e.target.id);
    let remove = document.getElementById(clickedId - 1);

    if (!remove) {
      alert("ain't no box here");
    } else {
      remove.remove();
    }
  }
});
