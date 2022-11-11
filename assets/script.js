let ville = 'Saint-Astier';
// Elements
const city = document.querySelector('#ville');
const main = document.querySelector('#weatherMain');
const icons = document.querySelector('#weatherIcone');
const description = document.querySelector('#weatherDescp');
const temperature = document.querySelector("#temperatureLabel");
const humidity = document.querySelector("#humidityLabel");
const wind = document.querySelector("#windLabel");
const appid = '3ad0baf152741088efafc8b1ce9fbaf8';
const btnCity = document.querySelector("#changer");

//Afficher à l'entrée de la page la météo d'une ville par défault, ici St Astier
// Pour ça on appelle la fonction recevoirMeteo();

recevoirMeteo(ville);
function recevoirMeteo(city) {
   
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&units=metric&appid=${appid}`;
    const imgSrc = `http://openweathermap.org/img/wn/${icons}@2x.png`;

    fetch(url)
        .then((response) => 
            response.json()
            .then((data) => {
                
                ville = data.name;
                main.innerHTML = data.weather[0].main;
                icons.innerHTML = data.weather[0].icon;
                let img = document.createElement('img');
                img.src.innerHTML = imgSrc;
                description.innerHTML = data.weather[0].description;
                temperature.innerHTML =  data.main.temp + '°C';
                humidity.innerHTML =  data.main.humidity + '%';
                wind.innerHTML =  data.wind.speed + 'km/h';
     
            })    
        ); 
}

btnCity.addEventListener('click', () =>{
    let villeChoisie = ville ;
    villeChoisie = prompt('Quelle ville souhaitez-vous choisir ?');
    recevoirMeteo(villeChoisie);
})

     
     
     
          

















  
        
     
   


