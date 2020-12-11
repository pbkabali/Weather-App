import formByName, {
  nameFormHeading,
  nameFormSwitchLabel,
  switchForm,
} from "./requestForms";
import loading from "./loading";
import notice from "./notice";

export const container = document.getElementById("container");

const pageLoad = () => {
  const formHeading = document.createElement("h2");
  formHeading.id = "form-heading";
  formHeading.classList.add("form-heading");
  formHeading.innerText = nameFormHeading;
  const actionsDiv = document.createElement("div");
  actionsDiv.id = "actions-div";
  actionsDiv.classList.add("flex", "actions-section");
  const formDiv = document.createElement("div");
  formDiv.classList.add("flex");
  formDiv.id = "form-div";
  formDiv.appendChild(formByName());
  const switchFormButton = document.createElement("button");
  switchFormButton.id = "switch-form";
  switchFormButton.innerText = nameFormSwitchLabel;
  switchFormButton.onclick = switchForm;
  actionsDiv.append(formDiv, switchFormButton);
  const dataContainer = document.createElement("div");
  dataContainer.classList.add("flex");
  const dataDiv = document.createElement("div");
  dataDiv.classList.add("flex", "data-section");
  dataDiv.id = "data-div";
  dataContainer.appendChild(dataDiv);
  container.append(notice(), loading(), formHeading, actionsDiv, dataContainer);
};

export default pageLoad;
