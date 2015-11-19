Parse.initialize("TexskmBJdxRcujJBRj1XEfkOc16dhSPwSgGHG6Xk", "jZ7fZLRstkaIgGmv8KQ9xogqvw1qMBOXAhe6aCiV");

function submitForm() {

  var GameScore = Parse.Object.extend("messages");
  var gameScore = new GameScore();

  gameScore.set("name", $("#input_name").val());
  gameScore.set("email", $("#input_email").val());
  gameScore.set("message", $("#input_message").val());

  gameScore.save(null, {
    success: function(gameScore) {
      console.log('New object created with objectId: ' + gameScore.id);
      $("#input_name").val("");
      $("#input_email").val("");
      $("#input_message").val("");
      // alert("Thank you for your message.");
      $(".form_status_message").html('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>Thank you for your message.</div>');
    },
    error: function(gameScore, error) {
      console.log('Failed to create new object, with error code: ' + error.message);
    }
  });

};

$(document).ready(function() {

  $.getJSON("http://jsonip.com?callback=?", function(data) {

    var now = moment();

    var VisitLog = Parse.Object.extend("traffic_log");
    var visitLog = new VisitLog();

    visitLog.set("ip", data.ip);
    visitLog.set("year", moment(now).year());
    visitLog.set("month", moment(now).month() + 1);
    visitLog.set("day", moment(now).date());
    visitLog.set("hour", moment(now).hour());
    visitLog.set("minute", moment(now).minute());
    visitLog.set("second", moment(now).second());

    visitLog.save(null, {
      success: function(gameScore) {
        // Execute any logic that should take place after the object is saved.
      },
      error: function(gameScore, error) {
        // Execute any logic that should take place if the save fails.
      }
    });

  });

});
