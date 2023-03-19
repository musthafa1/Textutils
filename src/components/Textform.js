import React from "react"
import  {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase", "success");
    }
    const handleOnChange = (event)=>{
setText(event.target.value);
    }
    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase", "success");
    }
    const handleClearClick = ()=> {
        let newText = '';
        setText(newText);
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("copied to clipboard", "success");
    }
    const[text, setText] = useState('Enter the text');
  return (
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>{props.heading} </h1>
        <div className='my-2'>
        <textarea className="form-control" value = {text}  onChange = {handleOnChange} style = {{backgroundColor : props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'light' ? '#042743' : 'white'}} id="my-box" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick} >Convert to Uppercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleLoClick} >Convert to Lowercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleClearClick} >Clear text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleCopy} >Copy text</button>
    </div>
  )
}
