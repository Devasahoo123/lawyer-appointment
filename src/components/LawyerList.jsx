import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AppointmentModal from './AppointmentModal';

const LawyerList = () => {
  // Accessing the list of lawyers from the Redux store
  const lawyers = useSelector((state) => state.lawyers);
  
  // State to keep track of the selected lawyer for booking an appointment
  const [selectedLawyer, setSelectedLawyer] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {lawyers.map((lawyer) => (
        <div
          key={lawyer.id}
          className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
        >
          {/* Lawyer's name displayed at the top */}
          <h2 className="text-3xl font-bold text-gray-800">{lawyer.name}</h2>

          {/* Lawyer's image */}
          <div className="mt-4">
            <img
              src={lawyer.image}
              alt={`Portrait of ${lawyer.name}`}
              className="w-32 h-32 object-cover rounded-full border-4 border-gray-200 shadow-md"
            />
          </div>

          {/* Details about the lawyer */}
          <div className="mt-4 text-center space-y-1">
            <p className="text-md text-gray-600"><b>Specialty:</b> {lawyer.specialty}</p>
            <p className="text-md text-gray-600"><b>Availability:</b> {lawyer.availability} slots</p>
            <p className="text-md text-gray-600"><b>Cost:</b> ₹{lawyer.cost}</p>
          </div>

          {/* Button to book an appointment */}
          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 mt-4"
            onClick={() => setSelectedLawyer(lawyer)}
          >
            Book Appointment
          </button>
        </div>
      ))}

      {/* If a lawyer is selected, show the appointment modal */}
      {selectedLawyer && (
        <AppointmentModal
          lawyer={selectedLawyer}
          onClose={() => setSelectedLawyer(null)}
        />
      )}
    </div>
  );
};

export default LawyerList;
