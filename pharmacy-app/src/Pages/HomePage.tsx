import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import '../Styles/HomePage.css';
import leftimg from "../Image/Home/leftimg.png";
import logo from "../Image/Home/logo.png";

//تعریف تایپ
interface LoginData {
  userName: string;
  password: string;
}

//کامپونت اصلی
const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false); // کنترل وضعیت انیمیشن
  const [formData, setFormData] = useState<LoginData>({
    userName: '',
    password: ''
  });
// برای انحام عملایت ورود
  const loginMutation = useMutation({
    mutationFn: async (data: LoginData) => {
      // شبیه‌سازی تأخیر برای نمایش حالت loading
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { data: { token: 'fake-token' } };
    },
    // برای شبیه‌سازی درخواست به سرور
    onSuccess: () => {
      setIsAnimating(true);
      localStorage.setItem('token', 'fake-token');
      setTimeout(() => {
        navigate('/dashboard');
      }, 300);
    },
    // برای شبیه‌سازی خطا
    onError: (error) => {
      console.error('Login error:', error);
      setIsAnimating(false);
    }
  });

  //برای مدیرت تغییرات ورودی
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  //برای مدیریت رویداد ارسال فرم
  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate(formData);
  };

  return (
    <div className="home-container">
      <div className="form-right">
        <div className="form-login">
          <div className="form-header">
            <h1 className='header-form-1'>خوش آمدید</h1>
            <h2 className='header-form-2'>لطفا وارد شوید</h2>
          </div>
          <form onSubmit={handleStart}>
            <div className="input-group">
              <label className='label-1'>نام کاربری را وارد کنید</label>
              <div className="input-wrapper">
                <input 
                  type="text" 
                  className='user-input' 
                  id='userName' 
                  placeholder='نام کاربری'
                  value={formData.userName}
                  onChange={handleInputChange}
                  required
                />
                <i className="input-icon fa-user-alt fas"></i>
              </div>
            </div>
            <div className="input-group">
              <label className='label-2'>رمز عبور را وارد کنید</label>
              <div className="input-wrapper">
                <input 
                  type="password" 
                  className='pass-input' 
                  id='password' 
                  placeholder='رمز عبور'
                  value={formData.password} 
                  onChange={handleInputChange} 
                  required
                />
                <i className="input-icon fa-lock fas"></i>
              </div>
            </div>
            <img src={logo} alt="Pharmacy logo" className="logo-mobile" />
            <button 
              className={`start-button ${isAnimating ? 'animate' : ''}`}
              type="submit"
              disabled={loginMutation.isPending}
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

