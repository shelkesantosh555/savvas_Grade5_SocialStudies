$(document).ready(function () {
    //addAccessibilityRolesAndTab();
    //setTabIndex();
    document.addEventListener('keydown', function (e) {
        var code = e.keyCode ? e.keyCode : e.which;
        if (e.keyCode === 9) {
            $('body').addClass('show-focus-outlines');
        }
    });
    document.addEventListener('click', function (e) {
        $('body').removeClass('show-focus-outlines');
    });
    setTimeout(function () {
        $(".annimmenu").removeClass("annimmenu")
        $(".annim1").removeClass("annim1")
        $(".annim2").removeClass("annim2")
        $(".annim3").removeClass("annim3")
        $(".annim4").removeClass("annim4")
        $(".annim4-1").removeClass("annim4-1")
        $(".annim4-2").removeClass("annim4-2")
        $(".annim4-3").removeClass("annim4-3")
        $(".annim4-4").removeClass("annim4-4")
        $(".annim4-5").removeClass("annim4-5")
        $(".annim4-11").removeClass("annim4-11")
        $(".annim4-22").removeClass("annim4-22")
        $(".annim4-33").removeClass("annim4-33")
        $(".annim4-44").removeClass("annim4-44")
        $(".annim4-55").removeClass("annim4-55")
        $(".annim4-111").removeClass("annim4-111")
        $(".annim4-222").removeClass("annim4-222")
        $(".annim4-333").removeClass("annim4-333")
        $(".annim4-444").removeClass("annim4-444")
        $(".annim4-555").removeClass("annim4-555")
        $(".white-bg").removeClass("white-bg")
        $(".annim-fade").removeClass("annim-fade")
        $("body.black").removeClass("black")

        InitCarousel();
    }, 3000)
});

$(document).on('click', '.link-learmore', function (event) {
    $('.container-fs-popup.disclaimer').ShowElement();
    $('.container-fs-popup.disclaimer .popup-content-title').focus();
    $(".container-fs").HideElement();
});

$(document).on('click', '#disclaimerClose', function (event) {
    $(".container-fs").ShowElement();
    $('.link-learmore').focus();
    $('.container-fs-popup.disclaimer').HideElement();
});

$(document).on('click', '#btn-discussiontip', function (event) {
    $('.container-fs-popup.discussiontip').ShowElement();
    $('.container-fs-popup.discussiontip .popup-content-title').focus();
    $(".container-fs").HideElement();
});

$(document).on('click', '#discussiontipClose', function (event) {
    $(".container-fs").ShowElement();
    $("#btn-discussiontip").focus();
    $('.container-fs-popup.discussiontip').HideElement();
});
$(document).on("click", "#close-discussiontip", function (event) {
    $(".container-fs").ShowElement();
    $("#btn-discussiontip").focus();
    $('.container-fs-popup.discussiontip').HideElement();
})

$(document).on("click", '.link-tab', function (event) {
    var ismobileview = $(this).closest(".top-mobile-menu-button").length > 0 ? true : false;
    if (ismobileview) {
        $(".mobile-menu").HideElement();
    }
    $(".sub-menu li.active").removeClass("active");
    $("li.top-menu-item.active").removeClass("active")
    $(this).closest("li.top-menu-item").addClass("active")
    if (!$(this).hasClass("active")) {
        var dataid = $(this).attr("data-tabid");
        if (dataid == "slide-before-reading") {
            $(".top-mobile-menu-button").addClass("homescreen")
            $(".top-mobile-menu-button").find(".nav-title h1").text($(this).text())
            $(".top-mobile-menu-button").find(".nav-title").HideElement();
        }
        else {
            $(".top-mobile-menu-button").removeClass("homescreen")
            $(".top-mobile-menu-button").find(".nav-title h1").text($(this).text())
            $(".top-mobile-menu-button").find(".nav-title").ShowElement();
        }
        $(this).closest("li.top-menu-item").addClass("active")
        $(".link-tab.active").removeClass("active").attr("aria-selected", "false")
        $(this).addClass("active").attr("aria-selected", "true")
        $("#" + dataid).find(".side-nav li a").removeClass("active").attr("aria-current", "false").removeAttr("aria-describedby");
        $("#" + dataid).ActiveTabs();
        $("#" + dataid).find(".side-nav li a:first").focus();
        $(".container-fs.slide:not(#" + dataid + ")").InactiveTabs();
    }
});

$(document).on("click", ".side-nav-circle ul li a", function (event) {
    $(".side-nav-circle ul li a").removeClass("active");
    $(this).addClass("active");
})

$(document).on("click", ".card-body .card-link", function (event) {
    var tablinkid = $(this).attr("data-tablinkid");
    $("#" + tablinkid).trigger("click");
})
$(document).on("click", "#linkNameTheFullMoon", function (event) {
    $('.container-fs-popup.fullmoon').ShowElement();
    $("#fullmoonClose").focus();
    $(".container-fs").HideElement();
})

