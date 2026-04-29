import { useState } from "react";
import './App.css'

// Question Number 4
function App() {
    const [paragraphClass, setParagraphClass] = useState("")
    return (
        <div>
            <p className={paragraphClass}>Style me!</p>
            <button onClick={() => { setParagraphClass("active") }}>Toggle style</button>
        </div>
    );
}

export default App;
