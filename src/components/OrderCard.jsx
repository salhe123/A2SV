import React from 'react';

const OrderCard = () => (
  <div className="w-[856px] h-auto flex flex-col gap-0 rounded-tl-[16px] bg-white p-0 shadow-lg"
    style={{
      boxShadow: '0px 20px 40px 0px #FFAE004A, 0px 5px 10px 0px #FFAE0042',
    }}
  >
    <div className="w-full h-auto flex flex-col gap-2 p-6">
      <div className="w-full h-[86px] flex flex-col gap-2 p-[24px_0_0_0]">
        <h2 className="text-xl font-bold">Place Your Order</h2>
        <p className="text-sm text-gray-600">Fill out the details below to complete your order.</p>
      </div>
      <hr className="w-full border-t border-gray-300" />
      <div className="w-full h-auto flex items-center gap-4 mt-4">
        <input
          type="text"
          placeholder="Enter your details"
          className="flex-1 px-4 py-2 border border-gray-300 rounded"
        />
        <button className="w-[150px] h-[42px] px-6 py-3 flex items-center justify-center gap-2 rounded-tl-[14px] bg-gradient-to-r from-[#FFBA26] to-[#FF9A0E] shadow-lg"
          style={{
            boxShadow: '0px 20px 40px 0px #FFAE004A, 0px 5px 10px 0px #FFAE0042',
          }}
        >
          Submit
        </button>
      </div>
    </div>
  </div>
);

export default OrderCard;