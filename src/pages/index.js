import React from 'react';
import TopNav from '@site/src/components/TopNav';
import HomepageHeader from '@site/src/components/HomepageHeader'
import Categories from '@site/src/components/Categories'

export default function Home() {
  return (
    <div className='font-inter'>
      <TopNav />
      <HomepageHeader />
      <main>
        <Categories />
      </main>
    </div>
  );
}
