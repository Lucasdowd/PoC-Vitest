import { useState } from "react";

const Card = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Título card</h1>
            Count: <span role="count-indicator">{count}</span>
            <button onClick={() => {setCount((count) => count + 1)}}>Increment</button>
        </div>
    );
}

export default Card;