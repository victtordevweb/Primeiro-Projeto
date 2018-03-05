$('document').ready(function () {
  /*  if(screen.width <= 767) {*/
    /*/ =========== Script Manu Hamburguer /*/
    var Closed = false;
    var sldMenu = $('#cabecalho .menu-cb.mobile');
   sldMenu.hide();
    $('.hamburger').click(function () {
       $('body').toggleClass('menu-mobile').addClass('back-mobile');

        sldMenu.slideToggle(700);
      if (Closed == true) {
        $(this).removeClass('open');
        $(this).addClass('closed');
        Closed = false;
      } else {               
        $(this).removeClass('closed');
        $(this).addClass('open');
        Closed = true;
      }
    });
    /*/ Encerra Script Menu Hamburguer /*/

    $(window).scroll(function(){
      if ($(this).scrollTop() > 30) {
        $('body').addClass('back-mobile');
          
      } else {
        $('body').removeClass('back-mobile');
      }
    });

    $(window).scroll(function(){
    if ($(this).scrollTop() < 1) {
      sldMenu.slideUp(500);
        $('.hamburger').addClass('closed').removeClass('open');
    }else {

    }
  });
/* }*/
});