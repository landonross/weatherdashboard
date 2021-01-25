
$(document).ready(function () {
  $("#weatherPage").addClass("hide")
});

$("#searchBtn").click(function(event) {
  $("#weatherPage").removeClass("hide");
  $("#instructions").addClass("hide");
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

    $("#cityChoice").text("City chosen: " + response.city.name);
    
    //Current date pulled from the API and converted to localDateString
    $("#date").text(new Date(response.list[0].dt * 1000).toLocaleDateString());
    $(".temp").text("Temperature: " + ((response.list[0].main.temp - 273.15) *1.80 + 32).toFixed(0) + " °F");
    $("#changePic").attr("src", "https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png");
    
    //5 day weather forecast
    $("#date1").text(new Date(response.list[7].dt * 1000).toLocaleDateString());
    $(".temp1").text("Temperature: " + ((response.list[7].main.temp - 273.15) *1.80 + 32).toFixed(0) + " °F");
    $("#changePic1").attr("src", "https://openweathermap.org/img/w/" + response.list[7].weather[0].icon + ".png");
    
    $("#date2").text(new Date(response.list[15].dt * 1000).toLocaleDateString()); 
    $(".temp2").text("Temperature: " + ((response.list[15].main.temp - 273.15) *1.80 + 32).toFixed(0) + " °F");
    $("#changePic2").attr("src", "https://openweathermap.org/img/w/" + response.list[15].weather[0].icon + ".png");
    
    $("#date3").text(new Date(response.list[23].dt * 1000).toLocaleDateString());
    $(".temp3").text("Temperature: " + ((response.list[23].main.temp - 273.15) *1.80 + 32).toFixed(0) + " °F");
    $("#changePic3").attr("src", "https://openweathermap.org/img/w/" + response.list[23].weather[0].icon + ".png");
    
    $("#date4").text(new Date(response.list[31].dt * 1000).toLocaleDateString());
    $(".temp4").text("Temperature: " + ((response.list[31].main.temp - 273.15) *1.80 + 32).toFixed(0) + " °F");
    $("#changePic4").attr("src", "https://openweathermap.org/img/w/" + response.list[31].weather[0].icon + ".png");
    
    $("#date5").text(new Date(response.list[39].dt * 1000).toLocaleDateString());
    $(".temp5").text("Temperature: " + ((response.list[39].main.temp - 273.15) *1.80 + 32).toFixed(0) + " °F");
    $("#changePic5").attr("src", "https://openweathermap.org/img/w/" + response.list[39].weather[0].icon + ".png");

    
    // var clouds = (response.list[0].clouds.all)
    // if (clouds < 40) {
    //   $(".card-img-top").attr("src", "pictures/sunny.jpg");
    // }
    // else {
    //   $(".card-img-top").attr("src", "pictures/cloudy.jpg");
    // }
});
});