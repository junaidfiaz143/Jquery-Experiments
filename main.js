$(document).ready(function(){

	$(".msg").click(function(e){

		e.preventDefault();
		$(".dock").removeClass("animated slideInUp").addClass("animated slideOutDown").one("animationend webkitanimationEnd MSAnimationEnd oanimationend",function(){
			$(this).removeClass("animated slideOutDown").hide();
			window.open("home.html","_self");
		});

	});

	$(".contacts").click(function(e){

		e.preventDefault();
		$(".contacts").removeClass("contacts").addClass("animated fadeOutUp").one("animationend webkitanimationEnd MSAnimationEnd oanimationend",function(){
			$(this).removeClass("animated fadeOutUp").hide();
			window.open("home.html","_self");
		});
		
	});

	$(".about").click(function(e){

		e.preventDefault();
		$(".about").removeClass("about").addClass("animated fadeOutUp").one("animationend webkitanimationEnd MSAnimationEnd oanimationend",function(){
			$(this).removeClass("animated fadeOutUp").hide();
			window.open("home.html","_self");
		});
		
	});

	$(".team").click(function(e){

		e.preventDefault();
		$(".team").removeClass("team").addClass("animated fadeOutUp").one("animationend webkitanimationEnd MSAnimationEnd oanimationend",function(){
			$(this).removeClass("animated fadeOutUp").hide();
			window.open("home.html","_self");
		});
		
	});

	$(".services").click(function(e){

		e.preventDefault();
		$(".services").removeClass("services").addClass("animated fadeOutUp").one("animationend webkitanimationEnd MSAnimationEnd oanimationend",function(){
			$(this).removeClass("animated fadeOutUp").hide();
			window.open("home.html","_self");
		});
		
	});

	$(".blog").click(function(e){

		e.preventDefault();
		$(".blog").removeClass("blog").addClass("animated fadeOutUp").one("animationend webkitanimationEnd MSAnimationEnd oanimationend",function(){
			$(this).removeClass("animated fadeOutUp").hide();
			window.open("home.html","_self");
		});
		
	});

	$(".calculator").click(function(e){

		e.preventDefault();
		$(".calculator").removeClass("calculator").addClass("animated fadeOutUp").one("animationend webkitanimationEnd MSAnimationEnd oanimationend",function(){
			$(this).removeClass("animated fadeOutUp").hide();
			window.open("home.html","_self");
		});
		
	});

	$(".gr1").click(function(e){

		e.preventDefault();
		$(".gr1").removeClass("gr1").addClass("animated fadeOutUp").one("animationend webkitanimationEnd MSAnimationEnd oanimationend",function(){
			$(this).removeClass("animated fadeOutUp").hide();
			window.open("home.html","_self");
		});
		
	});

	$(".gr2").click(function(e){

		e.preventDefault();
		$(".gr2").removeClass("gr2").addClass("animated fadeOutUp").one("animationend webkitanimationEnd MSAnimationEnd oanimationend",function(){
			$(this).removeClass("animated fadeOutUp").hide();
			window.open("home.html","_self");
		});
		
	});

	$(".gr3").click(function(e){

		e.preventDefault();
		$(".gr3").removeClass("gr3").addClass("animated fadeOutUp").one("animationend webkitanimationEnd MSAnimationEnd oanimationend",function(){
			$(this).removeClass("animated fadeOutUp").hide();
			window.open("home.html","_self");
		});
		
	});

});