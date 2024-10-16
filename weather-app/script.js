// const container = document.querySelector(".container")
// const search  = document.querySelector(".search-box button")
// const weatherBox  = document.querySelector(".weather-box")
// const weatherDetails  = document.querySelector(".weather-details")


// search.addEventListener('click',()=>{
//   const APIKey = " a793061c21418560f7d6ef14a00ab60f ";
//   const city = document.querySelector('.search-box input').value ;

//   if(city == '')
//     return ;

  
//   fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response=>response.json()).then(json=>{
//     const image = document.querySelector('.weather-box img');
//     const temperature = document.querySelector('.weather-box .temperature');
//     const description = document.querySelector('.weather-box .description');
//     const humidity = document.querySelector('.weather-details .humidity span');
//     const wind = document.querySelector('.weather-details .wind span')

//     switch(json.weather[0].main){
//       case 'Clear' : 
//         image.src = './images/clear.png';
//         break ;

//       case 'Rain' : 
//         image.src = './images/rain.png';
//         break ;

//       case 'Snow' : 
//         image.src = './images/snow.png';
//         break ;
//         case 'Clouds' : 
//         image.src = './images/cloud.png';
//         break ;

//       case 'Mist' : 
//         image.src = './images/mist.png';
//         break ;
        
//       case 'Haze' : 
//         image.src = './images/mist.png';
//         break ;

//       default :
//         image.src = './images/cloud.png';
//     }
//   })


// })

const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");

search.addEventListener('click', () => {
  const APIKey = "a793061c21418560f7d6ef14a00ab60f";
  const city = document.querySelector('.search-box input').value;

  if (city === '') return;

  // Use backticks for template literals
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {
      const image = document.querySelector('.weather-box img');
      const temperature = document.querySelector('.weather-box .temperature');
      const description = document.querySelector('.weather-box .description');
      const humidity = document.querySelector('.weather-details .humidity span');
      const wind = document.querySelector('.weather-details .wind span');

      switch (json.weather[0].main) {
        case 'Clear':
          image.src = './images/clear.png';
          break;
        case 'Rain':
          image.src = './images/rain.png';
          break;
        case 'Snow':
          image.src = './images/snow.png';
          break;
        case 'Clouds':
          image.src = './images/cloud.png';
          break;
        case 'Haze':
          image.src = './images/mist.png';
          break;
        default:
          image.src = './images/cloud.png'; // Add a default image if needed
          break;
      }

      // Update the temperature and other details
      temperature.innerHTML = `${Math.round(json.main.temp)}°C`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${json.wind.speed} km/h`;

      // Show the weather box and details
      weatherBox.style.display = '';
      weatherDetails.style.display = '';
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
});
