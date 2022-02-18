document.addEventListener("DOMContentLoaded", function () {
  // creating elements
  let btnDiv = document.createElement("div");
  btnDiv.id = "div1";
  let h3 = document.createElement("h3");
  let button = document.createElement("button");

  // displaying number corresponding to covalence instructions
  document.getElementById("div1").appendChild(h3);
  let h3Text = document.createTextNode("1.");
  h3.appendChild(h3Text);

  // put button with text in div
  document.getElementById("div1").appendChild(btnDiv);
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
  // let h34 = document.createElement("h3");
  // let h3Text4 = document.createTextNode("4.");
  // h34.appendChild(h3Text4);
  // document.getElementById("div1").appendChild(h34);

  

  //create p element with text
  let para = document.createElement("p");
  let paraText = document.createTextNode(
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto dolor veritatis eligendi dolore aperiam, quaerat rerum corrupti, labore obcaecati aut incidunt ducimus est autem! Dolores ipsum blanditiis ut saepe quaerat!"
  );
  para.appendChild(paraText);
  document.getElementById("div4").appendChild(para);
  para.id = "ptext";

  let ptext = document.getElementById("ptext");

  ptext.addEventListener("click", function () {
    //random color function
  let randColor =
  "rgb(" +
  Math.floor(Math.random() * 255) +
  "," +
  Math.floor(Math.random() * 255) +
  "," +
  Math.floor(Math.random() * 255) +
  ")";
    ptext.style.color = randColor;
  });

  // displaying number corresponding to covalence instructions
  // let h35 = document.createElement("h3");
  // let h3Text5 = document.createTextNode("5.");
  // h35.appendChild(h3Text5);
  // document.getElementById("div1").appendChild(h35);

  //create empty div and span element with text
  let emptyDiv = document.createElement("div");
  let span = document.createElement("span");
  let spanText = document.createTextNode("PJ Jones");
  span.appendChild(spanText);
  document.getElementById("div5").appendChild(emptyDiv);

  // put button with text in div
  let button2 = document.createElement("button");
  let btnDiv2 = document.createElement("div");
  document.getElementById("div5").appendChild(btnDiv2);
  let btnText2 = document.createTextNode("Add Name");
  button2.id = "button2";
  button2.appendChild(btnText2);
  btnDiv2.appendChild(button2);

  // on click add span w name to empty div
  button2.addEventListener("click", function () {
    emptyDiv.appendChild(span);
  });

  //friend array
  let friends = [
    "Larry",
    "Amanda",
    "Alyssa",
    "Thomas",
    "Phillip",
    "Megan",
    "John",
    "David",
    "Jake",
    "Blorpo",
  ];

  let friendBtn = document.getElementById("listBtn");
  let ul = document.getElementById("ul");

  let i = 0;

  friendBtn.addEventListener("click", function () {
    let friendText = document.createTextNode(friends[i]);
    let li = document.createElement("li");
    li.id = i;
    li.appendChild(friendText);
    ul.appendChild(li);
    i++;
  });
});
