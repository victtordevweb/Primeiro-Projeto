$(document).ready(function(){
	$('.box-login-center:not(.cadastro)').addClass('initial');

		$('.cdtr').click(function(){

			$('body').toggleClass('dropped-box');
			$('.box-login-center:not(.cadastro)').removeClass('time-effct');
		if(	$(this).text() == ('Crie sua Conta')){
			$(this).text('Faça seu Login');
		} else {
			$(this).text('Crie sua Conta');
		}

		});



		      if (localStorage.formCadastro == 'true') {
		      	$('.box-login-center:not(.cadastro)').addClass('time-effct');
		     
			
        $('body').addClass('dropped-box');
            localStorage.setItem('formCadastro', 'false');

           		 if($('.cdtr').text() == ('Crie sua Conta')){
						$('.cdtr').text('Faça seu Login');
					}       
        }	else {}

});