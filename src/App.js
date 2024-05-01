import React, { useState } from 'react';
import TimeSlot from './components/TimeSlot';
import AppointmentForm from './components/AppointmentForm';
import './App.css'; // Import your CSS file for styling

function App() {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    timeSlot: '',
    customerName: '',
    customerPhone: '',
    stylist: '',
    service: '',
    notes: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddAppointment = () => {
    if (
      formData.timeSlot &&
      formData.customerName &&
      formData.customerPhone &&
      formData.stylist &&
      formData.service
    ) {
      const newAppointment = { ...formData };
      setAppointments([...appointments, newAppointment]);
      setFormData({
        timeSlot: '',
        customerName: '',
        customerPhone: '',
        stylist: '',
        service: '',
        notes: '',
      });
    }
  };

  const handleTimeSlotClick = (timeSlot) => {
    const appointment = appointments.find((app) => app.timeSlot === timeSlot);
    setFormData(appointment);
  };

  const timeSlots = appointments.map((appointment) => appointment.timeSlot);

  return (
    <div className="App">
      <div className="time-slot-container">
        <TimeSlot timeSlots={timeSlots} handleTimeSlotClick={handleTimeSlotClick} />
      </div>
      <div className="form-container">
        <AppointmentForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleAddAppointment={handleAddAppointment}
        />
      </div>
    </div>
  );
}

export default App;

















// import React, { useState } from 'react';
// import TimeSlot from './components/TimeSlot';
// import AppointmentForm from './components/AppointmentForm';

// function App() {
//   const [appointments, setAppointments] = useState([]);
//   const [formData, setFormData] = useState({
//     timeSlot: '',
//     customerName: '',
//     customerPhone: '',
//     stylist: '',
//     service: '',
//     notes: '',
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleAddAppointment = () => {
//     if (
//       formData.timeSlot &&
//       formData.customerName &&
//       formData.customerPhone &&
//       formData.stylist &&
//       formData.service
//     ) {
//       const newAppointment = { ...formData };
//       setAppointments([...appointments, newAppointment]);
//       setFormData({
//         timeSlot: '',
//         customerName: '',
//         customerPhone: '',
//         stylist: '',
//         service: '',
//         notes: '',
//       });
//     }
//   };

//   const handleTimeSlotClick = (timeSlot) => {
//     const appointment = appointments.find((app) => app.timeSlot === timeSlot);
//     setFormData(appointment);
//   };

//   const timeSlots = appointments.map((appointment) => appointment.timeSlot);

//   return (
//     <div className="App">
//       <TimeSlot timeSlots={timeSlots} handleTimeSlotClick={handleTimeSlotClick} />
//       <AppointmentForm
//         formData={formData}
//         handleInputChange={handleInputChange}
//         handleAddAppointment={handleAddAppointment}
//       />
//     </div>
//   );
// }

// export default App;














