import React from 'react';
import { observable } from "@legendapp/state"
import { enableLegendStateReact } from "@legendapp/state/react"

enableLegendStateReact()

const state = observable({ count: 0, inc: () => state.count.set(prev => prev + 1)})

interface CountProps {
    state: typeof state
}
function Count({state}: CountProps) {
    return (
        <div>
            <button onClick={state.inc}>+</button>
            <p>Count: {state.count}</p>
        </div>
    );
}

function LegandCounterGranular() {
    const renderCount = ++React.useRef(0).current;

    React.useEffect(() => {
        const id = setInterval(() => state.count.set(prev => prev + 1), 2000);
        return () => clearInterval(id);
    }, []);

    return (
        <div>
            <p className='bold'>Legend State (granular)</p>
            <p>Render:{renderCount}</p>
            <Count state={state} />
            <Count state={state} />
        </div>
    );
}

export default LegandCounterGranular;