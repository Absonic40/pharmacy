import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import DashboardPage from './Pages/DashboardPage';
import PatientRegistrationPage from './Pages/AddUser';
import PrescriptionPage from './Pages/PrescriptionPage';
import Layout from './Components/Layout';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/dashboard" 
            element={
              <Layout>
                <DashboardPage />
              </Layout>
            } 
          />
          <Route 
            path="/patient/register" 
            element={
              <Layout>
                <PatientRegistrationPage />
              </Layout>
            } 
          />
          <Route 
            path="/prescription/new" 
            element={
              <Layout>
                <PrescriptionPage />
              </Layout>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;