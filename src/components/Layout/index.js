import React from 'react'
import Nav from '../Nav';
import { Helmet as Head } from 'react-helmet-async';

export default function Layout(props) {
    return (
        <>
            <Head>
                <title>{props.title} | NightKit</title>
            </Head>
            <div>
                <Nav />
                <div className="container my-6">
                    {props.children}
                </div>
            </div>
        </>
    )
}
