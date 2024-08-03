import { createContext, useContext, useReducer } from "react";
import PropTypes from 'prop-types';

export const CountContext = createContext();

const initialState = {
    count: 0,
}

function reducer(state, action) { 
    switch(action.type){
        case 'increment':
            return {
                count: state.count + 1,
            }
        case 'decrement':
            return {
                count: state.count - 1,
            }
        default:
            throw new Error("Unknown action type")
    }
}

const CountProvider = ({ children }) => {
    const [{ count }, dispatch] = useReducer(reducer, initialState);

    const handleIncrement = () => {
        dispatch({ type: 'increment' })
    }

    const handleDecrement = () => {
        dispatch({ type: 'decrement' })
    }

    return (
        <CountContext.Provider
            value={{
                count,
                handleIncrement,
                handleDecrement,
            }}
        >
            {children}
        </CountContext.Provider>
    )
}

CountProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

function useCount() {
    const context = useContext(CountContext);

    if (context === undefined) {
        throw new Error('CountContext was used outside the CountProvider');
    }

    return context;
}

export { CountProvider, useCount };
