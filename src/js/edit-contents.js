$(document).ready(function() {
  $(".update-button").click(function(event) {
    event.preventDefault();

    var heading = $( this ).siblings('.heading-box').val();
    console.log(heading);
    var paragraph = $( this ).siblings('.paragraph-box').val();
    console.log(paragraph);
    $( this ).closest('.update-form').hide();
    $( this ).closest('.square-box').find('h2').text(heading).show();
    $( this ).closest('.square-box').find('p').text(paragraph).show();
    $('.second-layout').show();
  });

  $("#subscribe-button").click(function(event) {
        console.log('Subscribe');
    event.preventDefault();

    var emailinfo = $( this).siblings('.email-input').val();
    console.log(emailinfo);
    $( this ).closest('.email-submit-form').hide();
    var reply = "An invitation email has been sent to " + emailinfo + ". Please verify."
    console.log(reply);
    $( this ).closest('.second-layout').find('#submit-reply').text(reply).show();
  });
});
