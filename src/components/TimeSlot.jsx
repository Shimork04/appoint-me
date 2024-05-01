import React from 'react';

const TimeSlot = ({ timeSlots, handleTimeSlotClick }) => {
  return (
    <div className="sidebar">
      <h2>Time Slots</h2>
      {timeSlots.map((timeSlot, index) => (
        <button key={index} onClick={() => handleTimeSlotClick(timeSlot)}>
          {timeSlot}
        </button>
      ))}
    </div>
  );
};

export default TimeSlot;