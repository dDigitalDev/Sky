document.querySelector('.hamburger-menu').
addEventListener("click", () =>{
    document.querySelector(".container").classList.toggle
    ("change");
});

document.querySelector(".scroll-btn").addEventListener
("click",()=>{
 document.querySelector("html").style.scrollBehavior
 ="smooth";
 setTimeout(()=> {
 document.querySelector("html").style.
 scrollBehavior="unset";
 },1000);
});
$('.scrollTo').click(function() {
	var getElem = $(this).attr('href');
	var targetDistance = 20;
	if ($(getElem).length) {
		var getOffset = $(getElem).offset().top;
		$('html,body').animate({
			scrollTop: getOffset - targetDistance
		}, 500);
	}
	return false;
});


var TxtType = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtType.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
	this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
	this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

	var that = this;
	var delta = 200 - Math.random() * 100;

	if (this.isDeleting) { delta /= 2; }

	if (!this.isDeleting && this.txt === fullTxt) {
	delta = this.period;
	this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
	this.isDeleting = false;
	this.loopNum++;
	delta = 500;
	}

	setTimeout(function() {
	that.tick();
	}, delta);
};