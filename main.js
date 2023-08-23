$(document).ready(function () {
    $('#carrosel-imagens').slick({
        autoplay: true,
        fade: true,
    })

    $('.menu-hamburger').click(() => {
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00)00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoInteresse: {
                required: false
            },
        },
        messages: {
            nome: 'Por favor insira seu nome '

        },
        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposincorretos = validador.numberOfInvalids()

            if (camposincorretos) {
                alert(`Existem ${camposincorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function () {
        const destino = $('#contato')

        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})