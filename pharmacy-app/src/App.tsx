import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import DashboardPage from './Pages/DashboardPage';
import PatientRegistrationPage from './Pages/AddUser';
import PrescriptionPage from './Pages/PrescriptionPage';
import Layout from './Components/Layout';

// کامپوننت اصلی اپلیکیشن
const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        {/* تعریف مسیرهای مختلف اپلیکیشن */}
        <Routes>
          {/* مسیر صفحه اصلی */}
          <Route path="/" element={<HomePage />} />
          
          {/* مسیر داشبورد با استفاده از کامپوننت Layout */}
          <Route 
            path="/dashboard" 
            element={
              <Layout>
                <DashboardPage />
              </Layout>
            } 
          />
          
          {/* مسیر ثبت بیمار جدید */}
          <Route 
            path="/patient/register" 
            element={
              <Layout>
                <PatientRegistrationPage />
              </Layout>
            } 
          />
          
          {/* مسیر ثبت نسخه جدید */}
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