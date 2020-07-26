import React, {Component} from 'react';
import FormInput from '../form-input';
import CustomButton from '../custom-button';

import './register.scss';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    render() {
        return (
            <div className='register'>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
    
                <form onSubmit={this.handleSubmit}>
                        <FormInput 
                        type="text" 
                        name="name" 
                        value={this.state.name} 
                        handleChange={this.handleChange} 
                        label='Display name'
                        required/>
    
                        <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label='email'
                        required/>
    
                        <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        label='password'
                        required/>
    
                        <CustomButton type='submit'>Sign Up</CustomButton>
                    </form>
            </div>
        );
    }
};

export default Register;