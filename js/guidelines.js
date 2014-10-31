$(document).on('pagecreate', '#guidelines', function () {

    $("#btnAccept").on("click", function (event) {
        window.location.href = "activation.html";
    });

    $("#btnDecline").on("click", function (event) {
        window.location.href = "register.html";
    });

});