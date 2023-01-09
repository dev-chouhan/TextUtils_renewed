import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "primary");
    }
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "primary");
    }
    const handleClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Cleared the text", "danger");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Turn up your volume to hear", "info");
    }
    const handleReverse = (event) => {
        /* Convert string to array*/
        let strArr = text.split("");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        setText(newText);
        props.showAlert("reversed the text", "primary");
    };
    const handleCapitalize = () => {
        const lower = text.toLowerCase();
        setText(lower.charAt(0).toUpperCase() + lower.slice(1));
        props.showAlert("Converted to Capatilized", "primary");
    };
    const copyToClipboard = () => {
        var copyText = document.getElementById("myBox");
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
        // Copy the text inside the text field
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(copyText.value);
        // Alert the copied text
        // alert("Copied the text: " + copyText.value);
        props.showAlert("Copied to clipboard", "info");
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Default text here");
    document.title = 'TextUtils - Home';

    return (
        <>
            <div className='container'>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} onChange={handleOnChange} placeholder="Enter text here..." id="myBox" rows="12" value={text}></textarea>
                </div>
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <button className="btn btn-primary my-2" disabled={text.split(" ").filter((t) => t !== "").length === 0}  onClick={handleUpClick}>
                        Convert to Uppercase
                    </button>
                    <button className="btn btn-secondary mx-3 my-2" disabled={text.split(" ").filter((t) => t !== "").length === 0} onClick={handleDownClick}>
                        Convert to Lowercase
                    </button>
                    <button className="btn btn-secondary mx-3 my-2" disabled={text.split(" ").filter((t) => t !== "").length === 0 ? 'disabled' : ''} onClick={handleCapitalize}>
                        Capatilize the text
                    </button>
                    <button className="btn btn-secondary mx-3 my-2" disabled={text.split(" ").filter((t) => t !== "").length === 0 ? 'disabled' : ''} onClick={handleReverse}>
                        Reverse the text
                    </button>
                    <button className="btn btn-secondary mx-3 my-2" disabled={text.split(" ").filter((t) => t !== "").length === 0 ? 'disabled' : ''} onClick={copyToClipboard}>
                        Copied to Clipboard
                    </button>
                    <button onClick={speak} disabled={text.split(" ").filter((t) => t !== "").length === 0 ? 'disabled' : ''} className="btn btn-secondary mx-3 my-2">
                        Speak
                    </button>
                    <button className="btn btn-danger mx-3 my-2" disabled={text.split(" ").filter((t) => t !== "").length === 0 ? 'disabled' : ''} onClick={handleClear}>
                        Clear all text
                    </button>
                </div>
            </div>
            <div className="container my-5">
                <h1>Your text summary</h1>
                <p>{text.split(" ").filter((t) => t !== "").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((t) => t !== "").length} minutes time taken to read.</p>
                <div className="my-4">
                    <h3>Preview:</h3>
                    <p>{text.length > 0 ? text:"Nothing to preview"}</p>
                </div>
            </div>
        </>
    )
}