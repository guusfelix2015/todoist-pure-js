const inputTodo = document.querySelector(".form__input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
const span = document.getElementById("span");

console.log(span);

button.addEventListener("click", () => {
  let todo = inputTodo.value;
  todoArray.push(todo);
  setItensBD();
  loadTodo();
});

if (span) {
  span.addEventListener("click", () => {
    alert("teste");
  });
}

let todoArray;
let id;

const getItensBD = () => JSON.parse(localStorage.getItem("dbfunc")) ?? [];
const setItensBD = () =>
  localStorage.setItem("dbfunc", JSON.stringify(todoArray));

function loadTodo() {
  todoArray = getItensBD();
  ul.innerHTML = "";
  todoArray.forEach((todo) => {
    insertTodo(todo);
  });
}

loadTodo();

function insertTodo(todo) {
  let li = document.createElement("li");

  li.innerHTML = `
  ${todo}<span onclick="deleteItem"><i id="teste" class="bx bxs-trash"></i></span>
  `;
  ul.appendChild(li);
}

function deleteItem(index) {
  todoArray.splice(index, 1);
  setItensBD();
  loadItens();
}
