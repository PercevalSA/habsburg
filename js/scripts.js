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
    $("#charles").toggleClass("charles")
    $("#ferdinand").toggleClass("ferdinand")
    $("#rudolf2").toggleClass("rudolf2")
    $("#leopold").toggleClass("leopold")
    $("#joseph").toggleClass("joseph")
    $("#franz").toggleClass("franz")
    $("#maria").toggleClass("maria")
    $("#franzjoseph").toggleClass("franzjoseph")
});

/*link between actors */

$("#rudolf").hover(function(){
    $(".rudolf4").toggleClass("rudolf4")
    $("#fbk").toggleClass("critique-perso anime-flow")
    $("#google").toggleClass("critique-perso anime-flow")
    $("#jacob").toggleClass("critique-par anime-flow");
});


$("#ddg").hover(function(){
    $("#google").toggleClass("alternative anime-flow")
    $("#yahoo").toggleClass("alternative anime-flow");
});

$("#random").hover(function(){
    $("#fbk").toggleClass("alternative anime-flow");
});

$("#fbk").hover(function(){
    $("#fbk-research").toggleClass("sappuie anime-flow");
});

$("#fbk-research").hover(function(){
    $("#zeynep").toggleClass("critique-par anime-flow")
    $("#sandvig").toggleClass("critique-par anime-flow")
    $("#heszter").toggleClass("critique-par anime-flow");
});