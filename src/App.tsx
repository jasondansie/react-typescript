import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { Todo } from './todo.model';


const App: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  }

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId)
    })
  }

  return (
    <div>
      <h1>React-Typescrip Todo App</h1>
      <AddTodo
        addTodo={addTodoHandler}
      />
      {/* the todo list */}
      <TodoList
        items={todos}
        deleteTodo={deleteTodoHandler}
      />
    </div>
  );
}

export default App;
