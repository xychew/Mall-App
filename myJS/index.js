$(document).on('pagecreate', '#splashscreen', function () {

    setTimeout(function () {
        window.location.href = "#login";
    }, 1500);

});

$(document).on('pagecreate', '#login', function () {

    $("#btnLogin").on("click", function (event) {
        window.location.href = "#happening";
    });

    $("#linkForgetPassword").on("click", function (event) {
        window.location.href = "#forgetPassword";
    });

    $("#linkSignup").on("click", function (event) {
        window.location.href = "#register";
    });

});

$(document).on('pagecreate', '#forgetPassword', function () {

    $("#btnGetCode").on("click", function (event) {
        window.location.href = "#activation";
    });

});

$(document).on('pagecreate', '#activation', function () {

    $("#btnActivate").on("click", function (event) {
        window.location.href = "#createPassword";
    });

});

$(document).on('pagecreate', '#createPassword', function () {

    $("#btnCreatePassword").on("click", function (event) {
        window.location.href = "#happening";
    });

});

$(document).on('pagecreate', '#register', function () {

    $("#btnRegister").on("click", function (event) {
        window.location.href = "#guidelines";
    });

});

$(document).on('pagecreate', '#guidelines', function () {

    $("#btnAccept").on("click", function (event) {
        window.location.href = "#activation";
    });

    $("#btnDecline").on("click", function (event) {
        window.location.href = "#register";
    });

});


$(document).on('pagebeforecreate ', '#happening', function () {

    $("#happening").on("swiperight", swiperightHandler_happening);

    function swiperightHandler_happening(event) {

        $.mobile.changePage("index.html#menu", {
            transition: "slide",
            reverse: true
        });
    }

    $("#happening").on("swipeleft", swipeleftHandler_happening);

    // Callback function references the event target and adds the 'swipeleft' class to it
    function swipeleftHandler_happening(event) {

        $.mobile.changePage("index.html#search", {
            transition: "slide",
            reverse: false
        });
    }

    $("#menu").on("swipeleft", swipeleftHandler_Menu);

    // Callback function references the event target and adds the 'swipeleft' class to it
    function swipeleftHandler_Menu(event) {

        $.mobile.changePage("index.html#happening", {
            transition: "slide",
            reverse: false
        });
    }

    $("#search").on("swiperight", swiperightHandler_search);

    // Callback function references the event target and adds the 'swiperight' class to it
    function swiperightHandler_search(event) {
        //window.location.href = "menu.html";

        $.mobile.changePage("index.html#happening", {
            transition: "slide",
            reverse: true
        });
    }
});