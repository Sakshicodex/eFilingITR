import React from 'react';
import AppRoutes from './routes';
import Navbar from './widgets/layout/navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
