let key = "972b67e55da3225a8c828abcb14c0c59";
let city = "milwaukee";
let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+ city + "&appid=" + key ;

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {

    console.log(response);
  //$("#city").text(JSON.stringify(response));
});


// when click search icon do this...
$("#search").on("click", function() {

    // remove hide class
    $("#searchHistory").removeClass("hide");
    $("#weather").removeClass("hide");

});

