import React from 'react';
import TaskItem from './TaskItem';

const TaskList = (props) => {
    return (
        <div>
            {props.todoItemList.map((item) => <TaskItem id={item.id}
                                                        todoItemDelete={props.todoItemDelete}>{item.name}
            </TaskItem>)}
        </div>
    );
};

export default TaskList;