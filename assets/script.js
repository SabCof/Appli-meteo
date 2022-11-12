// Elements manipulation du DOM
const searchCity = document.querySelector('#searchCity');
const searchBtn = document.querySelector('#searchBtn');

const citys = document.querySelector('#city');
const main = document.querySelector('#weatherMain');
const icons = document.querySelector("#weatherIcone");
const description = document.querySelector("#weatherDesc");
const temperature = document.querySelector("#tempLabel");
const humidity = document.querySelector("#humiLabel");
const wind = document.querySelector("#windLabel");

const appid = '3ad0baf152741088efafc8b1ce9fbaf8';



//API infos




//Afficher à l'entrée de la page la météo d'une ville par défault, ici St Astier
// Pour ça on appelle la fonction recevoirMeteo();

searchBtn.addEventListener('click', () =>{
    if(searchCity.value === ""){
        alert('Veuillez entrer une ville !!')
    }else{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity.value}&lang=fr&units=metric&appid=${appid}`)
            .then((response) => response.json())// Formattage
            .then((response) => {
                console.log(response)
                citys.innerHTML = response.name;
                main.innerHTML = response.weather[0].main;
                description.innerHTML = response.weather[0].description;
                
                temperature.innerHTML = Math.ceil( response.main.temp) + '°C';
                humidity.innerHTML =  response.main.humidity + '%';
                wind.innerHTML = Math.ceil(response.wind.speed)  + 'km/h';
            }) //Affichage
    };                
               
});