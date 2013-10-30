/*
//
//  <>                T|           T|
//                    ||           ||
//  T| ,-.  ,-.TT\ T T||,\  ,-. ,-.||
//  |||I \\|| I||I | |||´I||I )|I )||
//  |||| |)|| |||| | ||| ||||/ ||/ ||
//  ||\\_I/`\_I||L/L/´\| ||\\_/\\_/\|.js
//  || `-´    ||       ` |/ `   `   `
//  J´      ._/`         ´  thykka@gmail.com
//
*/

var jogwheel = { // Global options
	velocity: 50,	// smaller value = weaker inertia
	speed: 400,		// smaller value = faster inertia
	keyspeed: 100,	// smaller value = faster transition
	crawlspeed: 50, // smaller value = faster crawl
	crawl: false	// initially crawling?
};
jogwheel.makeJoggable = function (e) {
	var innerWidth;
	e.fadeIn(300);
	e.delta = 0;
	e.addClass("jogwheel").on("mousedown touchstart", function(event) {
		event.preventDefault();
		event.stopPropagation();
		if(event.downHandled !== true) {
			jogwheel.stopCrawl(e);
			e.stop();
			if(event.type === "touchstart") {
				e.clickX = event.originalEvent.touches[0].clientX;
			} else {
				e.clickX = event.clientX;
			}
			$(document).on("mousemove touchmove", function(event) {
				event.preventDefault();
				event.stopPropagation();
				if(event.moveHandled !== true) {
					if(event.type === "touchmove") {
						e.delta = e.clickX - event.originalEvent.touches[0].clientX;
						e.clickX = event.originalEvent.touches[0].clientX;
					} else {
						e.delta = e.clickX - event.clientX;
						e.clickX = event.clientX;
					}
					e.scrollLeft(e.scrollLeft()+e.delta);
					event.moveHandled = true;
				} else {
					return false;
				}
			});
			$(document).on("mouseup touchend touchcancel", function(event) {
				event.preventDefault();
				event.stopPropagation();
				if(event.upHandled !== true) {
					if(event.type === "touchend" || event.type === "touchcancel") {

					}
					$(document).off("mousemove").off("mouseup").off("touchmove").off("touchend").off("touchcancel");
					if(e.delta > 1 || e.delta < -1) {
						e.animate({
							scrollLeft: e.scrollLeft() + e.delta * jogwheel.velocity
						}, Math.abs(e.delta*jogwheel.speed), "easeOutCirc")
					}
					event.upHandled = true;
				} else {
					return false;
				}
			});
			event.downHandled = true;
		} else {
			return false;
		}
	});
	$(document).keydown(function(evt){
		var imgs = e.children().get(),
			i,
			l = imgs.length - 1,
			prev = [],
			next = [];
		for(i=0; i<=l; i++) {
			if(imgs[i].x < 0) {
				prev.push(imgs[i]);
			} else if (imgs[i].x > 1) {
				next.push(imgs[i]);
			}
		}
		if (prev.length > 0 && evt.keyCode == 37 ) { // key left
			jogwheel.stopCrawl(e);
			e.stop().animate({ "scrollLeft" : e.scrollLeft() + prev[prev.length - 1].x }, jogwheel.keyspeed, "easeOutExpo");;
			return false;
		} else if (next.length > 0 && evt.keyCode == 39 ) {	// key right
			jogwheel.stopCrawl(e);
			e.stop().animate({ "scrollLeft" : e.scrollLeft() + next[0].x }, jogwheel.keyspeed, "easeOutExpo");;
			return false;
		}
	});
	if(jogwheel.crawl) {
		innerWidth = jogwheel.getWidth(e);
		jogwheel.crawlNow(e,false,innerWidth);
	}
};
jogwheel.crawlNow = function (e, toright, innerWidth) {
	if(typeof toright === "undefined") { toright = false; }
	if(e.scrollLeft() >= innerWidth - e.width()) {
		toright = true;
	} else if (e.scrollLeft() <= 0) {
		toright = false;
	}
	if(toright) {
		e.scrollLeft(e.scrollLeft()-1);
	} else {
		e.scrollLeft(e.scrollLeft()+1);
	}
	e.crawler = setTimeout(jogwheel.crawlNow, jogwheel.crawlspeed, e, toright, innerWidth);
};
jogwheel.stopCrawl = function (e) {
	jogwheel.crawl = false;
	clearTimeout(e.crawler);
};
jogwheel.getWidth = function (element) {
	var temp = $("<span></span>"), result;
	element.wrapInner(temp);
	result = $("span").width();
	element.children().children().unwrap();
	return result;
};