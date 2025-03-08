import React, { useState } from 'react';
import Modal from '../Components/Modal';
import Nav from '../Components/Nav';

const AddUser: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [code] = useState('123456'); // کد اشتراک ثابت برای نمایش

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='flex flex-col items-center w-full h-[100dvb]'>
      <Nav />
      <h1 className="text-black mt-14 text-[26px] font-bold font-['Yekan Bakh']">لطفا اطلاعات مشتری را وارد کنید.</h1>
      <form className='w-full mt-1 max-w-[400px]'>
        <label htmlFor="" className="text-black mt-[60px] text-right text-[18px] font-bold font-['Yekan Bakh']">نام و نام خانوادگی بیمار را وارد کنید.</label>
        <div className="relative">
          <input
            type="text"
            placeholder="مثال: مهدی رضایی"
            className="h-[39px] mr-8 pl-[40px] pr-[45px] py-0.5 bg-[#91fff0] rounded-xl shadow-[10px_14px_24px_0px_rgba(5,151,132,0.30)] justify-start items-center gap-2.5 inline-flex overflow-hidden w-[350px]"
          />
          <svg
            className="absolute right-10 top-1/2 transform -translate-y-1/2"
            style={{ width: '35', height: '35', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }}
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M843.282963 870.115556c-8.438519-140.515556-104.296296-257.422222-233.908148-297.14963C687.881481 536.272593 742.4 456.533333 742.4 364.088889c0-127.241481-103.158519-230.4-230.4-230.4S281.6 236.847407 281.6 364.088889c0 92.444444 54.518519 172.183704 133.12 208.877037-129.611852 39.727407-225.46963 156.634074-233.908148 297.14963-0.663704 10.903704 7.964444 20.195556 18.962963 20.195556l0 0c9.955556 0 18.299259-7.774815 18.962963-17.73037C227.745185 718.506667 355.65037 596.385185 512 596.385185s284.254815 122.121481 293.357037 276.195556c0.568889 9.955556 8.912593 17.73037 18.962963 17.73037C835.318519 890.311111 843.946667 881.019259 843.282963 870.115556zM319.525926 364.088889c0-106.287407 86.186667-192.474074 192.474074-192.474074s192.474074 86.186667 192.474074 192.474074c0 106.287407-86.186667 192.474074-192.474074 192.474074S319.525926 470.376296 319.525926 364.088889z" stroke="currentColor" strokeWidth="30" />
          </svg>
        </div>
        
        <label htmlFor="" className="mt-6 text-black text-[18px] text-right font-bold font-['Yekan Bakh']">شماره تلفن بیمار را وارد کنید.</label>
        <div className="relative">
          <input
            type="tel"
            placeholder="09129990022"
            className="h-[39px] mr-8 pl-[190px] pr-[45px] py-0.5 bg-[#91fff0] rounded-xl shadow-[10px_14px_24px_0px_rgba(5,151,132,0.30)] justify-start items-center gap-2.5 inline-flex overflow-hidden w-[350px]"
          />
          <svg
            width="35"
            height="35"
            viewBox="0 0 45 45"
            fill="none"
            className="absolute right-10 top-1/2 transform -translate-y-1/2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2102_618)">
              <path d="M35.4 38.325C34.6875 38.9813 33.75 39.3375 32.7937 39.375C30.1875 39.375 24.6938 37.7813 15.9375 29.1C7.2 20.4188 5.68125 14.8688 5.625 12.3563C5.625 11.4001 6.01873 10.4813 6.65623 9.7688L9.75002 6.69378C10.1063 6.31878 10.5375 6.0375 11.025 5.85C11.5313 5.6625 12.0375 5.60628 12.5625 5.64378C13.0688 5.68128 13.5563 5.85003 14.0063 6.11253C14.4563 6.37503 14.8312 6.73128 15.1125 7.16253L17.625 10.725C17.8687 11.1375 18.0375 11.6063 18.075 12.075C18.075 12.5625 18 13.0313 17.8125 13.4813L16.0312 16.7062C15.9187 16.95 15.8625 17.2313 15.8625 17.5126C15.8625 17.7938 15.9187 18.0563 16.0312 18.3188C17.1562 20.5875 18.6938 22.6312 20.5875 24.3187C22.2938 26.2125 24.3188 27.75 26.6063 28.8563C26.85 28.9688 27.15 29.025 27.4313 29.025C27.6938 29.025 27.9937 28.9688 28.2375 28.8563L31.4813 27.1875C31.9125 26.9813 32.4 26.8875 32.8687 26.925C33.3562 26.9437 33.825 27.0938 34.2188 27.3563L37.8 29.8875C38.2313 30.1688 38.6063 30.5438 38.8688 30.9938C39.1125 31.4438 39.3 31.9312 39.3375 32.4375C39.3938 32.9437 39.3375 33.4687 39.1312 33.9562C38.925 34.4437 38.6438 34.875 38.2688 35.2312L35.4 38.325Z" stroke="currentColor" strokeWidth="3" strokeMiterlimit="3000"/>
            </g>
            <defs>
              <clipPath id="clip0_2102_618">
                <rect width="45" height="45" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>

        <label className="text-black text-right mt-6 text-[18px] font-bold font-['Yekan Bakh']" htmlFor="">آدرس بیمار را وارد کنید.</label>
        <div className="relative">
          <textarea
            placeholder="قم، شهرک قدس، خیابان ولیعصر شرقی"
            className="h-[76px] mr-8 w-[350px] p-2.5 pr-16 resize-none bg-[#91fff0] rounded-[10px] shadow-[10px_14px_24px_0px_rgba(5,151,132,0.30)] justify-end items-center gap-2.5 inline-flex overflow-hidden"
          />
          <svg
            width="35"
            height="36"
            viewBox="0 0 45 46"
            fill="none"
            className="absolute right-10 top-1/2 transform -translate-y-1/2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2102_637)">
              <path d="M22.5 21.125C26.6438 21.125 30 17.7688 30 13.625C30 9.48125 26.6438 6.125 22.5 6.125C18.3562 6.125 15 9.48125 15 13.625C15 17.7688 18.3562 21.125 22.5 21.125Z" stroke="black" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round"/>
              <path d="M22.5 21.125V32.375" stroke="black" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round"/>
              <path d="M31.875 26.1499C36.3938 27.4812 39.375 29.7874 39.375 32.3749C39.375 36.5187 31.8375 39.8749 22.5 39.8749C13.1625 39.8749 5.625 36.5187 5.625 32.3749C5.625 29.7687 8.60627 27.4812 13.1438 26.1499" stroke="black" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round"/>
            </g>
            <defs>
              <clipPath id="clip0_2102_637">
                <rect width="45" height="45" fill="white" transform="translate(0 0.5)"/>
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="flex justify-center mt-6">
          <input
            value={"ایجاد کد اشتراک"}
            type="button"
            onClick={handleOpenModal}
            className='w-[190px] h-12 px-4 text-[#02564b] text-[20px] font-semibold font-["Yekan Bakh"] bg-[#91fff0] rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]'
          />
        </div>
      </form>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} code={code} />
    </div>
  );
};

export default AddUser; 