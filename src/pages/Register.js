import React from 'react'
import Layout from '../components/Layout/index';
import { Formik } from "formik";
import { register } from "../authentication/utils";
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

// State imports
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userState, isLoggedIn } from '../authentication/state';

import logo from '../assets/logo.png';

// Loading
import Loading from '../components/Layout/Loading';

export default function Register() {
    const setUser = useSetRecoilState(userState);
    const [loggedIn, setLoggedIn] = useRecoilState(isLoggedIn);
    const [loading, setLoading] = React.useState(true);
    let history = useHistory();
    
    React.useEffect(() => {
        if(loggedIn) {
            setLoading(false);
            history.push('/profile');
        } else {
            setLoading(false);
        }
    }, [loggedIn, history])

    const handleSubmit = (values, { setSubmitting }) => {
        register(values).then(res => {
            if(res.success){
                toast.dark(`🐴 Registered successfully...`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });                
                setLoggedIn(true);
                setUser(res.data.user);
                setSubmitting(false);
                history.push('/profile');
            }
        }).catch(err => {
            toast.dark(`❌ ${err}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                setSubmitting(false);
        })
    };

    return (
        <>
        {loading ? <Loading /> : ( <>
            <Layout title="Register">
            <div className="py-4 flex items-center justify-center bg-gray-50">
                <div className="max-w-md w-full">
                    <div>
                    <img className="mx-auto h-12 w-auto" src={logo} alt="Logo" />
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                        Register a new account
                    </h2>
                    <p className="mt-2 text-center text-sm leading-5 text-gray-600">
                        Or <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                        login here.
                        </Link>
                    </p>
                    </div>
                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            password: "",
                        }}
                        onSubmit={handleSubmit}
                        >
                    {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
    
                       <form onSubmit={handleSubmit} className="mt-8">
                        <input type="hidden" name="remember" value="true" />
                            <div className="rounded-md shadow-sm">
                                <div>
                                <input aria-label="Name" name="name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Name" onChange={handleChange} onBlur={handleBlur} value={values.name}/>
                                </div>
                                {errors.name && touched.name && errors.name} 
                                <div>
                                <input aria-label="Email address" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address" onChange={handleChange} onBlur={handleBlur} value={values.email}/>
                                </div>
                                {errors.email && touched.email && errors.email}
                                <div className="-mt-px">
                                <input aria-label="Password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                                {errors.password && touched.password && errors.password}
                                </div>
                            </div>
            
                            <div className="mt-6">
                                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out" disabled={isSubmitting}>
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                {isSubmitting ? "Registering..." : "Register"}
                                </button>
                            </div>
                        </form>
                    )}
                    </Formik>
                    
                </div>
            </div>
            </Layout>
        </>)}
        </>
    )
}
