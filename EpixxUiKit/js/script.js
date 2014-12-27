$(document).ready(function() {

  $("#select2").select2();

  $(".input-text-disable").prop("readonly", true);

  $("input.input-text").on("change", function(){
    if ($(this).val() === "wrong") {
      $(this)
        .addClass("input-text-wrong")
        .closest(".icon")
        .addClass("icon-wrong");
    } else if ($(this).val() === "correct") {
      $(this)
        .addClass("input-text-correct")
        .closest(".icon")
        .addClass("icon-correct");
    } else {
      $(this)
        .removeClass("input-text-wrong input-text-correct")
        .closest(".icon")
        .removeClass("icon-correct icon-wrong")
    };
  });

  $(".radio").on("change", function(){
    $(".radio:enabled").next().text("Активно");
    $(this).next().text("Отмечено");
  });

  $(".checkbox").on("change", function(){
    if($(this).prop("checked")){
      $(this).next().text("Отмечено");
    } else {
      $(this).next().text("Активно");
    }
  });

  $(".switch").on("change", function(){
    if($(this).prop("checked")){
      $(this).next().text("Включено");
    } else {
      $(this).next().text("Выключено");
    }
  });

});