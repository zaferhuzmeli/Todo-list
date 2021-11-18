import React, { useState, useRef, useEffect } from 'react';

function TodoForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputReference = useRef(null)

    useEffect(() => {
        inputReference.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {

        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };


    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        type='text'
                        placeholder='Update your item'
                        value={input}
                        name="text"
                        className="todo-input"
                        onChange={handleChange}
                        ref={inputReference}
                    />
                    <button className="todo-button">Update</button>
                </>
            ) :
                (
                    <>
                        <input
                            type='text'
                            placeholder='Add a todo'
                            value={input}
                            name="text"
                            className="todo-input"
                            onChange={handleChange}
                            ref={inputReference}
                        />
                        <button className="todo-button">Add todo</button>
                    </>)}

        </form>
    )
}

export default TodoForm
