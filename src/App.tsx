import React from 'react';
import { observable } from "@legendapp/state"
import './App.css';
import Counter from './components/React/Counter';
import LegandCounter from './components/Legend/LegendCounter';
import LegandCounterGranular from './components/Legend/LegandCounterGranular';
import LegendStateContext from './components/StateContext';
import MultipleCounters from './components/React/MultipleCounters';
import {State} from './components/State';
import LegandWithContext from './components/Legend/LegendWithContext';

// @ts-ignore
const legendState = observable<State>({ count: 0, inc: () => legendState.count.set(prev => prev + 1) })

function App() {
  return (
    <div className="App">
     <Counter />
     <MultipleCounters />
     <LegandCounter />
     <LegandCounterGranular />
     <LegendStateContext.Provider value={legendState}>
        <LegandWithContext />
     </LegendStateContext.Provider>
    </div>
  );
}

export default App;
