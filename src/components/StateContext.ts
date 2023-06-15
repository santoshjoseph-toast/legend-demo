import { createContext} from 'react';
import { observable } from "@legendapp/state"

export interface State {
    count: number
}

const StateContext = createContext(observable<State>({count: 0}));

export default StateContext;