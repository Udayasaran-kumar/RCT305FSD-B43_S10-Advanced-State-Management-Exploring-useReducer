import React, { useReducer } from "react";

// Define initial state
const initialState = { count: 0 };

// Define reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const CounterApp = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-black">
      <h1 className="text-2xl mb-4">Count: {state.count}</h1>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
