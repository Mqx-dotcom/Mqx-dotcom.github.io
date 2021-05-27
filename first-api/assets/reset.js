
  const wContainer = document.getElementById('tabweather')
  const clearweather = () => {
  wContainer.innerHTML = ""
  let tabweather = `
  <tr id="country">
  <th scope="col">Country</th>
  </tr>
  <tr id="city">
  <th scope="col">City</th>
  </tr>
  <tr id="temp">
  <th scope="col">Temp.</th>
  </tr>
  <tr id="humid">
  <th scope="col">Humidity</th>
  </tr>
  <tr id="tempmin">
  <th scope="col">t° Min</th>
  </tr>
  <tr id="tempmax">
  <th scope="col">t° Max</th>
  </tr>
  `
  wContainer.insertAdjacentHTML('beforeend', tabweather)
  }
