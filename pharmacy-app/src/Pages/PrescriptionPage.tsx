import React from 'react';
import aboutBg from '../Image/about/about-bg.png';
import logo from '../Image/Home/logo.png'; // مسیر تصویر لوگو

const PrescriptionPage: React.FC = () => {
  const imageSrc = logo; // مسیر تصویر را اینجا قرار دهید

  return (
    <div
      className="min-h-screen bg-no-repeat bg-cover bg-center overflow-y-auto"
      style={{
        background: `linear-gradient(101.78deg, #059784 0.01%, #0CF9DA 117.98%), url(${aboutBg})`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
      }}
    >
      <p className="text-lg md:text-xl  lg:text-2xl">درباره ما</p>
      <div className='box-info text-center w-[70%] md:w-[60%] xl2:w-[70%] flex flex-col md:flex-row h-auto mx-auto md:mx-0 md:mr-[240px] xl3:mr-[280px] my-8 border-[3px] border-solid border-[#91FFF1] rounded-lg p-4 md:p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-md overflow-auto'>
        <div className='box-info-right w-full md:w-1/3 lg:w-2/5 mb-4 mt-5 md:mb-0'>
          <img src={imageSrc || undefined} alt="توضیحات تصویر" className="w-full p-3 h-auto rounded-lg sm:w-48 sm:mx-auto sm:my-1 max-w-[200px] mx-auto" />
          <p className="text-sm font-bold md:text-base p-3 mt-20 lg:text-lg">لورم ایپسوم متن ساختگی</p>
        </div>
        <div className='box-info-left w-full md:w-2/3 lg:w-3/5'>
          <p className="text-sm md:text-base p-5 md:p-7 text-justify lg:text-lg">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionPage;