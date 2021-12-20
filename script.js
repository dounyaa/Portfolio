$('#contactForm').validate({

    /* submit via ajax */
    submitHandler: function(form) {

        var sLoader = $('#submit-loader');

        $.ajax({      	

            type: "POST",
            url: "sendEmail.php",
            data: $(form).serialize(),
            beforeSend: function() { 

                sLoader.fadeIn(); 

            },
            success: function(msg) {

                // Message was sent
                if (msg == 'OK') {
                    sLoader.fadeOut(); 
                    $('#message-warning').hide();
                    $('#contactForm').fadeOut();
                    $('#message-success').fadeIn();   
                }
                // There was an error
                else {
                    sLoader.fadeOut(); 
                    $('#message-warning').html(msg);
                    $('#message-warning').fadeIn();
                }

            },
            error: function() {

                sLoader.fadeOut(); 
                $('#message-warning').html("Something went wrong. Please try again.");
                    $('#message-warning').fadeIn();

                }

        });     		
    }

});

function myFunction(event) {
    var parent = event.target.parentElement;
    console.log(parent)
    var dots = parent.querySelector("#dots"); 
    var moreText = parent.querySelector("#more");
    var btnText = parent.querySelector("#myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }


