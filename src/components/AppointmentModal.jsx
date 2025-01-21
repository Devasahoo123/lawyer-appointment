import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookAppointment } from '../features/appointmentsSlice';

const AppointmentModal = ({ lawyer, onClose }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const handleBooking = () => {
    if (parseInt(lawyer.availability, 10) > 0) {
      dispatch(
        bookAppointment({
          lawyerId: lawyer.id,
          lawyerName: lawyer.name,
          time: new Date().toISOString(),
        })
      );
      onClose();
    } else {
      setError('Sorry, no slots available at the moment.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-11/12 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold text-center">
          Schedule an Appointment with {lawyer.name}
        </h2>
        {error && (
          <p className="text-red-500 text-center">{error}</p>
        )}
        <div className="flex justify-end space-x-4">
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            onClick={handleBooking}
          >
            Confirm
          </button>
          <button
            className="bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
