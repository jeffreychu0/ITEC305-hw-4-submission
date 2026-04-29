import { useState } from "react";
import React from 'react';
import './App.css'

// Question Number 3
function App() {
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

export default App;
