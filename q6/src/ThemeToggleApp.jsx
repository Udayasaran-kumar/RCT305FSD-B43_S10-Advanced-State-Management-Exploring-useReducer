import React, { useReducer } from "react";


const initialState = { theme: "light" };


const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

const ThemeToggleApp = () => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-all duration-300 ${
        state.theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <h1 className="text-2xl mb-4">Current Theme: {state.theme}</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggleApp;