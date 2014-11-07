$(document).on('pagecreate', '#favourite', function () {

    $("#viewShopB").on("click", function (event) {
        window.location.href = "directory.html#directory_food_burger";
    });

    $("#viewShopF").on("click", function (event) {
        window.location.href = "directory.html#directory_fashion_padini";
    });

    $("#addCartF").on("click", function (event) {
        window.location.href = "myCart.html";
    });
});