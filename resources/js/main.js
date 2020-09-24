//MixitUp 
var mixer = mixitup('.grid-protfolio-container');

//Scrollify
 $(function() {
      $.scrollify({
        section : ".scrollify",
        setHeights: false,  
      });
});

//HEMBERGER MENU 

function openMenu(){
    document.getElementById('navbar').style.height = "100%";
}
function closeMenu(){
    document.getElementById('navbar').style.height = "0%";
}

//Smooth Scroll

$(function(){
    $('.menu-item a, .scroll-arrow a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        
        return false;
    });
});