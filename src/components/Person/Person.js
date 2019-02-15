import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.logMessage}>Hi, I'm {props.name} and I'm {props.age} year(s) old</p>
            <p>{props.children}</p>
            <input type="text" name="newName" onChange={props.nameChangeHandler} value={props.name}/>
        </div>
    );
};

export default person;