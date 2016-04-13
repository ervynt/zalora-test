$(document).ready(function() {
    $(".cms-jean-nav li").click(function() {
        $(".jsNavName").removeClass("cms-underline-copy");
        $jeanType = $(this).attr("data-jeans");
        $("#js" + $jeanType + "nav").addClass ("cms-underline-copy");
        $(".jsOtherJeans").hide();
        $("#js" + $jeanType + "jeans").show();
        console.info ("clicked");
   });

    $("#backtonavbar").click(function () {
        $("html, body").animate({
            scrollTop: $("#nav").offset().top
        }, 500);
    });
});


/* var backtonavbar = function() {
    document.getElementById('nav').scrollIntoView();
}; */