$(document).on("click", "#close-fullmoonimage", function (event) {
    $(".container-fs").ShowElement();
    $("#linkNameTheFullMoon").focus();
    $('.container-fs-popup.fullmoon').HideElement();
})
$(document).on("click", "#fullmoonClose", function (event) {
    $(".container-fs").ShowElement();
    $("#linkNameTheFullMoon").focus();
    $('.container-fs-popup.fullmoon').HideElement();
})

$(document).on('keypress', '#fullmoonClose, #close-fullmoonimage, #close-discussiontip, #discussiontipClose, #disclaimerClose', function (event) {
    if (event.which == 13 || event.which == 32) {
        $(this).click();
    }
});

$(document).on("click", ".card-button", function (event) {
    var backVisible = $(this).hasClass("showback")
    if (backVisible) {
        $(this).removeClass("showback").attr("aria-expanded", "false")
        $("#livecontent").text("")
    }
    else {
        $(this).addClass("showback").attr("aria-expanded", "true")
        $("#livecontent").text($(this).find(".card-back").text());
    }
});

$(document).on('keyup', ".card-button", function (event) {
    if (event.which == 13 || event.which == 32) {
        $(this).click();
    }
});

$(document).on('click', 'button.activitySupport, a.activitySupport', function (event) {
    event.preventDefault();
    //debugger
    var popupref = $(this).attr("popupref")
    $('.container-fs-popup.' + popupref).ShowElement();
    var ashlength = $('.container-fs-popup.' + popupref).find(".popup-left-title").length;
    if (ashlength > 0) {
        $('.container-fs-popup.' + popupref).find(".popup-left-title").focus();
    }
    else {
        if ($('.container-fs-popup.' + popupref).find(".popup-content-title").length > 0) {
            $('.container-fs-popup.' + popupref).find(".popup-content-title").focus();
        }
        else {
            $('.container-fs-popup.' + popupref).find(".popup-close-btn").focus();
        }
    }
    $(".container-fs").HideElement();
    lastFocusedElement = $(this);
    event.preventDefault();
    event.stopPropagation();
});

$(document).on('click', '.ac-popup-close-btn', function (event) {
    $(".container-fs").ShowElement();
    lastFocusedElement.focus();
    $(this).closest(".container-fs-popup").HideElement();
    event.preventDefault();
    event.stopPropagation();
});

$(document).on("click", "#mobileMenuButton", function (event) {
    $(".mobile-menu").ShowElement();
    event.preventDefault();
    event.stopPropagation();
})
$(document).on("click", ".mobile-menu-overlay", function (event) {
    $(".mobile-menu").HideElement();
    event.preventDefault();
    event.stopPropagation();
})

var g_dotCount = 3;
var g_currDot = 1;
var g_colWdt = 0;
var g_iconsToShift = 0;

function InitCarousel() {
    if ($(".CarouselDots:visible").length > 0) {
        var colWidth = $(".card-wrap.row .col:first").width();
        g_colWdt = colWidth;
        var avalWidth = $(".card-wrap-container").width();
        var dotCount = avalWidth / colWidth;
        var displayedIcons = Math.trunc(dotCount);
        g_iconsToShift = displayedIcons;
        var totalIcons = 5
        g_dotCount = Math.ceil(totalIcons / displayedIcons)
        $(".CarouselDots").empty();

        for (var i = 0; i < g_dotCount; i++) {
            $(".CarouselDots").append('<span class="dot"></span>');
        }
        $(".CarouselDots .dot:first").addClass("active");
        $("#buttonCarouselPrev").addClass("inactive")
        $('.card-wrap-container').animate({ scrollLeft: 0 });
    }
}
$(document).on("click", "#buttonCarouselPrev", function (event) {
    g_currDot--;
    $(".CarouselDots .dot").removeClass("active");
    $(".CarouselDots .dot:nth-child(" + g_currDot + ")").addClass("active");
    var currscroll = $('.card-wrap-container').scrollLeft()
    $('.card-wrap-container').animate({ scrollLeft: (Number(currscroll) - (g_colWdt * g_iconsToShift)) });
    if (g_currDot == 1) {
        $("#buttonCarouselPrev").addClass("inactive")
        $("#buttonCarouselNext").removeClass("inactive")
    }
    else {
        $("#buttonCarouselPrev").removeClass("inactive")
        $("#buttonCarouselNext").removeClass("inactive")
    }
});
$(document).on("click", "#buttonCarouselNext", function (event) {
    g_currDot++;
    $(".CarouselDots .dot").removeClass("active");
    $(".CarouselDots .dot:nth-child(" + g_currDot + ")").addClass("active");
    var currscroll = $('.card-wrap-container').scrollLeft()
    $('.card-wrap-container').animate({ scrollLeft: (Number(currscroll) + (g_colWdt * g_iconsToShift)) });
    if (g_currDot == g_dotCount) {
        $("#buttonCarouselPrev").removeClass("inactive")
        $("#buttonCarouselNext").addClass("inactive")
    }
    else {
        $("#buttonCarouselPrev").removeClass("inactive")
        $("#buttonCarouselNext").removeClass("inactive")
    }
});

$(window).resize(function () {
    InitCarousel();
});

