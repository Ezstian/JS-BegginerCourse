function AddTask(textInput) {
  let userAdd = document.getElementById("textInput").value;
  document.getElementById("list").innerHTML += `<li>${userAdd}</li>`;
}
