import React from 'react';
import './TodoList.css'

interface TodoListProps {
    items: { id: string, text: string }[];
    deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, deleteTodo }) => {

    return (
        <div>
            {items.map((todo) => (
                <ul>
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                </ul>

            ))}
        </div>
    );
};

export default TodoList;