import React, { useEffect } from 'react'
import Nav from '../Nav';
import { checkToken, fetchToken } from '../../authentication/utils';
import * as serverConfig from '../../authentication/server-config';

import { Redirect } from 'react-router-dom';
import { Helmet as Head } from 'react-helmet-async';

// State imports
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userState, isLoggedIn } from '../../authentication/state';

export default function Layout({title, auth=false, authFallback="/login", children}) {
    const setUserData = useSetRecoilState(userState);
    const [loggedIn, setLoggedIn] = useRecoilState(isLoggedIn);
    const [mounted, setMount] = React.useState(false);

    useEffect(() => {
        setMount(true);
        console.log(loggedIn);
        if(checkToken()){
            setLoggedIn(true);
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
        }
       
    }, [auth, authFallback, loggedIn, setLoggedIn, setUserData])
    return (
        <>
            {/* Fallback Redirect */}
            {mounted && auth && !loggedIn ? <Redirect to={authFallback} /> : null }


            <Head>
                <title>{title} | NightKit</title>
            </Head>
            <div>
                <Nav />
                <div className="container flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">  {/* container my-6 */}
                    {children}
                </div>
            </div>
        </>
    )
}
