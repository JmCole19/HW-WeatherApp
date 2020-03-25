$(document).ready(function() {
    var submitSearchBtn = $("#submitSearchBtn");
    var searchValue = 22903

    
    submitSearchBtn.on("click", function() {
        searchValue = $(".searchInput").val()
        fiveDay();
    })

    
    function fiveDay() {
        var queryURL = `http://api.openweathermap.org/data/2.5/forecast?zip=${searchValue},us&mode=json&units=imperial&appid=f17120984cd2d82d4bc796031344984c`

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            forecastCard();
        })

        function forecastCard(response) {
            var createRow = $("<div>").addClass("row")
            var card1stDiv = $("<div>").addClass("card small");
            var card2ndDiv = $("<div>").addClass("col m2");
            var card3rdDiv = $("<div>").addClass("card blue");
            var card4thDiv = $("<div>").addClass("card-content white-text");


            var createCardList = $("<ul>");
            var displayCardTitle = $("<span>").addClass("card-title").text(`${response.city.name}`);
            var displayCardTemp = $("<li>").text(`${response.list[1].main.temp}`)

            $(".container").append(createRow);
            createRow.append(card1stDiv);
            card1stDiv.append(card2ndDiv);
            card2ndDiv.append(card3rdDiv);
            card3rdDiv.append(card4thDiv);
            card4thDiv.append(displayCardTitle, createCardList, displayCardTemp)
        }
    
        function createForecastCards(response) {
    
        }
    };
})