$(document).ready(function(){
    let city;
    let stateAbbrev;

    const weatherApiKey = "d94860da10767bf2";
    
    $("#submit").on("click", function(event){
        event.preventDefault();
        city = $("#teleport-autocomplete").val().trim();
        
        //state abbreviations to figure out through autocomplete teleport api
        
        //to all the apis
        weatherApi();

    });

    $("#weather").on("click", function(event) {
        weatherApi();

    })

    $("#food").on("click", function(event) {
        
    })

    $("#job-search").on("click", function(event) {
        
    })


    function weatherApi(){
        let queryURL = "http://api.wunderground.com/api/" + weatherApiKey + "/conditions/q/" + stateAbbrev + "/" + city + ".json";

        let temp;
        let weather;
        let webcamUrl;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            //conditions: current temp and weather conditions
            console.log(response);
            temp = response.current_observation.temp_f;
            weather = response.current_observation.weather;        
        })

        queryURL = "http://api.wunderground.com/api/" + weatherApiKey + "/webcams/q/" + stateAbbrev + "/" + city + ".json";

        //ajax call for webcam
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            webcamUrl = response.webcams[1].CURRENTIMAGEURL;
        })
    }

})
