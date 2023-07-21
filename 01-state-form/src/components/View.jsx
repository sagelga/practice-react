import React from 'react';

const View = (props) => {
    if (!props.formValue) {
        return <div></div>;
    }

    const name = props.formValue.name;
    const age = props.formValue.age;
    const time = props.formValue.time;

    return (
        <>
            <p>{name}</p>
            <p>{age}< /p>
            <p>{time}</p>
        </>
    );
};

export default View;