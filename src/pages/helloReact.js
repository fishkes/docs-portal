import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
    return (
        <Layout title="Hello again" description="Hello React Page">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    fontSize: '20px',
                }}>
                <p>
                    Edited
                </p>

            </div>
        </Layout>
    );
}