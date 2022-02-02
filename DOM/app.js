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

  // select hover div and associated functions
  document.getElementById("hoverdiv").addEventListener("mouseover", over);

  document.getElementById("hoverdiv").addEventListener("mouseout", out);

  function over() {
    document.getElementById("hoverdiv").style.background = "red";
  }

  function out() {
    document.getElementById("hoverdiv").style.background = "white";
  }

  // displaying number corresponding to covalence instructions
  let h34 = document.createElement("h3");
  let h3Text4 = document.createTextNode("4.");
  h34.appendChild(h3Text4);
  document.body.appendChild(h34);

  //random color function
  let randColor =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")";

  //create p element with text
  let para = document.createElement("p");
  let paraText = document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto dolor veritatis eligendi dolore aperiam, quaerat rerum corrupti, labore obcaecati aut incidunt ducimus est autem! Dolores ipsum blanditiis ut saepe quaerat!");
  para.appendChild(paraText);
  document.body.appendChild(para);
  para.id = "ptext";

  let ptext = document.getElementById("ptext")

  ptext.addEventListener("click", function() {
    ptext.style.color = randColor;
  });
});
