import './App.css';
import TaskList from './components/TaskList';
import InputBar from './components/InputBar';
import { useState } from 'react';

const DUMMY_VALUES = [
    { id: '1', name: 'test1' },
    { id: '2', name: 'test2' },
    { id: '3', name: 'test3' },
    { id: '4', name: 'test4' },
    { id: '5', name: 'test5' },
];

function App() {
    const [todoItemList, setTodoItemList] = useState(DUMMY_VALUES);

    const todoItemsAddHandler = (todoItem) => {
        setTodoItemList([...todoItemList, todoItem]);
    };

    const todoItemDeleteHandler = (idToDelete) => {
        const updatedArray = todoItemList.filter(item => item.id !== idToDelete);
        setTodoItemList(updatedArray);
    };

    return (
        <div className='App todo-container'>
            <h1>To-do</h1>
            <InputBar addTodoItem={todoItemsAddHandler} />
            <TaskList todoItemList={todoItemList} todoItemDelete={todoItemDeleteHandler} />
        </div>
    );
}

export default App;
