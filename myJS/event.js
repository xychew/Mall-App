//$("#month").change(function () {
//    alert("You have selected " + $('#month :selected').text());
//});

$(document).on('pagecreate', '#event', function () {

    $("#list1").on("click", function (event) {
        window.location.href = "event.html#listpage1";
    });

    $("#list2").on("click", function (event) {
        window.location.href = "event.html#listpage2";
    });

    $("#list3").on("click", function (event) {
        window.location.href = "event.html#listpage3";
    });

    $("#list4").on("click", function (event) {
        window.location.href = "event.html#listpage4";
    });

});