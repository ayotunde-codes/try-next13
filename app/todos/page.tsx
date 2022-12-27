import React from "react";
import TodoList from "./TodoList";

const Todos = () => {
  return (
    <div>
      <p>List of todos</p>
      {/* @ts-ignore */}
      <TodoList />
    </div>
  );
};

export default Todos;
