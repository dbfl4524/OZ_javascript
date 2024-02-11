// 요소 선택 및 배열 선언
const todoList = document.getElementById('todo-list');
const todoForm = document.getElementById('todo-form');
let todoArr = [];

// 로컬 저장소에 저장하기
function saveTodos() {
  const todoString = JSON.stringify(todoArr);
  localStorage.setItem('myTodos', todoString);
}

// 로컬 저장소에서 가져오기
function loadTodos() {
  const myTodos = localStorage.getItem('myTodos');
  if (myTodos !== null) {
    todoArr = JSON.parse(myTodos);
    displayTodos();
  }
}
loadTodos();

// 할일 추가하기, 할일 보여주기, 할일 수정하기, 할일 삭제하기
// 할일 삭제하기
function handleTodoDelBtnClick(clickedId) {
  todoArr = todoArr.filter(function (aTodo) {
    return aTodo.todoId !== clickedId;
  });
  displayTodos();
  saveTodos();
}

// 할일 수정하기
function handleTodoItemClick(clickedId) {
  todoArr = todoArr.map(function (aTodo) {
    if (aTodo.todoId === clickedId) {
      return {
        ...aTodo,
        todoDone: !aTodo.todoDone,
      };
    } else {
      return aTodo;
    }
  });
  displayTodos();
  saveTodos();
}
// 할일 보여주기
function displayTodos() {
  todoList.innerHTML = ' '; // 원래 써져 있던 내용을 지우고 시작한다.
  todoArr.forEach(function (aTodo) {
    const todoItem = document.createElement('li');
    const todoDelBtn = document.createElement('span');
    todoDelBtn.textContent = 'x';
    todoItem.textContent = aTodo.todoText;
    todoItem.title = '클릭하면 완료됨';
    if (aTodo.todoDone) {
      todoItem.classList.add('done');
    } else {
      todoItem.classList.add('yet');
    }
    todoDelBtn.title = '클릭하면 삭제됨';

    todoItem.addEventListener('click', function () {
      handleTodoItemClick(aTodo.todoId);
    });

    todoDelBtn.addEventListener('click', function () {
      handleTodoDelBtnClick(aTodo.todoId);
    });

    todoItem.appendChild(todoDelBtn);
    todoList.appendChild(todoItem);
  });
}

// 할일 추가하기
todoForm.addEventListener('submit', function (e) {
  // submit 이벤트는 발생할 때 마다 페이지가 새로고침 되는 현상, 이를 방지하기 위해 아래 코드 구현
  e.preventDefault();
  const toBeAdded = {
    // 할일이라는 객체를 생성
    todoText: todoForm.todo.value,
    todoId: new Date().getTime(), // 추가될 때 그 시간의 대한 정보를 식별값으로 받는다. 할일에 대한 주민번호라고 생각
    // getTime 은 시간 정보를 정수형으로 반환해주는 메소드
    todoDone: false,
  };
  todoForm.todo.value = '';
  todoArr.push(toBeAdded);
  displayTodos();
  saveTodos();
});
