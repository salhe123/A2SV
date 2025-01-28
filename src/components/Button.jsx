import React from 'react';

const Button = ({ children, onClick }) => (
  <button
    className="w-[150px] h-[42px] px-[24px] py-[12px] flex items-center justify-center gap-[10px] rounded-tl-[14px] bg-gradient-to-r from-[#FFBA26] to-[#FF9A0E] shadow-lg"
    style={{
      boxShadow: '0px 20px 40px 0px #FFAE004A, 0px 5px 10px 0px #FFAE0042',
      opacity: 0,
      animationTimingFunction: 'ease-out',
      animationDuration: '300ms',
    }}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;