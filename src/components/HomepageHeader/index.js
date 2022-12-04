import React from 'react';
import Combobox from '../Combobox';


export default function HomepageHeader() {
  return (
    <header className='flex flex-col justify-center items-center h-[263px] bg-hero bg-no-repeat bg-cover mt-16 text-white relative'>
      <div className='text-2xl font-bold '>
        Welcome to <span className=' text-blue-300'>Aqua Platform Documentation</span>
      </div>
      <input className='bg-white text-dark-primary w-[690px] h-10 py-1 px-4 rounded-md mt-4 font-medium text-base focus:ring-0 focus:outline-none' placeholder='Search...' />
      <div className=' absolute left-6 top-6 z-10'>
        <Combobox />

      </div>
    </header>
  );
}