$(document).ready(function () {
    var submitSearchBtn = $("#submitSearchBtn");
    var searchValue;

    submitSearchBtn.on("click", function () {
        searchValue = $(".searchInput").val()
        document.getElementById("myOverlay").style.display = "none";
        $("#start").empty()
        changeLocation();
        console.log(searchValue)
    })

    function changeLocation() {
        var queryURL = `http://api.openweathermap.org/data/2.5/weather?zip=${searchValue},us&appid=f17120984cd2d82d4bc796031344984c`

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            var displayLocationName = $("<h2>").text(response.name)
            $(".container").append(displayLocationName);
        })
    }
})

$("#refresh").on("click", function() {
    location.reload();
})

