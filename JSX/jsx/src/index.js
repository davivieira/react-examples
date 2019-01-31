//Import react and react-dom
import React from 'react';
import ReactDOM from 'react-dom';

//Create our component
const App = () => {
    const labelText = "Enter your name"
    const submitButtonLabel = "Send"

    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input type="text" id="name" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>{submitButtonLabel}</button>
        </div>
    )
};

//Render our component into the browser
ReactDOM.render(<App />, document.querySelector('#root'));