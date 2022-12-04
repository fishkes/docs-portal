import React from 'react';
import Topnav from '@site/src/components/Topnav';
import HomepageHeader from '@site/src/components/HomepageHeader'
import Categories from '@site/src/components/Categories'

export default function Home() {
  return (

    <div className='font-inter'>
      <Topnav />
      <HomepageHeader />
      <main>
        <Categories />
      </main>
    </div>
  );
}