import React, { useReducer } from "react";

// Define initial state
const initialState = { isVisible: false };

// Define reducer function
const visibilityReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_VISIBILITY":
      return { isVisible: !state.isVisible };
    default:
      return state;
  }
};

const VisibilityToggleApp = () => {
  const [state, dispatch] = useReducer(visibilityReducer, initialState);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-black">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 mb-4"
        onClick={() => dispatch({ type: "TOGGLE_VISIBILITY" })}
      >
        Toggle Message
      </button>
      {state.isVisible && <p className="text-xl">Hello, World!</p>}
    </div>
  );
};

export default VisibilityToggleApp;
