$(document).ready(function() {
    $("#primera #contenido").load("info/texto.markdown", function() {
        var converter = new showdown.Converter();
        var markdownText = $('#contenido').text();
        var html = converter.makeHtml(markdownText);
        $(' #contenido').html(html);
        $(this).find("img").addClass("card-img");
        $(this).find("a").addClass("btn btn-primary mt-2");
    });

});
