import './App.css';
import TaskList from './components/TaskList';
import InputBar from './components/InputBar';
import { useState } from 'react';

function App() {
    const [todoItemList, setTodoItemList] = useState([]);

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
