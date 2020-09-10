import React, { useEffect } from 'react'
import Nav from '../Nav';
import { checkToken, fetchToken } from '../../authentication/utils';
import * as serverConfig from '../../authentication/server-config';
import { Redirect } from 'react-router-dom';

import { Helmet as Head } from 'react-helmet-async';

// Loading Screen
import Loading from './Loading';

// State imports
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userState, isLoggedIn } from '../../authentication/state';

export default function Layout({title, auth=false, authFallback="/login", children}) {
    const setUserData = useSetRecoilState(userState);
    const [loggedIn, setLoggedIn] = useRecoilState(isLoggedIn);
    const [loading, setLoading] = React.useState(auth);

    useEffect(() => {
        // console.log(loggedIn);
        if(checkToken()){
            setLoggedIn(true);
            setLoading(false);
            const token = fetchToken();
            fetch(serverConfig.serverURL + serverConfig.routes.fetchUser, {
                method: "GET",
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token.token}`
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
            })
            .then(res => res.json())
            .then(res => {
                setUserData(res.user);
            });
        } else {
            setLoading(false);
        }
       
    }, [auth, authFallback, loggedIn, setLoggedIn, setUserData])
    return (
        <>
            {loading ? <Loading /> : (
                <>
                {/* Fallback Redirect */}
                {auth && !loggedIn ? <Redirect to={authFallback} /> : (<>
                
                    <Head>
                        <title>{title} | NightKit</title>
                    </Head>
                    <div>
                        <Nav />
                        <div className="container flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">  {/* container my-6 */}
                            {children}
                        </div>
                    </div>
                    
                </>) }
    
            </>
            )}
        </>
    )
}
