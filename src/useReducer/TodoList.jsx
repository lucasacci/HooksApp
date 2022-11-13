import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos}) => {
  return (
    <>
        <ul className="list-group">
            {todos.map((todo,i) => (
              <TodoItem todo={todo} key={todo.id} i={i}/>
            ))}
          </ul>
    </>
  )
}
