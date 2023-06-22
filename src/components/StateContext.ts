import { createContext} from 'react';
import { observable } from "@legendapp/state"
import {State} from './State';

const state = observable<State>()
const StateContext = createContext(state);

export default StateContext;