import React from 'react';
import Layout from '../components/Layout/index';
import { Link } from 'react-router-dom';

export default function SecuredPage() {
    return (
        <Layout title="Secured Page" auth={true}>
            <div className="bg-indigo-600 px-12 py-12 text-white">
                <div className="max-w-screen-xl mx-auto py-10 lg:py-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
                    You just visited a secured route that is only visible after login.
                    <br />
                    <span>If you are logged out, you won't be able to see any protected routes.</span>
                    </h2>
                    
                </div>
                <Link to="/logout">
                    <button className="px-5 py-3 border border-transparent text-base text-indigo-600 leading-6 font-medium rounded-md text-white bg-white hover:bg-white focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                        Logout maybe?
                    </button>
                </Link>
            </div>
        </Layout>
    )
}
