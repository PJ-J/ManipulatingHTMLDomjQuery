$(function () {
  // Handler for .ready() called.

  //add button and click for alert
  let btn = $("<button>");
  btn.html("Alert");
  btn.appendTo("body");

  btn.click(function () {
    alert("you really did it");
  })

});