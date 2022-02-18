$(function () {
  // Handler for .ready() called.

  // add covalence number
  let h31 = $("<h3>");
  h31.html("1.");
  h31.appendTo($("#div1"));

  //add button and click for alert
  let btn = $("<button>");
  btn.html("Alert");
  btn.appendTo($("#div1"));

  btn.click(function () {
    alert("you really did it");
  });

  //click button for alert containing text input
  $("#boxBtn").click(function () {
    alert($("#boxText").val());
  });

  // hover to change bg color
  $("#hover")
    .on("mouseover", function () {
      this.style.backgroundColor = "red";
    })
    .on("mouseout", function () {
      this.style.backgroundColor = "white";
    });

  
  //click p for random color
  $("#lorem").on("click", function () {
    //random color function
  let randColor =
  "rgb(" +
  Math.floor(Math.random() * 255) +
  "," +
  Math.floor(Math.random() * 255) +
  "," +
  Math.floor(Math.random() * 255) +
  ")";

    this.style.color = randColor;
  });

  //add span w name on btn click
  const name = "PJ Jones";
  let span = $("<span>" + name + "</span>");

  $("#nameBtn").on("click", function () {
    span.appendTo($("#empty"));
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

  let i = 0;
  $("#listBtn").on("click", function () {
    const li = $("<li>" + friends[i] + "</li>");
    $("#ul").append(li);
    i++;
  });
});
