document.getElementById('addTaskButton').value = 'addTaskButton';
function addTaskButton() {
   document.querySelector('ul').innerHTML += `<li>${task}</li>`;
};