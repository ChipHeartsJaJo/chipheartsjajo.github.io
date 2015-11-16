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
