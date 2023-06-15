import React from 'react';
import '../App.css';

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

const CountMemoized = React.memo(Count)

export default function CounterOptimzed() {
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
            <p className='bold'>React Counter useMemo</p>
            <p>Render:{renderCount}</p>
            <CountMemoized count={count} inc={inc} />
        </div>
    );
}