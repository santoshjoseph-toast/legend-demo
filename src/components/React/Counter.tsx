import React from 'react';

export default function Counter() {
    const renderCount = ++React.useRef(0).current;
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        const id = setInterval(() => setCount(prev => prev + 1), 2000);
        return () => clearInterval(id);
    }, []);

    const inc = () => {
        setCount(prev => prev + 1)
    }

    return (
        <div>
            <p className='bold'>React Counter useState</p>
           <p>Render:{renderCount}</p>
           <div>
            <button onClick={inc}>+</button>
                <p>Count: {count}</p>
           </div>
        </div>
    );
}