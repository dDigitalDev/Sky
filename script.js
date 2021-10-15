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