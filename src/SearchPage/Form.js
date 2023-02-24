import React from 'react';
import '../index.css';
import { useState } from 'react';

const [options, setOptions] = useState([]);
const [text, setText] = useState('');

function checkboxCallback(event){
    setOptions(options.push(event.id));
}


function Options(props){
    return(
        <div className='choice'>
            <input type="checkbox" id={props.name}/>
            <label for={props.name}>{props.name.charAt(0).toUpperCase()}</label>
        </div>
    )
}

function checkBoxes(props){
    const choices = props.options.map((option) => {
        return <Options name={option}/>
    })
    return(
        <form className={'userinput' + props.type}>
            <h1>{props.type.charAt(0).toUpperCase()}</h1>
            {choices}
            <div class="choice">
                <input className="search" type="text" placeholder="Enter your own:" 
                />
            </div>
        </form>
    )

}

export function Form(props){
    return(
        <div className="flex-container inputs">
            <checkBoxes type= {props.types} options={props.options}/>
        </div>
    )
}