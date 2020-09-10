import React from 'react';
import Layout from '../components/Layout/index';
import { Link } from 'react-router-dom';

export default function UnsecuredPage() {
    return (
        <Layout title="Unsecured Page">
            <div className="bg-transparent px-12 py-12 border-8 border-indigo-500">
                <div className="max-w-screen-xl mx-auto py-10 lg:py-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    You just visited an unsecured route that everyone is able to see.
                    <br />
                    <span className="text-indigo-600">If you are logged in, you might see all the protected routes as well.</span>
                    </h2>
                    
                </div>
                <Link to="/login">
                    <button className="px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                        Login maybe?
                    </button>
                </Link>
            </div>

        </Layout>
    )
}
