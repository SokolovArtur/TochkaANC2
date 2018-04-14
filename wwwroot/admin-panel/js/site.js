function StickyFooter() {
    let heightBrowser = $(window).height();
    let heightContainerBlock = $(document).height();

    (heightContainerBlock <= heightBrowser) ? $("footer").addClass("fixed-bottom") : $("footer").removeClass("fixed-bottom");
}

$(document).ready(function() {
    // Sticky Footer
    StickyFooter();
    $(window).resize(function () {
        StickyFooter();
    });

    // Data Confirm
    $("[data-confirm]").click(function() {
        let message = $(this).attr("data-confirm");
        if (!message) {
            message = "Подтвердите свои действия.";
        }

        if (!confirm(message)) {
            return false;
        }
    });

    // MDBootstrap
    $(".button-collapse").sideNav();

    $('.mdb-select').material_select();
    // END MDBootstrap
});