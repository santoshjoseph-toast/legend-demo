import { createContext} from 'react';
import { observable } from "@legendapp/state"
import {State} from './State';

// @ts-ignore
const state = observable<State>({ count: 0, inc: () => state.count(prev => prev + 1) })
const StateContext = createContext(state);

export default StateContext;