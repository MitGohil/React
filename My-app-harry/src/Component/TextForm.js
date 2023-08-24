import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("handleUpClick was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text converted in UpperCase successfully", "success")

    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text converted in LowerCase successfully", "success")

    }

    //Remove extra spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[   ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces successfully", "success")

    }


    const handleclrClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text area clear successfully", "warning")

    }
    const handleOnChange = (event) => {
        // console.log("handleOnChange");
        setText(event.target.value)
    }

    const [text, setText] = useState("")
    //Change the alue of text
    // text = "Enter text here" //This is wrong way
    //setText("Enter text here"); // This is right way

    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? '#042743' : 'white' }} placeholder='Enter your text' value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>

                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
                <button className="btn btn-primary mx-1" onClick={handleclrClick}>Clear</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox to preview"}</p>
            </div>
        </>
    )
}
