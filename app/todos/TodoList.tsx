import next from "next";
import Link from "next/link";
import React from "react";
import { Todo } from "../../typings";

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();
  return todos;
};
const TodoList = async () => {
  const todos = await fetchTodos();
  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link
            href={`/todos/${todo.id}`}
            className={`p-4 flex flex-col gap-2 w-max ${
              todo.completed ? " bg-green-400" : " bg-yellow-400"
            }`}
          >
            <p>Todo: {todo.title}</p>
            <p className=" bg-black text-white p-3 w-max">ID: {todo.id}</p>
          </Link>
        </p>
      ))}
    </>
  );
};

export default TodoList;
