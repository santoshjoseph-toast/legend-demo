import React from 'react';
import { observable } from "@legendapp/state"
import './App.css';
import Counter from './components/Counter';
import LegandCounter1 from './components/LegendCounter1';
import LegandCounter2 from './components/LegendCounter2';
import LegandCounterContext from './components/LegendCounterContext';
import StateContext, {State} from './components/StateContext';
import CounterOptimzed from './components/CounterOptimzed';

const state = observable<State>({ count: 0 })

function App() {
  return (
    <div className="App">
     <Counter />
     <CounterOptimzed />
     <LegandCounter1 />
     <LegandCounter2 />
     <StateContext.Provider value={state}>
        <LegandCounterContext />
     </StateContext.Provider>
    </div>
  );
}

export default App;
