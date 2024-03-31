
const apiKey="4a2e08165d7a62ef7de1ab6181c7920d";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

var search=document.querySelector("#top input");
var searchBtn=document.querySelector("#top button");
var photo=document.querySelector(".weather-icon");



async function checkWeather(city)
{
  const response=await fetch(apiURL+city+`&appid=${apiKey}`);
  if(response.status==404)
  {
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
  }
  else
  {

    var data=await response.json();
    console.log(data)
    document.querySelector(".weather h1").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    if(data.weather[0].main==="Clouds")
    {
      photo.src="images/clouds.png";
    }
    else if(data.weather[0].main==="Clear")
    {
      photo.src="images/clear.png";
    }
    else if(data.weather[0].main==="Rain")
    {
      photo.src="images/rain.png";
    }
    else if(data.weather[0].main==="Drizzle")
    {
      photo.src="images/drizzle.png";
    }
    else if(data.weather[0].main==="Mist")
    {
      photo.src="images/mist.png";
    }
    else if(data.weather[0].main==="Snow")
    {
      photo.src="images/snow.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
  }
  
}

searchBtn.addEventListener("click",(()=>
{
  // console.log(search.value)
  checkWeather(search.value);

}))

search.addEventListener("keypress",((event)=>
{
  if(event.key=="Enter")
  checkWeather(search.value);

}))





