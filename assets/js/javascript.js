  // --- mobile function ------------------------------------------

  function openNav(){
    var nav = document.getElementById('menu');
        nav.style.width = '100%';
}

function closeNav(){
    var nav = document.getElementById('menu');
        nav.style.width = '0'
}


function slideSwitch() {
    var $active = $('#slideshow img.active');
 
    if ( $active.length == 0 ) $active = $('#slideshow img:last');
 
    var $next =  $active.next().length ? $active.next()
       : $('#slideshow img:first');
 
    $active.addClass('last-active');
 
    $next.css({opacity: 0.0})
       .addClass('active')
       .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
       });
 }
 
 $(function() {
    setInterval( "slideSwitch()", 3000 );
 });