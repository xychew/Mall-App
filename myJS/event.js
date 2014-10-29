$("#month").change(function () {
    alert("You have selected " + $('#month :selected').text());
});


$(document).on('pagecreate', '#event', function () {

    $("#list1").on("click", function (event) {
        window.location.href = "eventlist.html#listpage1";
    });

});

$(document).on('pagecreate', '#event', function () {

    $("#list2").on("click", function (event) {
        window.location.href = "eventlist.html#listpage2";
    });

});

$(document).on('pagecreate', '#event', function () {

    $("#list3").on("click", function (event) {
        window.location.href = "eventlist.html#listpage3";
    });

});

$(document).on('pagecreate', '#event', function () {

    $("#list4").on("click", function (event) {
        window.location.href = "eventlist.html#listpage4";
    });

});