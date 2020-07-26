import React, {Component} from 'react';
import FormInput from '../form-input';
import CustomButton from '../custom-button';

import {signInWithGoogle} from '../../utlis/firebase';

import './sign-in.scss'

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = event => {
        const {target: {value, name}} = event;
        this.setState({ [name] : value});
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: ''});
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email" 
                    name="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    label='email'
                    required
                    autoComplete='username'/>

                    <FormInput 
                    type="password" 
                    name="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange} 
                    label='password'
                    required
                    autoComplete="current-password"/>
                    
                    <div className='nav-buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;
