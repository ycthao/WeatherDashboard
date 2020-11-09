let key = "972b67e55da3225a8c828abcb14c0c59";

// when click search icon do this...
$("#search").on("click", function() {
    let city = $("#searchInput").val().trim();
    let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+ city + "&appid=" + key ;
    let lon = "";
    let lat = "";
    let savedCity = $("<div class='list-group-item'>");

    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {

    // remove hide class
    $("#searchHistory").removeClass("hide");
    $("#weather").removeClass("hide");

    $("#city").text(JSON.stringify(response.city.name));
    lat = JSON.stringify(response.city.coord.lat);
    lon = JSON.stringify(response.city.coord.lon);
    
    $("#history").append(savedCity);

    console.log(response.city.coord.lat);
    console.log(lat);
    console.log(lon);
    });
});

