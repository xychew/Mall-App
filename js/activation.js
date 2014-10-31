$(document).on('pagecreate', '#activation', function () {

    $("#btnActivate").on("click", function (event) {
        window.location.href = "createpassword.html";
    });

});