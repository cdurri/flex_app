$(document).ready(function() {
  $("a.edit-links").click(function(e) {
    e.preventDefault();
    $( this ).siblings().hide();
    $( this ).siblings('.update-form').show();
  });
});
