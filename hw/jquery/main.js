$(document).ready(function() {
  //all js goes in here
  console.log("we loaded");

  $("#button1").click(function() {
    // code that runs when you click on the part of the page that has the id="title"
    // $("#title").css("font-size", "125px");
    // $("#title").css("color", "#f9423a");
    $("#title").addClass("big-text");
  });

  $("#button2").click(function() {
    // stuff we put here will happen when you click button 2.
    $("#title").removeClass("big-text");
  });

  $("p").mouseover(function() {
    $("p").css("font-size", "21px");
  });

  $("p").mouseleave(function() {
    $("p").css("background-color", "peachpuff");
  });
  // $("#title").css("color", "#bada55");
  // $("#title").css("font-size", "125px");
  // $("#title").html("<p>More information #1</p>");
});