document.addEventListener("DOMContentLoaded", function () {
  // creating elements
  let btnDiv = document.createElement("div");
  let h3 = document.createElement("h3");
  let button = document.createElement("button");

  // displaying number corresponding to covalence instructions
  document.body.appendChild(h3);
  let h3Text = document.createTextNode("1.");
  h3.appendChild(h3Text);

  // put button with text in div
  document.body.appendChild(btnDiv);
  let btnText = document.createTextNode("Alert Button");
  button.className = "button";
  button.appendChild(btnText);
  btnDiv.appendChild(button);

  let textBox = document.getElementById("boxText");
  let boxBtn = document.getElementById("boxBtn");

  button.addEventListener("click", function () {
    alert("you clicked a button wow");
  });

  boxBtn.addEventListener("click", function () {
    let text = textBox.value;
    alert(text);
  });

  document.getElementById("hoverdiv").addEventListener("mouseover", over);

  document.getElementById("hoverdiv").addEventListener("mouseout", out);

  function over() {
    document.getElementById("hoverdiv").style.background = "red";
  }

  function out() {
    document.getElementById("hoverdiv").style.background = "white";
  }
});
