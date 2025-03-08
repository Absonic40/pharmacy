import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/HomePage.css';
import leftimg from "../Image/Home/leftimg.png";
import logo from "../Image/Home/logo.png";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleStart = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 300); // مدت زمان انیمیشن
  };

  return (
    <div className="home-container">
      <div className="form-right">
        <div className="form-login">
          <div className="form-header">
            <h1 className='header-form-1'>خوش آمدید</h1>
            <h2 className='header-form-2'>لطفا وارد شوید</h2>
          </div>
          <form>
            <div className="input-group">
              <label className='label-1'>نام کاربری را وارد کنید</label>
              <div className="input-wrapper">
                <input type="text" className='user-input' id='userName' placeholder='نام کابری' />
                <i className="fas fa-user-alt input-icon"></i>
              </div>
            </div>
            <div className="input-group">
              <label className='label-2'>رمز عبور را وارد کنید</label>
              <div className="input-wrapper">
                <input type="password" className='pass-input' id='password' placeholder='رمز عبور' />
                <i className="fas fa-lock input-icon"></i>
              </div>
            </div>
            <img src={logo} alt="Pharmacy logo" className="logo-mobile" />
            <button 
              className={`start-button ${isAnimating ? 'animate' : ''}`} 
              type="button" 
              onClick={handleStart}
            >
              ورود
            </button>
          </form>
        </div>
      </div>
      
      <div className="logo-left">
        <img src={leftimg} alt="Pharmacy logo" className="left-logo" />
      </div>
    </div>
  );
};

export default HomePage;

