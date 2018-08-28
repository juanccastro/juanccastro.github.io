$(window).scroll(function () { 
    //You've scrolled this much:
  		var newSize = $(window).scrollTop()/6;
  		var srotate = "translateX(-" + newSize + "px)";
  		$('.case-title').css({left:newSize,"-moz-transform" : srotate, "-webkit-transform" : srotate});
});