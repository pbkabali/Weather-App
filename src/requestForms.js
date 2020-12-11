import requestData from './eventActions';

export const nameFormHeading = "Enter a city name to get it's weather details";
const coordFormHeading = "Enter coordinates to get the location's weather details";
export const nameFormSwitchLabel = 'Request by coordinates instead';
const coordFormSwitchLabel = 'Request by name instead';

const formByName = () => {
  const form = document.createElement('div');
  form.id = 'name-form';
  const locationName = document.createElement('input');
  locationName.placeholder = 'Enter a city name';
  locationName.id = 'name';
  const requestBtn = document.createElement('button');
  requestBtn.innerText = 'Request Weather data';
  requestBtn.onclick = () => requestData('name');
  form.append(locationName, requestBtn);
  return form;
};

const formByCoord = () => {
  const form = document.createElement('div');
  form.id = 'coord-form';
  const lat = document.createElement('input');
  lat.placeholder = 'Enter Latitude (deg)';
  lat.id = 'latitude';
  const lon = document.createElement('input');
  lon.placeholder = 'Enter Longitude (deg)';
  lon.id = 'longitude';
  const requestBtn = document.createElement('button');
  requestBtn.innerText = 'Request Weather data';
  requestBtn.onclick = () => requestData('coordinates');
  form.append(lat, lon, requestBtn);
  return form;
};

export const switchForm = () => {
  const formContainer = document.getElementById('form-div');
  const formHeading = document.getElementById('form-heading');
  const formSwitch = document.getElementById('switch-form');
  if (document.getElementById('name-form')) {
    formContainer.innerText = '';
    formContainer.appendChild(formByCoord());
    formHeading.innerText = coordFormHeading;
    formSwitch.innerText = coordFormSwitchLabel;
  } else {
    formContainer.innerText = '';
    formContainer.appendChild(formByName());
    formHeading.innerText = nameFormHeading;
    formSwitch.innerText = nameFormSwitchLabel;
  }
};

export default formByName;
