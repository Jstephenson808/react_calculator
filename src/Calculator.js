import {useState} from "react";

export default function Calculator() {
    const [input1Value, setInput1Value] = useState('');
    const [outputValue, setOutputValue] = useState('');
    return (
        <>
            <label htmlFor='input-field-1'>Input 1</label>
                <input id='input-field-1' onChange={(event) => {setInput1Value(event.target.value)}}/><br/>
            <label htmlFor='input-field-2'>Input 2</label>
                <input id='input-field-2'/><br/>
            <label htmlFor='output-field'>Output</label>
                <input id='output-field' defaultValue={outputValue}/>
            <button id='calculate' onClick={() => {setOutputValue(input1Value)}}>Calculate</button>
            <button id='+'>+</button>
            <button id='-'>-</button>
            <button id='x'>x</button>
            <button id='÷'>÷</button>
        </>
    )
}