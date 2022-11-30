import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Topnav from '@site/src/components/Topnav';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className='flex justify-center items-center h-[260px] text-2xl font-bold bg-hero bg-no-repeat bg-cover'>
      Welcome to <span className=' text-blue-300 ml-2'>Aqua Platform Documentation</span>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (

    <div className='font-inter'>
      <Topnav />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </div>
  );
}
