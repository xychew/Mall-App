$(document).on('pagecreate', '#feedback', function () {

    $("#newfeed").on("click", function (event) {
        window.location.href = "feedback.html#newfeedback";
    });

    $("#ok_newfeedbackbtn").on("click", function (event) {
        window.location.href = "feedback.html#feedback";
    });

    $("#feed1").on("click", function (event) {
        window.location.href = "feedback.html#feedback_view1";
    });

    $("#feed2").on("click", function (event) {
        window.location.href = "feedback.html#feedback_view1";
    });

    $("#feed3").on("click", function (event) {
        window.location.href = "feedback.html#feedback_view1";
    });

    $("#feed4").on("click", function (event) {
        window.location.href = "feedback.html#feedback_view1";
    });

    $("#yes_deletebtn").on("click", function (event) {
        window.location.href = "feedback.html#feedback";
    });
});