import React from 'react'

export const TodoAdd = () => 
{

    const onNewTodo = (e) =>{
        e.preventDefault();
        console.log(e.target[0].value);

        const todo = {
            id: new Date().getTime(),
            todo: e.target[0].value,
            done: false,
        }
    }

  return (
    <form onSubmit={onNewTodo}>
            <input
              type="text"
              placeholder="que hay que hacer?"
              className="form-control"
            />

            <button className="btn btn-outine-primary mt-1" type="submit">
              Agregar
            </button>
    </form>
  )
}
