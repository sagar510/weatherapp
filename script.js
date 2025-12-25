$.ajax({
    url : "https://content-weather.googleapis.com/v1/currentConditions:lookup?location.latitude=18.33&location.longitude=73.51",
    type : "GET",
    success : function(data){
        console.log(data);
    }
});