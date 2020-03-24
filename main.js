$(document).ready(function () {
    var submitSearchBtn = $("#submitSearchBtn");
    var searchValue;

    submitSearchBtn.on("click", function () {
        searchValue = $(".searchInput").val()
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
            var displayCityName = $("<h2>").text(response.name)
            $(".container").append(displayCityName);
        })
    }
    

})

