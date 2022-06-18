import {useState} from "react";

export default function Calculator() {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');
    return (
        <>
            <label htmlFor='input-field'>Input</label>
                <input id='input-field' onChange={(event) => {setInputValue(event.target.value)}}/>
            <label htmlFor='output-field'>Output</label>
                <input id='output-field' defaultValue={outputValue}/>
            <button id='calculate' onClick={() => {setOutputValue(inputValue)}}>Calculate</button>
            <button id='+'>+</button>
            <button id='-'>-</button>
            <button id='x'>x</button>
            <button id='÷'>÷</button>
        </>
    )
}