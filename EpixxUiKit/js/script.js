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

});