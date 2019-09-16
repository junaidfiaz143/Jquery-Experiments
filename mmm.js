$(document).ready(function(){

	$("html, body").animate({ scrollTop: 400 }, 5000);

	$("#contacts").click(function(e){
			
		e.preventDefault();		
		$("#contacts").removeClass("animated zoomIn");

		$("#contacts").addClass("animated rubberBand").one("webkitAnimationEnd MSAnimationEnd oanimationend animationend", function(){
			$(this).removeClass("animated rubberBand");	
			window.open("login.html","_self");				
		});

	});

	$("#home").click(function(e){
		
		e.preventDefault();
		$("#home").removeClass("animated zoomIn");

		$("#home").addClass("animated rubberBand").one("webkitAnimationEnd MSAnimationEnd oanimationend animationend", function(){
			$(this).removeClass("animated rubberBand");	
			window.open("try.html","_self");				
		});

	});

	$("#about").click(function(){
				
		$("#about").removeClass("animated zoomIn");

		$("#about").addClass("animated rubberBand").one("webkitAnimationEnd MSAnimationEnd oanimationend animationend", function(){
			$(this).removeClass("animated rubberBand");					
		});

	});

	$("#services").click(function(){
				
		$("#services").removeClass("animated zoomIn");

		$("#services").addClass("animated rubberBand").one("webkitAnimationEnd MSAnimationEnd oanimationend animationend", function(){
			$(this).removeClass("animated rubberBand");					
		});

	});

	$("#team").click(function(){
				
		$("#team").removeClass("animated zoomIn");

		$("#team").addClass("animated rubberBand").one("webkitAnimationEnd MSAnimationEnd oanimationend animationend", function(){
			$(this).removeClass("animated rubberBand");					
		});

	});

	$("#blog").click(function(){
				
		$("#blog").removeClass("animated zoomIn");

		$("#blog").addClass("animated rubberBand").one("webkitAnimationEnd MSAnimationEnd oanimationend animationend", function(){
			$(this).removeClass("animated rubberBand");					
		});

	});

	$("#calculator").click(function(e){
		e.preventDefault();
				
		$("#calculator").removeClass("animated zoomIn");

		$("#calculator").addClass("animated rubberBand").one("webkitAnimationEnd MSAnimationEnd oanimationend animationend", function(){
			$(this).removeClass("animated rubberBand");	
			window.open("calculator.html", "_self");				
		});

	});
		
});