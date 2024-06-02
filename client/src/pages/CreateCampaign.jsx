import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { money } from '../assets';
import { navLinks } from '../constants/index.js';
import CustomButton from '../components/CustomButton';
import FormField from '../components/FormField';
import { useStateContext } from '../contexts';
import { ethers } from 'ethers';
import { checkIfImage } from '../utils/index.js';

export default function CreateCampaign() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: '',
  });
  const { createCampaign } = useStateContext();

  const handleFormChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exist) => {
      if (exist) {
        setIsLoading(true);
        try {
          await createCampaign({
            ...form,
            target: ethers.utils.parseUnits(form.target, 'ether'),
          });
        } catch (error) {
          console.log('error', error);
        }
        setIsLoading(false);
      } else {
        alert('Provide valid image URl');
        setForm({ ...form, image: '' });
      }
    });
  };

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center  flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && 'Loader...'}

      <div class="flex p-[16px] justify-center items-center sm:min-w-[380px] bg-[#3a3a43] rounded-[10px] ">
        <h1 className="font-epilogue font-bold sm:text-[24px] text-white text-[18px] leading-[38px] ">
          Start a campaign
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div class="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Your name *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormChange('name', e)}
          />
          <FormField
            labelName="Title *"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormChange('title', e)}
          />
        </div>

        <FormField
          labelName="Story *"
          placeholder="Write your story"
          isTextarea
          value={form.description}
          handleChange={(e) => handleFormChange('description', e)}
        />

        <div class="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
          <img
            src={money}
            alt="money"
            className="w-[40px] h-[40px] object-contain"
          />
          <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">
            You will get 100% of the raised amount
          </h4>
        </div>

        <div class="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Goal *"
            placeholder="ETH 0.50"
            inputType="number"
            value={form.target}
            handleChange={(e) => handleFormChange('target', e)}
          />
          <FormField
            labelName="End date *"
            placeholder="End date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormChange('deadline', e)}
          />

          <FormField
            labelName="Campaign image *"
            placeholder="Place image URL of your campaign"
            inputType="url"
            value={form.image}
            handleChange={(e) => handleFormChange('image', e)}
          />
        </div>

        <div class="flex justify-center items-center mt-[10px]">
          <CustomButton
            btnType="submit"
            title="Submit new campaign"
            styles="bg-[#1dc071]"
          ></CustomButton>
        </div>
      </form>
    </div>
  );
}
