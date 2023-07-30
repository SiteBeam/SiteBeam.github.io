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
        if (asunto == "Otro") {
            $("#contacto #otro").removeClass("transparente");
        } else {
            $("#contacto #otro").addClass("transparente");
        }
    });
    $("#basico").click(function () {
        $(".plan").removeClass("active")
        $(this).addClass("active")
        $("#contacto #asunto").val("Plan basico");
    });
    $("#oferta").click(function () {
        $(".plan").removeClass("active")
        $(this).addClass("active")
        $("#contacto #asunto").val("Oferta");
    });
    $("#premium").click(function () {
        $(".plan").removeClass("active")
        $(this).addClass("active")
        $("#contacto #asunto").val("Plan premium");
    });

    $("#diseno-1").load("info/diseno-1.md", function () {
        var converter = new showdown.Converter();
        var markdownText = $("#diseno-1").html();
        var html = converter.makeHtml(markdownText);
        $('#diseno-1').html(html);
        var contenido = $('#diseno-1').html();
        $("#diseno-1").empty();
        $("#diseno-1").addClass("container pt-3 pb-3");
        $("#diseno-1").append('<div class="card bg-tema-secundario border-0"></div>');
        $("#diseno-1 .card").append('<div class="card-body text-tema-secundario">' + contenido + '</div>');
        $("#diseno-1 .card-body").append('<div id="tiposPage" class="row"></div>');
        //one page
        $("#diseno-1 #tiposPage").append('<div id="onePage" class="col-12 col-sm-4"></div>');
        $("#diseno-1 #onePage").append('<div class="card border-0 bg-tema"></div>');
        $("#diseno-1 #onePage .card").append('<div class="card-body text-tema"></div>');
        var titulo1 = $("#diseno-1 h3").eq(0).html();
        var precio1 = $("#diseno-1 h3").eq(1).html();
        var lista1 = $("#diseno-1 ul").eq(0).html();
        var titulo2 = $("#diseno-1 h3").eq(2).html();
        var precio2 = $("#diseno-1 h3").eq(3).html();
        var lista2 = $("#diseno-1 ul").eq(1).html();
        var titulo3 = $("#diseno-1 h3").eq(4).html();
        var precio3 = $("#diseno-1 h3").eq(5).html();
        var lista3 = $("#diseno-1 ul").eq(2).html();
        $("#diseno-1 h3").remove();
        $("#diseno-1 ul").remove();
        $("#diseno-1 #onePage .card-body").append('<div class="row"><div class="col-6"><span class="fs-4">'+titulo1+'</span></div><div class="col-6"><span class="fs-4 fw-bold">'+precio1+'</span></div> </div>');
        $("#diseno-1 #onePage .card-body").append('<div class="linea-secundaria rounded-pill mt-2 mb-2"></div>');
        $("#diseno-1 #onePage .card-body").append(lista1);
        //landing page
        $("#diseno-1 #tiposPage").append('<div id="landingPage" class="col-12 col-sm-4"></div>');
        $("#diseno-1 #landingPage").append('<div class="card border-0 bg-tema"></div>');
        $("#diseno-1 #landingPage .card").append('<div class="card-body text-tema"></div>');
        $("#diseno-1 #landingPage .card-body").append('<div class="row"><div class="col-6"><span class="fs-4">'+titulo2+'</span></div><div class="col-6"><span class="fs-4 fw-bold">'+precio2+'</span></div> </div>');
        $("#diseno-1 #landingPage .card-body").append('<div class="linea-secundaria rounded-pill mt-2 mb-2"></div>');
        $("#diseno-1 #landingPage .card-body").append(lista2);
        //empresa page
        $("#diseno-1 #tiposPage").append('<div id="empresaPage" class="col-12 col-sm-4"></div>');
        $("#diseno-1 #empresaPage").append('<div class="card border-0 bg-tema"></div>');
        $("#diseno-1 #empresaPage .card").append('<div class="card-body text-tema"></div>');
        $("#diseno-1 #empresaPage .card-body").append('<div class="row"><div class="col-6"><span class="fs-4">'+titulo3+'</span></div><div class="col-6"><span class="fs-4 fw-bold">'+precio3+'</span></div> </div>');
        $("#diseno-1 #empresaPage .card-body").append('<div class="linea-secundaria rounded-pill mt-2 mb-2"></div>');
        $("#diseno-1 #empresaPage .card-body").append(lista3);
    });
});