import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
            <h1>Count Value is: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement} style={{ marginLeft: '10px' }}>Decrement</button>
        </div>
    );
}