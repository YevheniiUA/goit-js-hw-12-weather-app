const fetchWeather = query => {
  const options = {
    baseUrl: 'http://api.apixu.com/v1/current.json',
    apiKey: '5b3041f515dc4b54b04142808191107',
  };

  const requestParams = `?key=${options.apiKey}&q=${query}`;

  return fetch(options.baseUrl + requestParams).then(responce =>
    responce.json(),
  );
  // .then(parsedResponse => console.log({parsedResponse.location.name}));
};

export default fetchWeather;
// current:
// cloud: 0
// condition:
// code: 1000
// icon: "//cdn.apixu.com/weather/64x64/night/113.png"
// text: "Clear"
// __proto__: Object
// feelslike_c: 18
// feelslike_f: 64.4
// gust_kph: 22.3
// gust_mph: 13.9
// humidity: 68
// is_day: 0
// last_updated: "2019-07-11 22:20"
// last_updated_epoch: 1562872811
// precip_in: 0
// precip_mm: 0
// pressure_in: 30.2
// pressure_mb: 1006
// temp_c: 18
// temp_f: 64.4
// uv: 0
// vis_km: 10
// vis_miles: 6
// wind_degree: 330
// wind_dir: "NNW"
// wind_kph: 6.8
// wind_mph: 4.3
// __proto__: Object
// location:
// country: "Ukraine"
// lat: 47.66
// localtime: "2019-07-11 22:29"
// localtime_epoch: 1562873374
// lon: 34.11
// name: "Bogdanovskiy"
// region: "Dnipropetrovs'ka Oblast'"
// tz_id: "Europe/Kiev"
// __proto__: Object
// __proto__: Object
