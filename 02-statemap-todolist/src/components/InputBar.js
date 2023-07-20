import React, { useState } from 'react';
import classes from './InputBar.module.css';
import { v4 as uuidv4 } from 'uuid';

const InputBar = (props) => {
    const [inputText, setInputText] = useState('');

    const submitForm = () => {
        // Send key and task name to App
        const payload = { id: uuidv4(), name: inputText };
        console.log(payload);
        props.addTodoItem(payload);

        // Reset the input text after item add
        setInputText('');
    };

    const inputTextChangeHandler = (event) => {
        setInputText(event.target.value);
    };

    return (
        <div className={classes['todo-input-container']}>
            <label>New task</label>
            <input className={classes['todo-input']} type='text' value={inputText}
                   onChange={inputTextChangeHandler} />
            <button className={classes['todo-add-btn']} onClick={submitForm}>Add</button>
        </div>
    );
};

export default InputBar;