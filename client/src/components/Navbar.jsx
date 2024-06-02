import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logo, sun, menu, search, thirdweb } from '../assets';
import { navLinks } from '../constants/index.js';
import CustomButton from './CustomButton';

export default function Navbar() {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const address = '0x';

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between mb-[35px] gap-6">
      <div class="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
        <input
          type="text"
          className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none"
          placeholder="Search for campaigns"
        />

        <div class="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
          <img
            src={search}
            alt="search"
            className="w-15px h-[15px] object-contain"
          />
        </div>
      </div>

      <div class="sm:flex hidden flex-grow justify-end gap-4">
        <CustomButton
          btnType="button"
          title={address ? 'Create a campaign' : 'Connect'}
          styles={address ? 'bg-[#1dc071]' : 'bg-[#8d6dfd]'}
          handleClick={() => {
            if (address) navigate('create-campaign');
            else 'connect()';
          }}
        />

        <Link to="/profile">
          <div class="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img src={thirdweb} className="w-[60%] h-[60%] object-contain" />
          </div>
        </Link>
      </div>

      <div class="sm:hidden flex justify-between items-center relative">
        <div class="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <img src={thirdweb} className="w-[60%] h-[60%] object-contain" />
        </div>

        <img
          src={menu}
          className="w-[34px] h-[34px] object-contain cursor-pointer"
          alt="menu"
          onClick={() => setToggleDrawer((prev) => !prev)}
        />

        <div
          className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${
            !toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'
          } transition-all duration-700`}
        >
          <ul className="mb-4">
            {navLinks.map((item) => (
              <li
                key={item.name}
                className={`flex p-4 ${
                  isActive === item.name && 'bg-[#3ảa43]'
                }`}
                onClick={() => {
                  setIsActive(item.name);
                  setToggleDrawer(false);
                  navigate(item.link);
                }}
              >
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  className={`w-[24px] h-[24px] object-contain ${
                    isActive === item.name ? 'grayscale-0' : 'grayscale'
                  }`}
                />
                <p
                  className={`ml-[20px] font-epilogue font-semibold text-[14px] ${
                    isActive === item.name ? 'text-[#1dc071]' : 'text-[#808191]'
                  }`}
                >
                  {item.name}
                </p>
              </li>
            ))}
          </ul>

          <div class="flex mx-4">
            <CustomButton
              btnType="button"
              title={address ? 'Create a campaign' : 'Connect'}
              styles={address ? 'bg-[#1dc071]' : 'bg-[#8d6dfd]'}
              handleClick={() => {
                if (address) navigate('create-campaign');
                else 'connect()';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
