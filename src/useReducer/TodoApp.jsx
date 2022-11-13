import React, { useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    todo: "Recolectar la piedra del alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    todo: "Recolectar la piedra del alma",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);




  return (
    <>
      <h1>
        Todo APP 10, <small>pendientes: 2 </small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">

          {
            
          }
          <TodoList todos={todos}/>
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd/>
        </div>
      </div>
    </>
  );
};
