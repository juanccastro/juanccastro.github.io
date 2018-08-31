// Carousel settings
var $carousel = $('.js-carousel');

$carousel.flickity({
  prevNextButtons: false,
  pageDots: true,
  imagesLoaded: true,
  percentPosition: false
});


var $imgs = $carousel.find('.carousel-cell img');
// get transform property
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';
// get Flickity instance
var flkty = $carousel.data('flickity');

$carousel.on( 'scroll.flickity', function() {
  flkty.slides.forEach( function( slide, i ) {
    var img = $imgs[i];
    var x = ( slide.target + flkty.x ) * -1/3;
    img.style[ transformProp ] = 'translateX(' + x  + 'px)';
  });
});


// Split each word in the cell title into a span.
var $cellTitle = $('.js-cell-title');

// Wrap every letter in the cell title 
$cellTitle.each(function() {
  var $this = $(this);
  var letters = $this.text().split('');

  $this = $(this);
  $this.empty();

  $.each(letters, function(i, el) {
    $this.append($('<span class="text-split">')
      .append($('<span class="text-split__inner">')
        .text(el)));
  });

  // Dirty way of getting the whitespace
  var emptySplits = $this.find('.text-split__inner:contains( )');
  emptySplits.addClass('whitespace');
  emptySplits.parent().addClass('whitespace');

});