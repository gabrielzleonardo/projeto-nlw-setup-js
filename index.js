const form = document.getElementById("form-habits");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("button");



//eventos

button.onclick = () => {
  addNewDay();
};

form.onchange = () => {
  saveDay();
};

//funções

const addNewDay = () => {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5);
  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert("Dia já existe");
    return;
  }

  nlwSetup.addDay(today);
};

const saveDay = () => {
  localStorage.setItem("day", JSON.stringify(nlwSetup.data));
};

const data = JSON.parse(localStorage.getItem("day")) || {};

nlwSetup.setData(data);
nlwSetup.load();
