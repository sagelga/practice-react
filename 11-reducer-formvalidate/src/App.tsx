import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

// This makes sure the action and dispatch actions matched
enum CountActionKind {
    ADD = 'ADD',
    MINUS = 'MINUS',
}

// This is the action interface
interface CountAction {
    type: CountActionKind;
    payload: number;
}

// This is the state interface
interface CountState {
    value: number;
}

function countReducer(state: CountState, action: CountAction) {
    // Remember the switch (action.xxxx) format! In this case, it should be type since CountAction interface declares action values
    switch (action.type) {
        // For each case of type, do something
        case 'ADD':
            // Make sure that there is ...state to override only value in state
            return {
                ...state,
                value: state.value + action.payload,
            };
        default:
            return {
                ...state,
                value: state.value - action.payload,
            };
    }
}

function App() {
    const [state, dispatch] = useReducer(countReducer, { value: 0 });

    return (
        <div>
            Count: {state.value}
            {/* Calling our actions on button click */}
            <button
                onClick={() =>
                    dispatch({ type: CountActionKind.MINUS, payload: 1 })
                }
            >
                -
            </button>
            <button
                onClick={() =>
                    dispatch({ type: CountActionKind.ADD, payload: 1 })
                }
            >
                +
            </button>
        </div>
    );
}

export default App;
