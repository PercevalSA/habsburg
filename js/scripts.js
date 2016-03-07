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
<<<<<<< HEAD

=======
        
>>>>>>> 91eeb50fdeecb0117e0b513fccb75978b822c275
        if (this.hash=="#section1") {
            $('.scroll-up').hide();
        }
        else {
            $('.scroll-up').show();
        }
<<<<<<< HEAD


=======
        
        
>>>>>>> 91eeb50fdeecb0117e0b513fccb75978b822c275
        // activte animations in this section
        target.find('.animate').delay(1200).addClass("animated");
        setTimeout(function(){
            target.find('.animated').removeClass("animated");
        },2000);
<<<<<<< HEAD

=======
        
>>>>>>> 91eeb50fdeecb0117e0b513fccb75978b822c275
        return false;
      }
    }
});

/*toogle position */

$(".toggle-position").click(function(){
    $("#rudolf4").toggleClass("rudolf4")
<<<<<<< HEAD
    $("#karl6").toggleClass("karl6")
    $("#leopold1").toggleClass("leopold1")
    $("#maria").toggleClass("maria")
    $("#josef2").toggleClass("josef2")
=======
    $("#charles").toggleClass("charles")
    $("#ferdinand").toggleClass("ferdinand")
    $("#rudolf2").toggleClass("rudolf2")
    $("#leopold").toggleClass("leopold")
    $("#joseph").toggleClass("joseph")
    $("#franz").toggleClass("franz")
    $("#maria").toggleClass("maria")
    $("#franzjoseph").toggleClass("franzjoseph")
>>>>>>> 91eeb50fdeecb0117e0b513fccb75978b822c275
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

$("#zeynep").hover(function(){
    $("#fbk-research").toggleClass("critique anime-flow")
<<<<<<< HEAD
    $("#sandvig").toggleClass("sappuie anime-flow");
=======
    $("#sandvig").toggleClass("sappuie anime-flow");   
>>>>>>> 91eeb50fdeecb0117e0b513fccb75978b822c275
});

$("#sandvig").hover(function(){
    $("#fbk-research").toggleClass("critique anime-flow")
    $("#heszter").toggleClass("sappuie anime-flow");
});

$("#jacob").hover(function(){
  $("#zittrain").toggleClass("sappuie anime-flow")
  $("#boutin").toggleClass("sappuie anime-flow");
});

$("#cnil").hover(function(){
  $("#google").toggleClass("surveille anime-flow")
  $("#fbk").toggleClass("surveille anime-flow");
});

$("#comeur").hover(function(){
  $("#google").toggleClass("surveille anime-flow")
  $("#fbk").toggleClass("surveille anime-flow")
  $("#yahoo").toggleClass("surveille anime-flow");
});

$("#ctrleur").hover(function(){
  $("#google").toggleClass("surveille anime-flow")
  $("#fbk").toggleClass("surveille anime-flow")
  $("#yahoo").toggleClass("surveille anime-flow");
});

$("#reddit").hover(function(){
    $("#google").toggleClass("alternative anime-flow");
});

/* juridiction cas */

$('#cas1').click(function(){
  $('#etaye1').slideToggle("hidin")
});

$('#cas2').click(function(){
  $('#etaye2').slideToggle("hidin")
});

$('#cas3').click(function(){
  $('#etaye3').slideToggle("hidin")
});

/*interview */

$('#q1').click(function(){
  $('#r1').slideToggle("hidin")
});

$('#q2').click(function(){
  $('#r2').slideToggle("hidin")
});

$('#q3').click(function(){
  $('#r3').slideToggle("hidin")
});

$('#q4').click(function(){
  $('#r4').slideToggle("hidin")
});

$('#q5').click(function(){
  $('#r5').slideToggle("hidin")
});

$('#q6').click(function(){
  $('#r6').slideToggle("hidin")
});
<<<<<<< HEAD
=======





>>>>>>> 91eeb50fdeecb0117e0b513fccb75978b822c275
