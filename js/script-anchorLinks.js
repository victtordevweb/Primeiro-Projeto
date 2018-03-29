$(document).ready(function(){
 
    
    var scrollLink = $('#cabecalho nav.menu-cb > ul > li > a.scroll');

    // ao clicar no elemento Var, vai pegar automaticamente a Hashteg do elemento var.

    scrollLink.click(function(e){
        e.preventDefault();
        $('#cabecalho nav.menu-cb > ul .running-line-mobile').removeClass('off');
        $('body, html').animate({

            scrollTop: $(this.hash).offset().top
        }, 1200)
    });

// =========================Ativar Color no menu quando estiver positionado nas div responsaveis.
    $(window).scroll(function(){
        var removeActv = $('#cabecalho nav.menu-cb > ul > li.activeAnchor');
        var scrollPosition = $(this).scrollTop();

        scrollLink.each(function(){
            var sectionOffset = $(this.hash).offset().top - 169;

 

           if( sectionOffset <= scrollPosition ){
          $('#cabecalho nav.menu-cb > ul .running-line').removeClass('off');

                $(this).parent().addClass('activeAnchor');
                $(this).parent().siblings().removeClass('activeAnchor');
       if(scrollPosition > 768 ){         
            var LineWidth = $(this).width();
            var LineLeft = $(this).position().left;
            var runLine = $('#cabecalho nav.menu-cb > ul .running-line');
                    runLine.animate({
                      width: LineWidth,
                      left: LineLeft
                        }, 001);
                   }

                  /* if(scrollPosition < 767 ){  */       
                
                     /*   if($('#cabecalho nav.menu-cb.mobile > ul > li').hasClass('um activeAnchor')){
                            $('#cabecalho nav.menu-cb > ul .running-line-mobile').removeClass('off');
                            $('#cabecalho nav.menu-cb > ul .running-line-mobile').css('top','14px');
                        }
                        if($('#cabecalho nav.menu-cb.mobile > ul > li').hasClass('dois activeAnchor')){
                            $('#cabecalho nav.menu-cb > ul .running-line-mobile').css('top','55px');
                        }
                        if($('#cabecalho nav.menu-cb.mobile > ul > li').hasClass('tres activeAnchor')){
                            $('#cabecalho nav.menu-cb > ul .running-line-mobile').css('top','96px');
                        }
                        if($('#cabecalho nav.menu-cb.mobile > ul > li').hasClass('quatro activeAnchor')){
                            $('#cabecalho nav.menu-cb > ul .running-line-mobile').css('top','137px');
                        }
                        if($('#cabecalho nav.menu-cb.mobile > ul > li').hasClass('cinco activeAnchor')){
                            $('#cabecalho nav.menu-cb > ul .running-line-mobile').css('top','178px');
                        }*/
                        var seletorLI = "#cabecalho nav.menu-cb.mobile > ul > li";
                        var seletorRunLineMob = "#cabecalho nav.menu-cb > ul .running-line-mobile";
                        var classLI = {
                            'um':'14px',
                            'dois':'55px',
                            'tres':'96px',
                            'quatro':'137px',
                            'cinco':'178px'
                        }
                        
                        for (var chave in classLI) {
                            if ($(seletorLI).hasClass(chave+' activeAnchor')) {
                                if($(seletorLI).hasClass('um activeAnchor')){
                                    $(seletorRunLineMob).removeClass('off');
                                }
                                $(seletorRunLineMob).css('top', classLI[chave]);
                            }

                        }
                       /*    }*/
                        
                            }

 
    
                
                
            
            

        });

        if ($(this).scrollTop() <= 1) {
          $('#cabecalho nav.menu-cb > ul .running-line').addClass('off');
            removeActv.removeClass('activeAnchor');
        }   

    });


});
