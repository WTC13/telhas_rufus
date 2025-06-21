$(document).ready(function(){
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navTitle = $('.nav-title');

    $(window).on('scroll', function(){
        const header = $('header');
        let activeSectionIndex = 0;
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        if(scrollPosition <= 0){
            header.css('box-shadow', 'none');
        }
        else{
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if(scrollPosition >= sectionTop && scrollPosition < sectionBottom){
                activeSectionIndex = i;
                return false;
            }
        })


        navTitle.removeClass('active');
        $(navTitle[activeSectionIndex]).addClass('active');
    });
    
    
    // --- Configuração do Owl Carousel (seu código original) ---
    $('.owl-carousel').owlCarousel({
        loop:true,
        center:true,
        margin:100,
        nav:true,
        items: 1,
        dots: true,
        // autoplay: true,
        // autoplayTimeout: 3000,
        // autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    // --- Funcionalidade do Formulário de Contato para WhatsApp ---
    $('#enviarWhatsapp').on('click', function() {
        // Pega os valores dos campos usando jQuery
        const name = $('#name').val();
        const email = $('#email').val();
        const number = $('#number').val();
        const mensagem = $('#mensagem').val();

        const numeroWhatsapp = '5511937269362';

        // Validação básica dos campos
        if (!name || !email || !number || !mensagem) {
            alert('Por favor, preencha todos os campos obrigatórios (Nome, E-mail, Mensagem).');
            return; // Sai da função se não estiverem preenchidos
        }
        
        // Monta a mensagem que aparecerá no WhatsApp
        let textoMensagem = `Olá! sou ${name} e ${mensagem}.`;

        // Codifica o texto para ser usado na URL
        const mensagemCodificada = encodeURIComponent(textoMensagem);

        // Cria a URL da API do WhatsApp
        const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensagemCodificada}`;

        // Abre uma nova aba/janela com o link do WhatsApp
        window.open(urlWhatsapp, '_blank');

        alert('Sua mensagem foi preparada para o WhatsApp. Por favor, confirme o envio na nova aba/janela.');
        // Limpa o formulário usando jQuery
        $('#contactForm')[0].reset();
    });

    
});