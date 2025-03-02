import React, { useReducer } from "react";

const initialState = {
  name: "",
  establishment_year: "",
  address: {
    building: "",
    street: "",
    city: { name: "", locality: { pinCode: "", landmark: "" } },
    state: "",
    coordinates: { latitude: "", longitude: "" },
  },
  courses_offered: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "UPDATE_ADDRESS":
      return {
        ...state,
        address: { ...state.address, [action.field]: action.value },
      };
    case "UPDATE_CITY":
      return {
        ...state,
        address: {
          ...state.address,
          city: { ...state.address.city, [action.field]: action.value },
        },
      };
    case "UPDATE_LOCALITY":
      return {
        ...state,
        address: {
          ...state.address,
          city: {
            ...state.address.city,
            locality: {
              ...state.address.city.locality,
              [action.field]: action.value,
            },
          },
        },
      };
    case "RESET":
      return initialState;
    default:
      throw new Error("Invalid action type");
  }
};

const CollegeForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({ type: "UPDATE_FIELD", field: e.target.name, value: e.target.value });
  };

  const handleAddressChange = (e) => {
    dispatch({ type: "UPDATE_ADDRESS", field: e.target.name, value: e.target.value });
  };

  const handleCityChange = (e) => {
    dispatch({ type: "UPDATE_CITY", field: e.target.name, value: e.target.value });
  };

  const handleLocalityChange = (e) => {
    dispatch({ type: "UPDATE_LOCALITY", field: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", state);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px", border: "1px solid #ccc" }}>
      <h2>College Form</h2>
      <form onSubmit={handleSubmit}>
        <label>College Name: <input type="text" name="name" value={state.name} onChange={handleChange} /></label>
        <label>Establishment Year: <input type="text" name="establishment_year" value={state.establishment_year} onChange={handleChange} /></label>
        <h3>Address</h3>
        <label>Building: <input type="text" name="building" value={state.address.building} onChange={handleAddressChange} /></label>
        <label>Street: <input type="text" name="street" value={state.address.street} onChange={handleAddressChange} /></label>
        <label>City: <input type="text" name="name" value={state.address.city.name} onChange={handleCityChange} /></label>
        <label>Pincode: <input type="text" name="pinCode" value={state.address.city.locality.pinCode} onChange={handleLocalityChange} /></label>
        <label>Landmark: <input type="text" name="landmark" value={state.address.city.locality.landmark} onChange={handleLocalityChange} /></label>
        <label>State: <input type="text" name="state" value={state.address.state} onChange={handleAddressChange} /></label>
        <label>Latitude: <input type="text" name="latitude" value={state.address.coordinates.latitude} onChange={handleAddressChange} /></label>
        <label>Longitude: <input type="text" name="longitude" value={state.address.coordinates.longitude} onChange={handleAddressChange} /></label>
        <label>Courses Offered: <input type="text" name="courses_offered" value={state.courses_offered} onChange={handleChange} /></label>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </form>
    </div>
  );
};

export default CollegeForm;