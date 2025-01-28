import React from 'react';

const Header = () => (
  <header className="relative w-full h-[628px] bg-[#FFB30E]">
    <nav className="flex justify-between items-center p-4">
      <div className="text-[31.11px] font-bold leading-[37.33px] tracking-[-0.025em]">
        <span className="font-[Source Sans Pro]">Food</span>
        <span className="font-[Source Sans Pro]">Wagen</span>
      </div>
      <ul className="flex space-x-4">
         <li><a href="/add-food" className="hover:text-gray-400">Add Food</a></li>
      </ul>
    </nav>
    <div className="absolute top-[132px] left-[220px] w-[856px] h-auto flex gap-8">
      <div className="flex flex-col gap-8">
        <h3 className="text-5xl font-bold">Are You Starving ?</h3>
        <button
          className="w-[150px] h-[42px] px-6 py-3 flex items-center justify-center gap-2 rounded-tl-[14px] bg-gradient-to-r from-[#FFBA26] to-[#FF9A0E] shadow-lg"
          style={{
            boxShadow: '0px 20px 40px 0px #FFAE004A, 0px 5px 10px 0px #FFAE0042',
          }}
        >
          Order
        </button>
      </div>
      <div className="relative w-[497.14px] h-[497.14px]">
        <img src="/image.png" alt="Food" className="absolute top-[-3.21px] left-[102.51px] w-full h-full object-cover" />
        <div className="absolute w-[539px] h-[540px] top-11 left-[600px] bg-[#C4C4C4B2] rounded-full blur-[81.62px]"></div>
        <div className="absolute w-[611px] h-[612px] left-[592px] bg-[#C4C4C4B2] rounded-full blur-[81.62px]"></div>
      </div>
    </div>
  </header>
);

export default Header;