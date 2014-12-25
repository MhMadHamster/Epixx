$(document).ready(function(){

  var wrapper = $(".js-magic");

  $(".checkbox").change(function(){
    if($(this).is(":checked")) {
      wrapper.addClass("magic");
    } else {
      wrapper.removeClass("magic");
    }
  });

});