$(document).on('pagecreate', '#mycart', function () {

    $("#checkoutbtn").on("click", function (event) {
        window.location.href = "myCart_checkout.html";
    });

});

$(document).on('pagecreate', '#mycart_checkout', function () {

    $("#next1btn").on("click", function (event) {
        window.location.href = "myCart_checkout_method.html";
    });

});

$(document).on('pagecreate', '#mycart_checkout_method', function () {

    $("#next2btn").on("click", function (event) {
        window.location.href = "myCart_checkout_method_cod.html";
    });

});


$(document).on('pagecreate', '#mycart_checkout_method_cod', function () {

    $("#confirm1btn").on("click", function (event) {
        window.location.href = "myCart_checkout_method_cod.html#mycart_checkout_method_cod_confirm";
    });

});

$(document).on('pagecreate', '#mycart_checkout_method_cod_confirm', function () {

    $("#okbtn1").on("click", function (event) {
        window.location.href = "myCart.html";
    });

});
