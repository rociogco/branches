$(function() {

    $('#enviarCorreo').click(function() {
        alert("El correo fue enviado correctamente...");
    });


    $('body').on('dblclick', '.cambio-color', function() {
        $(this).css("color", "red");
    })

    $(".card-title").click(function() {
        $(".card-text").toggle("slow", function() {

        });
    });

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })


});