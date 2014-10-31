
$(document).on('pagebeforeshow ', '#happening', function () {

    $("#happening").on("swiperight", swiperightHandler_happening);

    function swiperightHandler_happening(event) {

        $.mobile.changePage("happening.html#menu", {
            transition: "slide",
            reverse: true
        });
    }

    $("#happening").on("swipeleft", swipeleftHandler_happening);

    // Callback function references the event target and adds the 'swipeleft' class to it
    function swipeleftHandler_happening(event) {

        $.mobile.changePage("happening.html#search", {
            transition: "slide",
            reverse: false
        });
    }

    $("#menu").on("swipeleft", swipeleftHandler_Menu);

    // Callback function references the event target and adds the 'swipeleft' class to it
    function swipeleftHandler_Menu(event) {

        $.mobile.changePage("happening.html#happening", {
            transition: "slide",
            reverse: false
        });
    }

    $("#search").on("swiperight", swiperightHandler_search);

    // Callback function references the event target and adds the 'swiperight' class to it
    function swiperightHandler_search(event) {
        //window.location.href = "menu.html";

        $.mobile.changePage("happening.html#happening", {
            transition: "slide",
            reverse: true
        });
    }



});


///////////////////////////////////////////////////
$(document).on('pagecreate', '#menu', function () {

    $("#profilebtn").on("click", function (event) {
        window.location.href = "myProfile.html";
    });

});

$(document).on('pagecreate', '#menu', function () {

    $("#eventbtn").on("click", function (event) {
        window.location.href = "event.html";
    });

});

$(document).on('pagecreate', '#menu', function () {

    $("#membershipbtn").on("click", function (event) {
        window.location.href = "membership.html";
    });

});

$(document).on('pagecreate', '#menu', function () {

    $("#centerbtn").on("click", function (event) {
        window.location.href = "center.html";
    });

});

$(document).on('pagecreate', '#menu', function () {

    $("#customerbtn").on("click", function (event) {
        window.location.href = "customerService.html";
    });

});

$(document).on('pagecreate', '#menu', function () {

    $("#parkingbtn").on("click", function (event) {
        window.location.href = "parking.html";
    });

});

$(document).on('pagecreate', '#menu', function () {

    $("#feedbackbtn").on("click", function (event) {
        window.location.href = "feedback.html";
    });

});

$(document).on('pagecreate', '#menu', function () {

    $("#settingbtn").on("click", function (event) {
        window.location.href = "setting.html";
    });

});

$(document).on('pagecreate', '#menu', function () {

    $("#directbtn").on("click", function (event) {
        window.location.href = "directory.html";
    });

});

$(document).on('pagecreate', '#menu', function () {

    $("#favouritebtn").on("click", function (event) {
        window.location.href = "favourite.html";
    });

});

$(document).on('pagecreate', '#menu', function () {

    $("#mycartbtn").on("click", function (event) {
        window.location.href = "myCart.html";
    });

});

$(document).on('pagecreate', '#center', function () {

    $("#viewdirectbtn").on("click", function (event) {
        window.location.href = "directory.html";
    });

});

$(document).on('pagecreate', '#menu', function () {
    $('#historybtn').on('click', function (event) {
        window.location.href = 'history.html';
    });
});

///////////////////////////////////////////////////

$(document).on('pagecreate', '#center', function () {
    $('#centerhome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#customer', function () {
    $('#customerhome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#directory', function () {
    $('#directoryhome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#directory_fashion', function () {
    $('#directory_fashionhome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#directory_fashion_padini', function () {
    $('#directory_fashion_padinihome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#directory_fashion_product', function () {
    $('#directory_fashion_producthome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#directory_food', function () {
    $('#directory_foodhome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#directory_food_burger', function () {
    $('#directory_food_burgerhome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#directory_food_product', function () {
    $('#directory_food_producthome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#event', function () {
    $('#eventhome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#listpage1', function () {
    $('#listpage1home').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#listpage2', function () {
    $('#listpage2home').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#listpage3', function () {
    $('#listpage3home').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#listpage4', function () {
    $('#listpage4home').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#favourite', function () {
    $('#favouritehome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#feedback', function () {
    $('#feedbackhome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#newfeedback', function () {
    $('#newfeedbackhome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#feedback_view1', function () {
    $('#feedback_view1home').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#history', function () {
    $('#historyhome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#membership', function () {
    $('#membershiphome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#mycart', function () {
    $('#mycarthome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#mycart_checkout', function () {
    $('#mycart_checkouthome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#mycart_checkout_method', function () {
    $('#mycart_checkout_methodhome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#mycart_checkout_method_cod', function () {
    $('#mycart_checkout_method_codhome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#profile', function () {
    $('#profilehome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#parking', function () {
    $('#parkinghome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#promotion_fashion', function () {
    $('#promotion_fashionhome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#promotion_food', function () {
    $('#promotion_foodhome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#setting', function () {
    $('#settinghome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#setting_happening', function () {
    $('#setting_happeninghome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});

$(document).on('pagecreate', '#setting_retailer', function () {
    $('#setting_retailerhome').on('click', function (event) {
        window.location.href = 'happening.html#happening';
    });
});


$(document).on('pagecreate', '#guidelines', function () {

    $("#btnAccept").on("click", function (event) {
        window.location.href = "login_activation.html";
    });

    $("#btnDecline").on("click", function (event) {
        window.location.href = "login_not_register.html";
    });

});