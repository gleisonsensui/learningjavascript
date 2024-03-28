$(function () {
  $(".menu-item").click(() => {
    $(".burguer-container").toggleClass("change");
    $(".main-navigation").toggle("slow");
  });
  $(".burguer-container").click(() => {
    $(".main-navigation").toggle("slow");
    $(".burguer-container").toggleClass("change");
  });
});
