import React from 'react';
import { observable } from "@legendapp/state"
import { observer } from "@legendapp/state/react"

const state = observable({ count: 0, inc: () => state.count.set(prev => prev + 1)})

const LegandCounter =  observer(function Component() {
    const renderCount = ++React.useRef(0).current;

    React.useEffect(() => {
        const id = setInterval(() => state.count.set(prev => prev + 1), 2000);
        return () => clearInterval(id);
    }, []);

    return (
        <div>
            <p className='bold'>Legend State (same as React)</p>
            <p>Render:{renderCount}</p>
            <button onClick={state.inc}>+</button>
            <p>Count: {state.count.get()}</p>
        </div>
    );
});

export default LegandCounter;