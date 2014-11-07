$(document).on('pagecreate', '#setting', function () {

    $("#happenset").on("click", function (event) {
        window.location.href = "setting.html#setting_happening";
    });

    $("#retailset").on("click", function (event) {
        window.location.href = "setting.html#setting_retailer";
    });

});
