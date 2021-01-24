
$("#searchBtn").click(function(event) {
  event.preventDefault();

var cityName = $("#search-term").val();
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=dde353944e15d880fdad8794ca53bb62";

$.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(response) {
    console.log(queryURL);
    console.log(response);
    var tempF = (response.list[0].main.temp - 273.15) *1.80 + 32

    $(".city").text("The city you have chosen is... " + response.city.name);
    $(".temp").text("The current temperature is... " + tempF.toFixed(0) + " °F");
    // $(".date").text(moment().format("dddd")); 
    // $(".date").text(response.list[0].dt_txt);
    var clouds = (response.list[0].clouds.all)
    if (clouds < 40) {
      $(".card-img-top").attr("src", "pictures/sunny.jpg");
    }
    else {
      $(".card-img-top").attr("src", "pictures/cloudy.jpg");
    }
});
});