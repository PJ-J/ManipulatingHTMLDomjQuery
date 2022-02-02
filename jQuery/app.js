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
  
});