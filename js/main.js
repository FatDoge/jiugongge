$(document).ready(function(){
	var Mywidth=$(".wrap").innerWidth();
	$(".wrap").css("height",Mywidth);
	$(window).resize(function(){
		var Mywidth=$(".wrap").innerWidth();
	$(".wrap").css("height",Mywidth);
	})
})