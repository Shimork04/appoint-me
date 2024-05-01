import React from 'react';
import './form.css';

const AppointmentForm = ({ formData, handleInputChange, handleAddAppointment }) => {
  return (
    <div className="content">
      <div className="form-container">
        <h2>Add Appointment</h2>
        <form className="appointment-form">
          <label>
            Time Slot:
            <input
              type="text"
              name="timeSlot"
              value={formData.timeSlot}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Customer Name:
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Customer Phone:
            <input
              type="text"
              name="customerPhone"
              value={formData.customerPhone}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Stylist:
            <input
              type="text"
              name="stylist"
              value={formData.stylist}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Service:
            <input
              type="text"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Notes:
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
            ></textarea>
          </label>
          <button type="button" onClick={handleAddAppointment}>
            Add Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
