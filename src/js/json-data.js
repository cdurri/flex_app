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
