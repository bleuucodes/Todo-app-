import React, { useEffect } from "react";
import TodoContextProvider from "./context/TodoContextProvider";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { use } from "react";

function App(){

  return(
    <TodoContextProvider>
      <TodoInput />
      <TodoList />
    </TodoContextProvider>
  )
}

export default App