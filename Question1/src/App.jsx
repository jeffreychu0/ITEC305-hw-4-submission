import { useState } from "react";
import React from 'react';
import './App.css'
import { Todo } from "./components/Todo";

// Question Number 1
export const user = {
    name: '',
};

function App1() {
    const name = "Jeffrey"
    // Your goal: This function should be called WITH A VALUE for name when the <button> is clicked
    function handleCreateUser(name) {
        user.name = name;
    }

    return (
        <div id="app">
            <h1>User Login</h1>
            <p>
                <label>Name</label>
                {/* You don't need to do anything with this input! */}
                <input type="text" />
            </p>

            <p id="actions">
                <button onClick={() => handleCreateUser(name)}>Create User</button>
            </p>
        </div>
    );
}

// Question Number 2
function App2() {
    const [price, setPrice] = useState(100);

    function handlePriceClick() {
        setPrice(75)
    }

    return (
        <div>
            <p data-testid="price">${price}</p>
            <button onClick={handlePriceClick}>Apply Discount</button>
        </div>
    );
}

// Question Number 3
function App3() {
    const [alertId, setAlertId] = useState("hidden")
    return (
        <div>
            <div data-testid="alert" id={alertId}>
                <h2>Are you sure?</h2>
                <p>These changes can't be reverted!</p>
                <button onClick={() => { setAlertId("hidden") }}>Cancel</button>
                <button onClick={() => { setAlertId("hidden") }}>Proceed</button>
            </div>
            <button onClick={() => { setAlertId("alert") }}>Delete</button>
        </div>
    );
}

// Question Number 4
function App4() {
    const [paragraphClass, setParagraphClass] = useState("")
    return (
        <div>
            <p className={paragraphClass}>Style me!</p>
            <button onClick={() => { setParagraphClass("active") }}>Toggle style</button>
        </div>
    );
}

export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

function App5() {
    return (
        <ul>
            {DUMMY_TODOS.map((item) => <Todo text={item} />)}
        </ul>
    );
}


export default App5;
