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

$(document).ready(function() {
  $("a.edit-links").click(function(e) {
    e.preventDefault();
    $( this ).siblings().hide();
    $( this ).siblings('.update-form').show();
  });
});

function loadJSON(callback) {

   var xobj = new XMLHttpRequest();
       xobj.overrideMimeType("application/json");
   xobj.open('GET', 'content.json', true); // Replace 'my_data' with the path to your file
   xobj.onreadystatechange = function () {
         if (xobj.readyState == 4 && xobj.status == "200") {
           // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
           callback(xobj.responseText);
         }
   };
   xobj.send(null);
}

function init() {
 loadJSON(function(response) {
  // Parse JSON string into object
    var actual_JSON = JSON.parse(response);

    $('.square-box.blue h2').append(actual_JSON[0].title);
    $('.square-box.red h2').append(actual_JSON[1].title);
    $('.square-box.red').children('p').append(actual_JSON[1].description);
    $('.square-box.green h2').append(actual_JSON[2].title);
    $('.square-box.green .second-layout').children('p').append(actual_JSON[2].description);
 });
}

init();
