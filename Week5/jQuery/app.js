$(document).ready(function () {

    
      $('.hello-button').on('click', function () {
        alert('hello world');
      });

      $('.empanadas').on('click', function () {
     	 alert('CHILE EMPANADAS');

      	$("body").append("<h1> EMPANADAS </h1>");
      });

      	$(".js-like-button").on("click",function () {
      		if ( $(".js-like-button").hasClass("btn-success") ) {
      			$(".js-like-button").html("like");
      		}

      		else {
      			$(".js-like-button").html("liked +1");
      		}
      		$(".js-like-button").toggleClass("btn-default");
      		$(".js-like-button").toggleClass("btn-success");
      		
      	});

      	  $("body > :not(.fade-mode)").fadeTo("slow", 0.5, function() {
});


      });

