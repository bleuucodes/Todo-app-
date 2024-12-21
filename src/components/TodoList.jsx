import React, { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

function TodoList(todo) {
  const [todoMsg, settodoMsg] = useState(todo.todoText);
  const [isTodoEditable, setisTodoEditable] = useState(false);

  const {updateTodo,deleteTodo,todos } = useContext(TodoContext);

  const editTodo = () => {
    updateTodo(todo.id,{...todo,todo: todoMsg})
    setisTodoEditable(false)
  }

  return (
    <div key={todo.id}>
      {console.log(todos)}
      {todos.map((todo) => (
        <div>
          <p>
            <input
              type="text"
              value={todo.todoText}
              style={{ border: "0px" }}
              onChange={(e) => settodoMsg(e.target.value)}
              readOnly={!isTodoEditable}
            />

            <button
              onClick={() => {
                if (todo.completed) return;

                if (isTodoEditable) {
                  editTodo();
                } else setisTodoEditable((prev) => !prev);
              }}
              disabled={todo.completed}
            >
              {isTodoEditable ? "SAVE" : "UPDATE"}
            </button>

            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              DELETE
            </button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default TodoList;

/* <input
        type="text"
        className={`${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        }`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      <button
        onClick={() => {
          if (todo.isCompleted) return;
          if (isTodoEditable) {
            editTodo();
          } else setisTodoEditable((prev) => !prev);
        }}
      >
        {isTodoEditable ? "Update" : "Save"}
      </button> */
