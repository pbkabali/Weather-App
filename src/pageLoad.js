import formByName, {
  nameFormHeading,
  nameFormSwitchLabel,
  switchForm,
} from "./requestForms";
export const container = document.getElementById("container");

const pageLoad = () => {
  const dataDiv = document.createElement("div");
  dataDiv.id = "data-div";
  const actionsDiv = document.createElement("div");
  actionsDiv.id = "actions-div";
  const formHeading = document.createElement("h2");
  formHeading.id = "form-heading";
  formHeading.innerText = nameFormHeading;
  const switchFormButton = document.createElement("button");
  switchFormButton.id = "switch-form";
  switchFormButton.innerText = nameFormSwitchLabel;
  switchFormButton.onclick = switchForm;
  const formDiv = document.createElement("div");
  formDiv.id = "form-div";
  formDiv.appendChild(formByName());
  actionsDiv.append(formHeading, switchFormButton);
  container.append(dataDiv, actionsDiv, formDiv);
};

export default pageLoad;
