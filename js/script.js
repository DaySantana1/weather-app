let weather = {
    apiKey: "2b3d8806fcd0e9f46c3d520ed5d4b855" ,
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const  { name } = data;
      const  { icon, description } = data.weather[0];
      const  { temp, humidity } = data.main;
      const  { speed } = data.wind;
      console.log (name, icon, description, temp, humidity, speed);
      document.querySelector(".city").innerText =  name;
    //   document.querySelector(".icon").src = "https://openweathermap.org/img/wn" + icon + ".png"
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = Math.floor(temp) + "°C";
    document.querySelector(".humidity").innerText = "Humidade: " + humidity + "%";
    document.querySelector(".wind").innerText = "Velocidade do vento: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    },
    search: function(){
    this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if(event.key == "Enter"){
        weather.search();
    }
})

weather.fetchWeather("São Paulo");

