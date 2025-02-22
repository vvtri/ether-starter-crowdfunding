import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logo, sun } from '../assets';
import { navLinks } from '../constants/index.js';

const Icon = ({ styles, imgUrl, name, isActive, disabled, handleClick }) => {
  return (
    <div
      className={`w-[48px] h-[48px] rounded-[10px] flex justify-center items-center ${
        isActive && isActive === name && 'bg-[#2c2f32]'
      } ${!disabled && 'cursor-pointer'} ${styles}`}
      onClick={handleClick}
    >
      {!isActive ? (
        <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
      ) : (
        <img
          src={imgUrl}
          alt="fund_logo"
          className={`w-1/2 h-1/2  ${isActive !== name && 'grayscale'}`}
        />
      )}
    </div>
  );
};

export default function Sidebar() {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link to="/">
        <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} />
      </Link>

      <div class="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div class="flex flex-col justify-center items-center gap-3">
          {navLinks.map((item) => (
            <Icon
              key={item.name}
              {...item}
              isActive={isActive}
              handleClick={() => {
                if (!item.disabled) {
                  setIsActive(item.name);
                  navigate(item.link);
                }
              }}
            />
          ))}
        </div>

        <Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={sun} />
      </div>
    </div>
  );
}
