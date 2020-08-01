import React from 'react';
import SignIn from '../sign-in';
import SignUp from '../sign-up';

import './sign-in-and-sign-up.scss';

const SignInAndSignOut = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />

        </div>
    )
};

export default SignInAndSignOut;
