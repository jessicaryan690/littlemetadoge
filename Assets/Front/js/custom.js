
//////////////////////////////////////////////// navigation code ///////////////////////////////////////////////////////

(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
	
  })(jQuery); 

  /////////////////////////////////////////////////////// navigation code end /////////////////////////////////////////////////




//   scroll spy code //

$(document).ready(function(){

var sectionIds = $('a.nav-link');

  $(document).scroll(function(){
	  sectionIds.each(function(){

		  var container = $(this).attr('href');
		  var containerOffset = $(container).offset().top;
		  var containerHeight = $(container).outerHeight();
		  var containerBottom = containerOffset + containerHeight;
		  var scrollPosition = $(document).scrollTop();
  
		  if(scrollPosition < containerBottom - 350 && scrollPosition >= containerOffset - 350){
			  $(this).addClass('active');
		  } else{
			  $(this).removeClass('active');
		  }
  
  
	  });
  });
});



// auto hide nav on link click 
  $('#header .nav-link').click(function(){
	$(".navbar-collapse").collapse('hide');
});


// copy code from input field  js code here 
function myFunction() {
	var copyText = document.getElementById("myInput");
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand("copy");
	
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copied: " + copyText.value;
  }
  
  function outFunc() {
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copy to clipboard";
  }


//   animated vertical tabs code //
$(document).on("click", ".naccs .menu div", function() {
	var numberIndex = $(this).index();

	if (!$(this).is("active")) {
		$(".naccs .menu div").removeClass("active");
		$(".naccs ul li").removeClass("active");

		$(this).addClass("active");
		$(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

		var listItemHeight = $(".naccs ul")
			.find("li:eq(" + numberIndex + ")")
			.innerHeight();
		$(".naccs ul").height(listItemHeight + "px");
	}
});




	  





