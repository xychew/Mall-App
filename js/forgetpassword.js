$(document).on('pagecreate', '#forgetpassword', function () {

    $("#btnGetCode").on("click", function (event) {
        window.location.href = "activation.html";
    });

});