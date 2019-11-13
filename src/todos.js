import React from 'react';

const Todos = ({todos, deleteTodo}) => {
  const todosMap = todo =>
        (
            <div className="collection-item" key={todo.id}>
              <span onClick={() => deleteTodo(todo.id) }>{todo.content}</span>
            </div>
        );
  const todosList = todos.length ?
        (todos.map(todosMap)) :
        (<div className="collection-item"><span> --> U have no todo's left, yay!</span></div>);
  return(
    <div className="todos collection">
      { todosList }
    </div>
  );
};

export default Todos;
