import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';


function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className='flex justify-center items-center h-[260px] text-2xl font-bold bg-hero bg-no-repeat bg-cover'>
            Welcome to <span className=' text-blue-300 ml-2'>Aqua Platform Documentation</span>
        </header>
    );
}

export default function Home() {
    return (
        <nav className="top-nav flex justify-between items-center h-16 bg-dark-primary fixed top-0 left-0 w-full px-6">
            <img src="/img/aqua-docs-logo.png" />
            <a className=' bg-gray-900 px-4 py-2 hover:bg-gray-800 hover:text-blue-300 hover:no-underline' href="https://support.aquasec.com/support/tickets/new">Open Support Ticket</a>
        </nav>
    );
}
