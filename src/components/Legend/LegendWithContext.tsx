import React, { useContext } from 'react';
import { enableLegendStateReact } from "@legendapp/state/react"
import StateContext from '../StateContext';

enableLegendStateReact()

function Count() {
    const renderCount = ++React.useRef(0).current;
    const {childrenState} = useContext(StateContext)
    return (<div>
        <p>Child render: {renderCount}</p>
        <p>Count1: {childrenState.count1}</p>
        <p>Count1: {childrenState.count2}</p>
    </div>)
}

function LegandWithContext() {
    const state = useContext(StateContext);
    const renderCount = ++React.useRef(0).current;

    React.useEffect(() => {
        const id1 = setInterval(() => state.count.set((prev: number) => prev + 1), 2000);
        const id2 = setInterval(() => state.childrenState.count1.set((prev: number) => prev + 1), 3000);
        const id3 = setInterval(() => state.childrenState.count2.set((prev: number) => prev + 1), 4000);
        return () => {
            clearInterval(id1);
            clearInterval(id2);
            clearInterval(id3);
        }
    }, [state.count, state.childrenState.count1, state.childrenState.count2]);

    return (
        <div>
            <p className='bold'>Legend State Context</p>
            <p>Render:{renderCount}</p>
            <button onClick={state.inc}>+</button>
            <p>Count: {state.count}</p>
            <Count />
        </div>
    );
}

export default LegandWithContext;