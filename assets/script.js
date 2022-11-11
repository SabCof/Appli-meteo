/* Appel a l'API openweather avec ville et système métrique en paramètre de fonction*/
const apiKey= "3ad0baf152741088efafc8b1ce9fbaf8",
    
 apiCall = function (city){
    const url ='https://api.openweathermap.org/data/2.5/weather?q='+ city + '&lang=fr&units=metric&appid='+ apiKey; 
      
     
     
     
     fetch(url)
        .then((response) => 
            response.json().then((data) => {
                console.log(data);
        
                document.querySelector('#city').innerHTML = data.name;
                document.querySelector("#temp").innerHTML =  data.main.temp + '°';
                document.querySelector("#humidity").innerHTML =  data.main.humidity + '%';
                document.querySelector("#wind").innerHTML =  data.wind.speed + 'km/h';
            })    
        ) 
          


};

/* Ecouteur d'Event sur la soumission du formulaire */

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;
    apiCall(ville);
});
apiCall('perigueux');













  
        
     
   


