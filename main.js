$(document).ready(function () {
    var submitSearchBtn = $("#submitSearchBtn");
    var searchValue;

    submitSearchBtn.on("click", function () {
        searchValue = $(".searchInput").val()
        document.getElementById("myOverlay").style.display = "none";
        $("#start").empty()
        $(".searchInput").val("")
        changeLocation();
        fiveDay();
    })

    function changeLocation() {
        var queryURL = `http://api.openweathermap.org/data/2.5/weather?zip=${searchValue},us&appid=f17120984cd2d82d4bc796031344984c`

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            createCard(response);
        })
    }


    $("#refresh").on("click", function () {
        location.reload();
    })

    function createCard(response) {
        var createList = $("<ul>");
        var displayTemp = $("<li>").text(`Current Temperature: ${response.main.temp}`);
        var displayHigh = $("<li>").text(`High: ${response.main.temp_max}`);
        var displayLow = $("<li>").text(`Low: ${response.main.temp_min}`);
        var displayHumidity = $("<li>").text(`Humidity: ${response.main.humidity}`);
        var displayWind = $("<li>").text(`Wind Speed: ${response.wind.speed}MPH`);

        var firstDiv = $("<div>").addClass("row")
        var secondDiv = $("<div>").addClass("col s12 m6")
        var thirdDiv = $("<div>").addClass("card blue-grey darken-1")
        var fourthDiv = $("<div>").addClass("card-content white-text")
        var cardTitle = $("<span>").addClass("card-title").text(response.name)
        var cardContent = $("<p>").addClass("information")

        $(".container").append(firstDiv)
        firstDiv.append(secondDiv) 
        secondDiv.append(thirdDiv)
        thirdDiv.append(fourthDiv)
        fourthDiv.append(cardTitle, cardContent)
        cardContent.append(createList);
        createList.append(displayTemp, displayHigh, displayLow, displayHumidity, displayWind);
    };

    function fiveDay() {
        var queryURL = `http://api.openweathermap.org/data/2.5/forecast?zip=${searchValue},us&appid=f17120984cd2d82d4bc796031344984c`

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
        })
    }
})