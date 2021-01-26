var cities = [];

$(document).ready(function () {
  $("#weatherPage").addClass("hide")
});

$("#searchBtn").click(function (event) {
  $("#weatherPage").removeClass("hide");
  $("#instructions").addClass("hide");
  event.preventDefault();
  
  var cityName = $("#search-term").val();
  
  //Take city name and put it into localStorage
  localStorage.setItem("newCity", cityName);
  var cityButton = localStorage.getItem("newCity");
  var a = $("<button>");
  // Adding a class of movie-btn to our button
  a.addClass("city-btn");
  // Adding a data-attribute
  a.attr("data-name", cityButton);
  // Providing the initial button text
  a.text(cityButton);
  // Adding the button to the buttons-view div
  $("#newCityButtons").append(a);

  
  // Set the API key
  var queryParams = "dde353944e15d880fdad8794ca53bb62&units=imperial";
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + queryParams;
  
  //Button in progress.. I realized I need to totally revamp and re-arrange my whole HTML, but don't have the time to do that right now. I'll have to re-submit.
  $(".city-btn").click(function (click) {
    var onClick = $(this).attr("data-name");
    var queryParams = "dde353944e15d880fdad8794ca53bb62&units=imperial";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + onClick + "&appid=" + queryParams;

    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function (response) {

    });
  });

  $.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function (response) {
    console.log(queryURL);
    console.log(response);
    
    var lat = response.city.coord.lat;
    var lon = response.city.coord.lon;
    var u = "lat=" + lat + "&lon=" + lon;
    UVqueryURL = "https://api.openweathermap.org/data/2.5/onecall?" + u + "&appid=" + queryParams;
    
    function UVIndexQuery() {
      $.ajax({
        url: UVqueryURL,
        method: "GET"
      }).then(function (uvresponse) {
        console.log(uvresponse);
        var UVIndex = uvresponse.current.uvi;

        $(".UVIndex").text("UV Index: " + UVIndex + "%");

        // change background colors for Moderate, High, and extreme UV index.
        if (UVIndex <= 2) {
            $(".UVIndex").attr("class", "ModLow")
        } 
        else if (UVIndex <= 7) {
            $(".UVIndex").attr("class", "HighVH")
        }
        else {
            $(".UVIndex").attr("class", "extreme")
        }
      });
    }
  
    
    $("#cityChoice").text("City chosen: " + response.city.name);

      //Current date pulled from the API and converted to localDateString
      $("#date").text(new Date(response.list[0].dt * 1000).toLocaleDateString());
      $(".temp").text("Temperature: " + (response.list[0].main.temp).toFixed(0) + " °F");
      $("#changePic").attr("src", "https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png");
      $(".humidity").text("humidity: " + response.list[0].main.humidity + "%")
      $(".windSpeed").text("Wind Speed: " + response.list[0].wind.speed + " mph")
      $(".UVIndex").html(UVIndexQuery)
      
      //5 day weather forecast
      $("#date1").text(new Date(response.list[7].dt * 1000).toLocaleDateString());
      $(".temp1").text("Temperature: " + (response.list[7].main.temp).toFixed(0) + " °F");
      $(".humidity1").text("humidity: " + response.list[7].main.humidity + "%")
      $("#changePic1").attr("src", "https://openweathermap.org/img/w/" + response.list[7].weather[0].icon + ".png");
      
      $("#date2").text(new Date(response.list[15].dt * 1000).toLocaleDateString());
      $(".temp2").text("Temperature: " + (response.list[15].main.temp).toFixed(0) + " °F");
      $(".humidity2").text("humidity: " + response.list[14].main.humidity + "%")
      $("#changePic2").attr("src", "https://openweathermap.org/img/w/" + response.list[15].weather[0].icon + ".png");
      
      $("#date3").text(new Date(response.list[23].dt * 1000).toLocaleDateString());
      $(".temp3").text("Temperature: " + (response.list[23].main.temp).toFixed(0) + " °F");
      $(".humidity3").text("humidity: " + response.list[23].main.humidity + "%")
      $("#changePic3").attr("src", "https://openweathermap.org/img/w/" + response.list[23].weather[0].icon + ".png");
      
      $("#date4").text(new Date(response.list[31].dt * 1000).toLocaleDateString());
      $(".temp4").text("Temperature: " + (response.list[31].main.temp).toFixed(0) + " °F");
      $(".humidity4").text("humidity: " + response.list[31].main.humidity + "%")
      $("#changePic4").attr("src", "https://openweathermap.org/img/w/" + response.list[31].weather[0].icon + ".png");
      
      $("#date5").text(new Date(response.list[39].dt * 1000).toLocaleDateString());
      $(".temp5").text("Temperature: " + (response.list[39].main.temp).toFixed(0) + " °F");
      $(".humidity5").text("humidity: " + response.list[39].main.humidity + "%")
      $("#changePic5").attr("src", "https://openweathermap.org/img/w/" + response.list[39].weather[0].icon + ".png");
      
    


    });
});