const array = [
    {
      todoName: "dinner",
      dueDate: "2024 - 10 - 4",
    },
  ],
  element = document.querySelector(".element"),
  button = document.querySelector(".but"),
  display = document.querySelector(".display"),
  dueDate = document.querySelector("#date");
renderTodoList();

function renderTodoList() {
  let displayHtml = [];
  let html;
  for (let i = 0; i < array.length; i++) {
    html = `
    <p>
      ${array[i].todoName} ${array[i].dueDate} 
      <button onclick="
        array.splice(${i}, 1);
        renderTodoList();
      ">Delete</button>
    </p>`;
    displayHtml += html;
  }
  display.innerHTML = displayHtml;
}
button.onclick = function () {
  let change = element.value;
  let date = dueDate.value;
  array.push({
    todoName: change,
    dueDate: date,
  });
  element.value = "";
  renderTodoList();
};
