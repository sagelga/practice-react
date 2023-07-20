import React, { useState } from 'react';

const Form = (props) => {
    const [name,setName] = useState(' ')
    const [age, setAge] = useState(0)
    const [time, setTime] = useState( Date.now())

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log('submit')
        props.onFormSubmit({name: name, age: age, time: time})
    };

    const nameChange = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }

    const ageChange = (event) => {
        console.log(event.target.value)
        setAge(event.target.value)
    }

    const timeChange = (event) => {
        console.log(event.target.value)
        setTime(event.target.value)
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <div className='name'>
                    <label>Name</label>
                    <input type='text' onChange={nameChange}></input>
                </div>
                <div className='age'>
                    <label>Age</label>
                    <input type='number' onChange={ageChange}></input>
                </div>
                <div className='time'>
                    <label>Time</label>
                    <input type='time' onChange={timeChange}></input>
                </div>
                <input type='submit' value='Submit' />
            </form>
        </div>
    );
};

export default Form;