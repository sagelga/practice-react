import React from 'react';
import classes from './TaskItem.module.css';

const TaskItem = (props) => {

    const onDeleteButtonClick = () => {
        props.todoItemDelete(props.id);
    };

    return (
        <div className={classes['todo-item']}>
            <div key={props.id}>{props.children}</div>
            <button className={classes['todo-remove-btn']} onClick={() => onDeleteButtonClick(props.id)}>Delete</button>
        </div>
    );
};

export default TaskItem;