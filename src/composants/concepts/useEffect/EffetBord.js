	
import { useState, useEffect } from "react";
 
export default function Counter() {
    const [count, setCount] = useState(0);
 
    useEffect(() => {
        document.title = `${count}`;
    });
 
    return (
        <div>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            Click moi {count}
            </button>
        </div>
    );
}