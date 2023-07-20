import './App.css';
import Form from './components/Form';
import View from './components/View';
import { useState } from 'react';

const App = () => {
    const [formValue, setFormValue] = useState();
    const formSubmitHandler = (values) => {
        setFormValue(values);
    };

    return (
        <div className='App'>
            <h1>Form</h1>
            <Form onFormSubmit={formSubmitHandler}></Form>
            <View formValue={formValue}></View>
        </div>
    );
};

export default App;
