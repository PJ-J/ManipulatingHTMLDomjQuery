$(function () {
  // Handler for .ready() called.

  // add covalence number
  let h31 = $("<h3>");
  h31.html("1.");
  h31.appendTo("body");

  //add button and click for alert
  let btn = $("<button>");
  btn.html("Alert");
  btn.appendTo("body");

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

  //random color function
  let randColor =
    "rgb(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    ")";

  //click p for random color
  $("#lorem").on("click", function () {
    this.style.color = randColor;
  });

  const name = "PJ Jones";
  let span = $("<span>" + name + "</span>");

  $("#nameBtn").on("click", function () {
    span.appendTo($("#empty"));
  });
});
