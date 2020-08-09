import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import {auth} from '../../utlis/firebase';

import {ReactComponent as Logo} from '../../assets/icons/crown.svg';
import CartIcon from '../cart-icon';
import CartDropdown from '../cart-dropdown';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import './header.scss';


const Header = ({ currentUser,  cartHidden}) => {
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
                <CartIcon/>
            </div>
            {
                !cartHidden
                ? <CartDropdown />
                : null
            }
        </div>
    )
;}

// state will be the root reducer
// create structured selector will automatically pass root level state to all selectors 
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);