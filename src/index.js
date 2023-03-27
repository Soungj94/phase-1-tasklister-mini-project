document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    buildTodo(e.target["new-task-description"].value);
    form.reset();
  });
});

function buildTodo(todo) {
  let p = document.createElement("p");
  let btn = document.createElement("button");
  btn.addEventListener("click", deleteTodo);
  btn.textContent = "x";
  p.textContent = `${todo} `;
  p.appendChild(btn); // 돔으로 보내기전에 p테그에 붙여서 보낼 수 있슴
  console.log(p);
  document.querySelector("#tasks").appendChild(p);
}

function deleteTodo(e) {
  e.target.parentNode.remove();
}
