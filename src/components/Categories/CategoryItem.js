import React from 'react';
import Link from '@docusaurus/Link';

export default ({ title, subtitle, icon }) => (
    <Link className='rounded-[10px] bg-white shadow-lg h-45 flex flex-col items-center justify-center font-semibold text-blue-dark hover:text-blue-dark hover:no-underline'
        to="/docs/saas/getting started/coming-soon">
        <img src={`/img/${icon}.png`} />
        <div className='flex flex-col text-center mt-4'>
            <span>{title}</span>
            <span>{subtitle}</span>

        </div>
    </Link>
)