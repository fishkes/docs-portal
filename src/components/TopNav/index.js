import React from 'react';


export default function Home() {
    return (
        <nav className="top-nav flex justify-between items-center h-16 bg-white fixed top-0 left-0 w-full px-6">
            <a href="#">
                <img src="/img/aqua-docs-logo.png" />

            </a>
            <a className='border border-blue-primary px-2 py-1 text-blue-primary hover:text-blue-800 hover:border-blue-800 hover:no-underline text-sm font-bold rounded' href="https://support.aquasec.com/support/tickets/new" target="_blank">Open Support Ticket</a>
        </nav>
    );
}
