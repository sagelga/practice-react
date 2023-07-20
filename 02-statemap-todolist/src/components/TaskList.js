import React from 'react';
import TaskItem from './TaskItem';

const TaskList = (props) => {
    if (props.todoItemList.length < 1) {
        return <div></div>;
    }

    return (
        <div>
            {props.todoItemList.map((item) => <TaskItem key={item.id} id={item.id}
                                                        todoItemDelete={props.todoItemDelete}>{item.name}
            </TaskItem>)}
        </div>
    );
};

export default TaskList;