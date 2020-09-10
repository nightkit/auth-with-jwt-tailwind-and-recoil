import React from 'react';
import Layout from '../components/Layout/index';

export default function About() {
    return (
        <Layout title="About">
            <div className="bg-transparent px-12 py-12">
                <div className="max-w-screen-xl py-10 lg:py-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-indigo-600 sm:text-4xl sm:leading-10">
                    Hi there, read the documentation.
                    </h2>
                    
                </div>
                <a href="https://github.com/nightkit/auth-with-jwt-tailwind-and-recoil" className="px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                    Checkout the Github README
                </a>
            </div>
        </Layout>
    )
}
