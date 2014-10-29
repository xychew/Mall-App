$(document).on('pagecreate', '#feedback', function () {

    $("#newfeed").on("click", function (event) {
        window.location.href = "feedback_new.html";
    });

});

$(document).on('pagecreate', '#newfeedback', function () {

    $("#ok_newfeedbackbtn").on("click", function (event) {
        window.location.href = "feedback.html";
    });

});

$(document).on('pagecreate', '#feedback', function () {

    $("#feed1").on("click", function (event) {
        window.location.href = "feedback_view.html#feedback_view1";
    });

});

$(document).on('pagecreate', '#feedback', function () {

    $("#feed2").on("click", function (event) {
        window.location.href = "feedback_view.html#feedback_view1";
    });

});

$(document).on('pagecreate', '#feedback', function () {

    $("#feed3").on("click", function (event) {
        window.location.href = "feedback_view.html#feedback_view1";
    });

});

$(document).on('pagecreate', '#feedback', function () {

    $("#feed4").on("click", function (event) {
        window.location.href = "feedback_view.html#feedback_view1";
    });

});

$(document).on('pagecreate', '#feedback_view1', function () {

    $("#yes_deletebtn").on("click", function (event) {
        window.location.href = "feedback.html";
    });

});