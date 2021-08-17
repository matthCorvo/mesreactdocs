import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="bord">
            <h1>compteur</h1>
            <p>{count}</p>
            <button onClick={() => setCount((prevcount) => prevcount - 1)}>
                -1
            </button>
            <button onClick={() => setCount((prevcount) => prevcount + 1)}>
                +1
            </button>
        </div>
    );
}

export default Counter
