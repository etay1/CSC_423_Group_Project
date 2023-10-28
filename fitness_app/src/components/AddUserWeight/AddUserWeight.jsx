import React from "react";
// import { useUserWeightForm } from "../../hooks/useUserWeightForm"; // Import your custom hook
import "./AddUserWeight.css";
import useUserWeightForm from "../../hooks/useUserWeightForm";

function AddUserWeight({ isAddUserWeightPopupOpen, closeAddUserWeightPopup }) {
  const {
    date,
    weight,
    handleDateChange,
    handleWeightChange,
    handleAddWeight,
    successMessage,
    isSuccess,
  } = useUserWeightForm();

  return (
    <div className={`modal ${isAddUserWeightPopupOpen ? "active" : ""}`}>
      <div className="overlay"></div>
      <div className="container">
        <div className="user-weight-form">
          <h1 className="title-add-user-weight">Add User Weight</h1>
          <form>
            <div className="input-container">
              <label>Date:</label>
              <input
                type="date"
                name="date"
                value={date}
                onChange={handleDateChange}
              />
            </div>
            <div className="input-container">
              <label>Weight (in lbs):</label>
              <input
                type="number"
                name="weight"
                value={weight}
                onChange={handleWeightChange}
              />
            </div>
          </form>
          <div className="form-buttons-add-user-weight">
            <button
              className="button-add-user-weight"
              onClick={closeAddUserWeightPopup}
            >
              Cancel
            </button>
            <button
              className="button-add-user-weight"
              type="button"
              onClick={handleAddWeight}
            >
              Add Weight
            </button>
          </div>

          {isSuccess && (
            <div className="message-add-user-weight">{successMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddUserWeight;
