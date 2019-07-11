import './styles.css';
import PNotify from '../node_modules/pnotify/dist/es/PNotify';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import getGeoPosition from './js/getGeoPosition';
import fetchWeather from './js/fetchWeather';
PNotify.defaults.styling = 'material';

const refs = {
  form: document.querySelector('#search-form'),
  location: document.querySelector('[data-field="location"]'),
  temperature: document.querySelector('[data-field="temperature"]'),
  humidity: document.querySelector('[data-field="humidity"]'),
  wind: document.querySelector('[data-field="wind"]'),
  conditions: document.querySelector('[data-field="conditions"]'),
};

getGeoPosition()
  .then(position => position.coords)
  .then(coords => `${coords.latitude},${coords.longitude}`)
  .then(coords => fetchWeather(coords))
  .catch(() => {
    PNotify.error({
      text: 'Нет прав доступа к геопозиции, используйте поиск по имени города.',
    });
  });

refs.form.addEventListener('submit', formHandler);

function formHandler(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const input = form.city;
  const query = input.value;
  fetchWeather(query);
  input.value = '';
}

function rendering({ location, temperature, humidity, wind, conditions }) {
  addContent(refs.location, location);
  addContent(refs.temperature, temperature);
  addContent(refs.humidity, humidity);
  addContent(refs.wind, wind);
  addContent(refs.conditions, conditions);
}

function addContent(ref, content) {
  ref.textContent = content;
}
