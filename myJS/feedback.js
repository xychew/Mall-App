$(document).on('pagecreate', '#feedback', function () {

    $("#newfeed").on("click", function (event) {
        window.location.href = "feedback.html#newfeedback";
    });

    $("#btn_feedback_ok").on("click", function (event) {
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

    $("#btn_feedbackview1_delete").on("click", function (event) {
        window.location.href = "feedback.html#feedback";
    });
});