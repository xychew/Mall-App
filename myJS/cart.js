$(document).on('pagecreate', '#mycart', function () {

    $("#checkoutbtn").on("click", function (event) {
        window.location.href = "#mycart_checkout";
    });

});

$(document).on('pagecreate', '#mycart_checkout', function () {

    $("#next1btn").on("click", function (event) {
        window.location.href = "#mycart_checkout_method";
    });

});

$(document).on('pagecreate', '#mycart_checkout_method', function () {

    $("#next2btn").on("click", function (event) {
        window.location.href = "#mycart_checkout_method_cod";
    });

});

$(document).on('pagecreate', '#mycart_checkout_method_cod', function () {

    $("#confirm1btn").on("click", function (event) {
        window.location.href = "#mycart_checkout_method_cod_confirm";
    });

});

$(document).on('pagecreate', '#mycart_checkout_method_cod_confirm', function () {

    $("#okbtn1").on("click", function (event) {
        window.location.href = "#mycart";
    });

});