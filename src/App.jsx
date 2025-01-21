import React from 'react';
import LawyerList from './components/LawyerList';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <h1 className="text-center text-3xl font-bold">Lawyer Appointment Management</h1>
      </header>
      <main className="container mx-auto p-6">
        <LawyerList />
      </main>
    </div>
  );
};

export default App;
