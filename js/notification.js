$(document).on('pagebeforeshow ', '#notification', function () {

    $("#notification").on("swiperight", swiperightHandler_Notification);

    // Callback function references the event target and adds the 'swiperight' class to it
    function swiperightHandler_Notification(event) {
        //window.location.href = "menu.html";

        $.mobile.changePage("notification.html#menu", {
            transition: "slide",
            reverse: true
        });
    }

    $("#notification").on("swipeleft", swipeleftHandler_Notification);

    // Callback function references the event target and adds the 'swipeleft' class to it
    function swipeleftHandler_Notification(event) {

        $.mobile.changePage("notification.html#contactus", {
            transition: "slide",
            reverse: false
        });
    }

    $("#menu").on("swipeleft", swipeleftHandler_Menu);

    // Callback function references the event target and adds the 'swipeleft' class to it
    function swipeleftHandler_Menu(event) {

        $.mobile.changePage("notification.html#notification", {
            transition: "slide",
            reverse: false
        });
    }

    $("#contactus").on("swiperight", swiperightHandler_ContactUs);

    // Callback function references the event target and adds the 'swiperight' class to it
    function swiperightHandler_ContactUs(event) {
        //window.location.href = "menu.html";

        $.mobile.changePage("notification.html#notification", {
            transition: "slide",
            reverse: true
        });
    }



});