$(function() {

    $(".box_mnu .panel-heading").each(function() {
        var ph = $(this).height() + 3;
        var pdt = $(this).find(".dropdown-toggle");
        pdt.height(ph);
    });

});