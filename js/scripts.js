/* activate scrollspy menu */
$('body').scrollspy({
  target: '#navbar-collapsible',
  offset: 52
});

/* smooth scrolling sections */
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 800);

        if (this.hash=="#section1") {
            $('.scroll-up').hide();
        }
        else {
            $('.scroll-up').show();
        }

        // activte animations in this section
        target.find('.animate').delay(1200).addClass("animated");
        setTimeout(function(){
            target.find('.animated').removeClass("animated");
        },2000);

        return false;
      }
    }
});

/*toogle position */

$(".toggle-position").click(function(){
    $("#rudolf4").toggleClass("rudolf4")
        $("#univ").toggleClass("rudolf4")

    $("#karl6").toggleClass("karl6")
        $("#sanktion").toggleClass("karl6")

    $("#leopold1").toggleClass("leopold1")
        $("#kunste").toggleClass("leopold1")

    $("#maria").toggleClass("maria")

    $("#josef2").toggleClass("josef2")
        $("#mozart").toggleClass("josef2")
        $("#schulreform").toggleClass("josef2")

});

/*link between actors */

$("#rudolf4").click(function(){
    $("#rudolf4").toggleClass("rudolf4")
    $("#univ").toggleClass("rudolf4")
});

$("#josef2").click(function(){
    $("#josef2").toggleClass("josef2")
    $("#mozart").toggleClass("josef2")
    $("#schulreform").toggleClass("josef2")
});

$("#leopold1").click(function(){
    $("#leopold1").toggleClass("leopold1")
    $("#kunste").toggleClass("leopold1")
});


$("#karl6").click(function(){
    $("#karl6").toggleClass("karl6")
    $("#sanktion").toggleClass("karl6")
});

