$(document).ready(function () {
    var submitSearchBtn = $("#submitSearchBtn");
    var searchValue;
    var currentDate = moment().format("MM/DD/YYYY")
    var futureDates = {
        tomorrow: moment().add(1, "d").format("MM/DD/YYYY"),
        twoDays: moment().add(2, "d").format("MM/DD/YYYY"),
        threeDays: moment().add(3, "d").format("MM/DD/YYYY"),
        fourDays: moment().add(4, "d").format("MM/DD/YYYY"),
        fiveDays: moment().add(5, "d").format("MM/DD/YYYY")
    };

    console.log(futureDates);

    submitSearchBtn.on("click", function () {
        searchValue = $(".searchInput").val()
        document.getElementById("myOverlay").style.display = "none";
        $("#start").empty()
        $(".searchInput").val("")
        $(".container").empty()
        changeLocation();
        // fiveDay();
    })

    function changeLocation() {
        var queryURL = `http://api.openweathermap.org/data/2.5/weather?zip=${searchValue},us&mode=json&units=imperial&appid=f17120984cd2d82d4bc796031344984c`

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
        var displayTemp = $("<li>").text(`Current Temperature: ${response.main.temp}° F`);
        var displayHigh = $("<li>").text(`High: ${response.main.temp_max}° F`);
        var displayLow = $("<li>").text(`Low: ${response.main.temp_min}° F`);
        var displayHumidity = $("<li>").text(`Humidity: ${response.main.humidity}`);
        var displayWind = $("<li>").text(`Wind Speed: ${response.wind.speed}MPH`);

        var firstDiv = $("<div>").addClass("row")
        var secondDiv = $("<div>").addClass("col s12 m6")
        var thirdDiv = $("<div>").addClass("card blue-grey darken-1")
        var fourthDiv = $("<div>").addClass("card-content white-text")
        var cardTitle = $("<span>").addClass("card-title").text(`${response.name} (${currentDate})`)
        var cardContent = $("<p>").addClass("information")

        $(".container").append(firstDiv)
        firstDiv.append(secondDiv) 
        secondDiv.append(thirdDiv)
        thirdDiv.append(fourthDiv)
        fourthDiv.append(cardTitle, cardContent)
        cardContent.append(createList);
        createList.append(displayTemp, displayHigh, displayLow, displayHumidity, displayWind);
    };
});