// move background start
var lFollowX = 0,
		lFollowY = 0,
		x = 0,
		y = 0,
		friction = 1 / 30;

function moveBackground() {
	x += (lFollowX - x) * friction;
	y += (lFollowY - y) * friction;
	
	translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

	$('.bg').css({
		'-webit-transform': translate,
		'-moz-transform': translate,
		'transform': translate
	});

	window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

	var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
	var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
	lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
	lFollowY = (10 * lMouseY) / 100;

});

moveBackground();
// move background end
// 
window.onload = function() {
	// $('site-navbar').animate({
	// 	left: '0' }, 500, function() {
	// 	// $('ul li').delay(900).fadeIn(200)
	// 	$('ul li').delay(500).each(function(index) {
	// 		$(this).delay(200*index).fadeIn(200);
	// 	}); 
	// });
	var timeoutID = window.setTimeout(( function(){
		$("#bubble-container").hide()}), 3000);
}