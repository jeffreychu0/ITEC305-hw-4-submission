import { useState } from "react";
import './App.css'

// Question Number 2
function App() {
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


export default App;
