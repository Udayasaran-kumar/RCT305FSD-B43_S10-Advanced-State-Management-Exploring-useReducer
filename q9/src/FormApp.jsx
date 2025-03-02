import React, { useReducer } from "react";

// Define initial state
const initialState = { email: "", password: "", submitted: false };

// Define reducer function
const formReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL":
      return { ...state, email: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    case "SUBMIT":
      return { ...state, submitted: true };
    case "RESET":
      return initialState;
    default:
      throw new Error("Invalid action type");
  }
};

const FormApp = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-black">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg">
        <input
          type="email"
          placeholder="Enter email"
          value={state.email}
          onChange={(e) => dispatch({ type: "EMAIL", payload: e.target.value })}
          className="border border-gray-300 p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          value={state.password}
          onChange={(e) => dispatch({ type: "PASSWORD", payload: e.target.value })}
          className="border border-gray-300 p-2 rounded"
          required
        />
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
          Submit
        </button>
        <button type="button" onClick={() => dispatch({ type: "RESET" })} className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600">
          Reset
        </button>
      </form>
      {state.submitted ? (
        <div className="mt-4 p-4 bg-gray-200 rounded">
          <div>User Email: {state.email}</div>
          <div>User Password: {state.password}</div>
        </div>
      ) : (
        <div className="mt-4">No details found</div>
      )}
    </div>
  );
};

export default FormApp;
