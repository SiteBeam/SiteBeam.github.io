$(document).ready(function () {
    $("#primera #contenido").load("info/texto.markdown", function () {
        var converter = new showdown.Converter();
        var markdownText = $('#contenido').text();
        var html = converter.makeHtml(markdownText);
        $(' #contenido').html(html);
        $(this).find("img").addClass("card-img");
        $(this).find("a").addClass("btn btn-tema rounded-pill mt-2");
    });
    $("#navEnlace").load("info/nav.markdown", function () {
        var converter = new showdown.Converter();
        var markdownText = $('#navEnlace').text();
        var html = converter.makeHtml(markdownText);
        $("#navEnlace").html(html);
        $("#navEnlace").find("a").addClass("btn btn-tema-nav rounded-pill");
        $("#navEnlace").find("a").eq(0).addClass("active");
        $("#navEnlace a").before("<li class='nav-item mb-2 me-2'></li>");
        $(this).find("li").eq(0).append($("#navEnlace").find("a").eq(0));
        $(this).find("li").eq(1).append($("#navEnlace").find("a").eq(1));
        $("#navEnlace").prepend($(".nav-item"));
    });
    $("#sitioUno").load("info/sitios.markdown", function () {
        var converter = new showdown.Converter();
        var markdownText = $("#sitioUno").text();
        var html = converter.makeHtml(markdownText);
        $("#sitioUno").html(html);
        $(this).find("img").addClass("card-img");
        $("#sitioDos").prepend($("#sitioUno").find("h2").eq(1));
        $("#sitioDos").append($("#sitioUno").find("a").eq(1));
        $("p").each(function () {
            if ($(this).length == 0) {
                $(this).addClass("empty-p");
            }
        });
        $(".empty-p").remove();
    });
    //carrusel sitios
    $("#carrusel").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        pauseOnHover: true,
        infinite: true,
        edgeFriction: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    autoplaySpeed: 4000,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 4000,
                },
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 4000,
                },
            },
        ],
    });

    var fechaActual = new Date();
    // Obtener año actual
    var anioActual = fechaActual.getFullYear();
    $("#anio").text(anioActual);
    //formulario contacto
    $("#contacto #asunto").change(function () {
        var asunto = $("#contacto #asunto").val();
        if (asunto == "6") {
          $("#contacto #otro").removeClass("transparente");
        } else {
          $("#contacto #otro").addClass("transparente");
        }
      });
});
