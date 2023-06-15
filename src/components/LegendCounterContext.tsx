import React, { useContext } from 'react';
import { enableLegendStateReact } from "@legendapp/state/react"
import StateContext from './StateContext';

enableLegendStateReact()

function LegandCounterContext() {
    const state = useContext(StateContext);
    const renderCount = ++React.useRef(0).current;

    React.useEffect(() => {
        const id = setInterval(() => state.count.set(prev => prev + 1), 2000);
        return () => clearInterval(id);
    }, [state.count]);

    return (
        <div>
            <p className='bold'>Legend State Context</p>
            <p>Render:{renderCount}</p>
            <p>Count: {state.count}</p>
        </div>
    );
}

export default LegandCounterContext;