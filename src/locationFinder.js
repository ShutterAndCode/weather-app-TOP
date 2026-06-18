const formBody = document.querySelector("#inputLocation");

const form = document.createElement("form");
const labelCity = document.createElement("label");
labelCity.for = `city-name`;
labelCity.textContent = `Enter City Name: `;
labelCity.style.color = `white`;
form.appendChild(labelCity);

const locationInput = document.createElement("input");
locationInput.type = `text`;
locationInput.id = `city-name`;
locationInput.placeholder = `Enter City Name`;
locationInput.required = `true`;

form.appendChild(locationInput);

const submitBtn = document.createElement(`button`);
submitBtn.setAttribute(`type`, `submit`);
submitBtn.textContent = `Submit Data`;
submitBtn.className = `btn`;
form.appendChild(submitBtn);
formBody.appendChild(form);

function getCityName() {
  return locationInput.value.toLowerCase();
}

export { form, getCityName };
