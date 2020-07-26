import React from 'react';
import SignIn from '../sign-in';
import Register from '../register';

import './sign-in-and-sign-up.scss';

const SignInAndSignOut = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <Register />

        </div>
    )
};

export default SignInAndSignOut;
