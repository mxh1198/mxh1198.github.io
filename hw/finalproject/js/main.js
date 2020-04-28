$(document).ready(function() {
  //all js goes in here
  console.log("we loaded");
  $("img").fadeIn(2000);
  $("#hover1").mouseover(function() {
    // what happens when our mouse is over the lists.
    $("#hover1").css("background-color", "PeachPuff");
  });
  $("#hover1").mouseleave(function() {
    // what happens when our mouse is over the lists.
    $("#hover1").css("background-color", "transparent");
  });

  $("#hover2").mouseover(function() {
    // what happens when our mouse is over the lists.
    $("#hover2").css("background-color", "PeachPuff");
  });
  $("#hover2").mouseleave(function() {
    // what happens when our mouse is over the lists.
    $("#hover2").css("background-color", "transparent");
  });
  $("#hover3").mouseover(function() {
    // what happens when our mouse is over the lists.
    $("#hover3").css("background-color", "PeachPuff");
  });
  $("#hover3").mouseleave(function() {
    // what happens when our mouse is over the lists.
    $("#hover3").css("background-color", "transparent");
  });
  $("#hover4").mouseover(function() {
    // what happens when our mouse is over the lists.
    $("#hover4").css("background-color", "PeachPuff");
  });
  $("#hover4").mouseleave(function() {
    // what happens when our mouse is over the lists.
    $("#hover4").css("background-color", "transparent");
  });
  $("#hover5").mouseover(function() {
    // what happens when our mouse is over the lists.
    $("#hover5").css("background-color", "PeachPuff");
  });
  $("#hover5").mouseleave(function() {
    // what happens when our mouse is over the lists.
    $("#hover5").css("background-color", "transparent");
  });

  $("#thankyou").click(function() {
    // change message to say thank youy.
    $("#thankyou").html("You're welcome!");
  });
  // $("p").mouseleave(function() {
  //   $("p").css("background-color", "peachpuff");
  // });
  // $("#title").css("color", "#bada55");
  // $("#title").css("font-size", "125px");
  // $("#title").html("<p>More information #1</p>");
});