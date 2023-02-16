import React, { FormEvent, useRef, useState } from 'react';
import './AddTodo.css'

type AddTodoProp = {
    addTodo: (todoText: string) => void;
}

const AddTodo = ({ addTodo }: AddTodoProp) => {


    const textInputRef = useRef<HTMLInputElement>(null);

    const hasWhiteSpace = (s: string) => {
        return /^\s/g.test(s);
    }

    const addToDoHandler = (e: FormEvent) => {
        e.preventDefault();
        const enteredText = textInputRef.current!.value;
        if (!hasWhiteSpace(enteredText)) {
            addTodo(enteredText);
            textInputRef.current!.value = "";
        }
    }

    return (
        <form onSubmit={addToDoHandler}>
            <div className='form-control'>
                <label htmlFor="addtodo">Add Todo</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type='submit'>Add Todo</button>
        </form>
    );
};

export default AddTodo;