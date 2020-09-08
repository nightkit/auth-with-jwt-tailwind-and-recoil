import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom';

import { logout } from '../authentication/utils';
import { toast } from 'react-toastify';

// State imports
import { useSetRecoilState } from 'recoil';
import { isLoggedIn } from '../authentication/state'

export default function Logout() {
    const setLoggedIn = useSetRecoilState(isLoggedIn);
    useEffect(() => {
        logout();
        setLoggedIn(false);
        toast.error(`🐱 Logged out...`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });             
    }, [setLoggedIn])
    return (
        <Redirect to="/login" />
    )
}
