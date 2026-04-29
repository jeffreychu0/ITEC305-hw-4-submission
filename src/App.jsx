import { useState } from "react";
import React from 'react';
import './App.css'

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



export default App1;
