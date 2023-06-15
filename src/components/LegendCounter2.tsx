import React from 'react';
import { observable } from "@legendapp/state"
import { enableLegendStateReact } from "@legendapp/state/react"

enableLegendStateReact()

const state = observable({ count: 0 })

function LegandCounter2() {
    const renderCount = ++React.useRef(0).current;

    React.useEffect(() => {
        const id = setInterval(() => state.count.set(prev => prev + 1), 2000);
        return () => clearInterval(id);
    }, []);

    return (
        <div>
            <p className='bold'>Legend State 2</p>
            <p>Render:{renderCount}</p>
            <p>Count: {state.count}</p>
        </div>
    );
}

export default LegandCounter2;