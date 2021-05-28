
// CRYPTO TOP 5  //
const cryptotop5Container = document.getElementById('ctop5')
const searchctop5 = (currency) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.nomics.com/v1/currencies/ticker?key=26f21cb3dcbfbeddbdb51687f9e6dc78d0010fac&ids=BTC,ETH,USDT,DOGE,XRP&interval=1d&convert=USD&per-page=100&page=1`)
      .then(response => response.json())
      .then((data) => {
        console.log(data) ;
        data.forEach((currency) => {
            let x = `${currency.price}`;
            console.log(x);
            let res = (`${x}`*1).toFixed(4);
            console.log(res);
            let top5Card = ` 
            <tr>
            <th style="background-image: url(${currency.logo_url}); background-repeat: no-repeat; background-position: center; background-size: contain"></th>
            <th>${currency.id}</th>
            <th>${currency.name}</th>
            <th class="txtr">${res}$</th>
            </tr>`
          console.log(currency.name)
          cryptotop5Container.insertAdjacentHTML('beforeend', top5Card)  
  
        })
      })
  }


 // CRYPTO SEARCH & ERASE //
  const cryptoContainer = document.getElementById('cryptos')
  const searchBtn = document.querySelector('.btn-search')
  const searchCryptos = (currency) => {
    cryptoContainer.innerHTML = ""
    fetch(`https://cors-anywhere.herokuapp.com/https://api.nomics.com/v1/currencies/ticker?key=26f21cb3dcbfbeddbdb51687f9e6dc78d0010fac&ids=${currency}&interval=1d&convert=EUR&per-page=100&page=1`)
      .then(response => response.json())
      .then((data) => {
        console.log(data) ;
        data.forEach((currency) => {
            let x = `${currency.price}`;
            console.log(x);
            let res = (`${x}`*1).toFixed(5);
            console.log(res);
            let movieCard = `<section>
            <div class="card" style="background-image: url(${currency.logo_url})">
                <h1>${currency.name}</h1>      
                <h1>${res}$</h1>
                <p>${currency.rank}</p>
                </div>
            </div>
          </section>`
          // console.log(currency)
          cryptoContainer.insertAdjacentHTML('beforeend', movieCard)  
  
        })
      })
  }
  searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let input = document.getElementById('searchInput')
    if (input === "") {
      console.log("empty");
      alert("Name must be filled out");
      return false;
  }
    console.log(input.value)
    searchCryptos(input.value)
  })


// WEATHER SEARCH & ERASE  //
  let sun = document.querySelector('.sun');
  let rain = document.querySelector('.rain');
  const searchBtnw = document.querySelector('.btn-searchw')
  const countryContainer = document.getElementById('country')
  const cityContainer = document.getElementById('city')
  const tempContainer = document.getElementById('temp')
  const humidContainer = document.getElementById('humid')
  const tempMinContainer = document.getElementById('tempmin')
  const tempMaxContainer = document.getElementById('tempmax')

  const searchWeather = (city) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude=minutely,hourly&lang=fr&units=metric&appid=7c867d5a522b8c6704c5ad73c3d97b70`)
        .then(response => response.json())
        .then((data) => {
          countryContainer.innerHTML = ""
          cityContainer.innerHTML = ""
          tempContainer.innerHTML = ""
          humidContainer.innerHTML = ""
          tempMinContainer.innerHTML = ""
          tempMaxContainer.innerHTML = ""

          console.log(data) ;
          console.log(data.sys.country);
          console.log(data.name);
          console.log(data.main.temp);
          console.log(data.main.humidity);
          console.log(data.main.feels_like);
          console.log(data.main.temp_min);
          console.log(data.main.temp_max);

          let country = `
          <th scope="row">${data.sys.country}</th>`
          countryContainer.insertAdjacentHTML('beforeend', country) 
          let city = `
          <th scope="row">${data.name}</th>`
          cityContainer.insertAdjacentHTML('beforeend', city)
          let temp = `
          <th scope="row">${data.main.temp}°C</th>`
          tempContainer.insertAdjacentHTML('beforeend', temp)
          let humid = `
          <th scope="row">${data.main.humidity}%</th>`
          humidContainer.insertAdjacentHTML('beforeend', humid)
          let tempmin = `
          <th scope="row">${data.main.temp_min}%</th>`
          tempMinContainer.insertAdjacentHTML('beforeend', tempmin) 
          let tempmax = `
          <th scope="row">${data.main.temp_max}%</th>`
          tempMaxContainer.insertAdjacentHTML('beforeend', tempmax) 

          let weatherId = data.weather[0].main;
          console.log(weatherId)
          if(weatherId === "Clouds"){
            sun.style.backgroundSize = "0%, 20%, 0%, 0%";}
          if(weatherId === "Rains"){
            sun.style.backgroundSize = "0%, 0%, 20%, 0%";}
          if(weatherId === "Sun"){
            sun.style.backgroundSize = "20%, 0%, 0%, 0%";}
          if(weatherId === "Clear"){
            sun.style.backgroundSize = "0%, 0%, 0%, 100%";}
              // sun.style.backgroundColor = "#9ECADC";}
          })
    }

    searchBtnw.addEventListener('click', (event) => {
      event.preventDefault();
      let input = document.getElementById('searchInputw')
      if (input === "") {
        console.log("empty");
        alert("Name must be filled out");
        return false;
    }
      console.log(input.value)
      // clearweather()
      searchWeather(input.value)
    })



//  CHUCK NORRIS JOKES  //
const jokesbox = document.getElementById('jokesbox')
const jokes = (data) => {
    fetch(`https://api.chucknorris.io/jokes/random `)
      .then(response => response.json())
      .then((data) => {
        console.log(data) ;
        console.log(data.value) ;
        console.log(data.icon_url)
        let jokes1 = `
        <p>${data.value}</p>
        <img src="${data.icon_url}" style="width: 50px; object-position: left bottom;">
        `
        jokesbox.insertAdjacentHTML('beforeend', jokes1) 
      })
}


// GOOGLE SEARCH //
const srcg = document.getElementById('inputgoogle');
const sg = document.getElementById('searchgoogle');
const google = 'https://www.google.com/search?q=';

function submitsearch(event) {
  event.preventDefault();
  const url = google+sg.value;
  const win = window.open(url, '_blank');
  win.focus();
}
srcg.addEventListener('submit', submitsearch);




// SAFE ZONE RESSOURCE 
// icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png
// fetch("https://api.nomics.com/v1/markets?key=26f21cb3dcbfbeddbdb51687f9e6dc78d0010fac")
//   .then(response => response.json())
//   .then(data => console.log(data))
// fetch("https://api.nomics.com/v1/currencies/ticker?key=26f21cb3dcbfbeddbdb51687f9e6dc78d0010fac&ids=BTC,ETH&interval=1d&convert=EUR&per-page=100&page=1")
//   .then(response => response.json())
//   .then(data => console.log(data))
// https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=7c867d5a522b8c6704c5ad73c3d97b70
// https://api.openweathermap.org/data/2.5/onecall?lat=50.8466&lon=-4.3528&exclude=minutely,hourly&lang=fr&units=metric&appid=7c867d5a522b8c6704c5ad73c3d97b70
