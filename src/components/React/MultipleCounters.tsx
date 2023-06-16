import React from 'react';

interface CountProps {
    count: number;
    inc: () => void
}
function Count({count, inc}: CountProps) {
    return (
        <div>
            <button onClick={inc}>+</button>
            <p>Count: {count}</p>
        </div> 
    );
}

export default function MultipleCounters() {
    const renderCount = ++React.useRef(0).current;
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        const id = setInterval(() => setCount(prev => prev + 1), 2000);
        return () => clearInterval(id);
    }, []);

    const inc = React.useCallback(() => {
        setCount(prev => prev + 1)
    }, [setCount]);

    return (
        <div>
            <p className='bold'>Multiple Counters</p>
            <p>Render:{renderCount}</p>
            <Count count={count} inc={inc} />
            <Count count={count} inc={inc} />
        </div>
    );
}