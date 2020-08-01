import React, {Component} from 'react';
import FormInput from '../form-input';
import CustomButton from '../custom-button';

import {auth, createUserProfile} from '../../utlis/firebase';

import './sign-up.scss';

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        
        const {email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert('Passwords doesnt match!!!!');
            return;
        }

        try {

            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfile(user);

            this.state = {
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }

        } catch (error) {
            console.log('error signing up user..', error);
        }
    }

    handleChange = async event => {
        const { name, value } = event.target;

        this.setState({ [name]: value});

    }

    render() {
        
        const {displayName, email, password, confirmPassword} = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
    
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                        <FormInput 
                        type="text" 
                        name="displayName" 
                        value={displayName} 
                        handleChange={this.handleChange} 
                        label='Display name'
                        required/>
    
                        <FormInput 
                        type="email" 
                        name="email" 
                        value={email} 
                        handleChange={this.handleChange} 
                        label='Email'
                        autoComplete='username'
                        required/>
    
                        <FormInput 
                        type="password" 
                        name="password" 
                        value={password} 
                        handleChange={this.handleChange} 
                        label='Password'
                        autoComplete="new-password"
                        required/>
    
                        <FormInput 
                        type="password" 
                        name="confirmPassword" 
                        value={confirmPassword} 
                        handleChange={this.handleChange} 
                        label='Confirm Password'
                        autoComplete="new-password"
                        required/>

                        <CustomButton type='submit'>Sign Up</CustomButton>
                    </form>
            </div>
        );
    }
};

export default SignUp;