$(window).scroll(function () { 
    //You've scrolled this much:
  		var newSize = $(window).scrollTop()/6;
  		var srotate = "translateX(-" + newSize + "px)";
  		$('.case-title').css({left:newSize,"-moz-transform" : srotate, "-webkit-transform" : srotate});
});

$("footer").mouseover(function() {
        $( ".next" ).addClass("is-selected");
        $( ".next-name" ).removeClass("is-selected-footer");
 });

$("footer").mouseout(function() {
         $( ".next" ).removeClass("is-selected");
	        $( ".next-name" ).addClass("is-selected-footer");

});