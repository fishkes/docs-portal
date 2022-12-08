import React from 'react';
import { DocSearch } from '@docsearch/react';
import Combobox from '../Combobox';


export default function HomepageHeader() {
  return (
    <header className='flex flex-col justify-center items-center h-[263px] bg-hero bg-no-repeat bg-cover mt-16 text-white relative'>
      <div className='text-2xl font-bold '>
        Welcome to <span className=' text-blue-300'>Aqua Platform Documentation</span>
      </div>
      <div className='mt-3'>

        <DocSearch
          appId="YN1Z4L0NG9"
          indexName="aqua-test"
          apiKey="7aa3cb124e2b876a3a82f5ec2741cc21"
        />
      </div>
      <div className=' absolute left-6 top-6 z-10'>
        <Combobox />

      </div>
    </header>
  );
}