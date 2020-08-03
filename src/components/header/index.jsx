import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {auth} from '../../utlis/firebase';

import {ReactComponent as Logo} from '../../assets/icons/crown.svg';

import './header.scss';


const Header = ({ currentUser }) => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {
                    currentUser
                    ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    : (
                        <Link className='option' to='/signin'>SIGN IN</Link>
                    )
                }
            </div>
        </div>
    )
;}

// state will be the root reducer
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);