import requestData from "./eventActions";

export const container = document.getElementById("container");

const pageLoad = () => {
  const dataDiv = document.createElement("div");
  dataDiv.id = "data-div";
  const actionsDiv = document.createElement("div");
  actionsDiv.id = "actions-div";
  const locationName = document.createElement("input");
  locationName.placeholder = "Enter a city name";
  locationName.id = "name";
  const requestBtn = document.createElement("button");
  requestBtn.innerText = "Request Weather data";
  requestBtn.onclick = requestData;
  actionsDiv.append(locationName, requestBtn);
  container.append(dataDiv, actionsDiv);
};

export default pageLoad;
