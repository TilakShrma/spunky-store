import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {auth} from '../../utlis/firebase';

import {ReactComponent as Logo} from '../../assets/icons/crown.svg';

import CartIcon from '../cart-icon';
import CartDropdown from '../cart-dropdown';

import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';


const Header = ({ currentUser,  cartHidden}) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/contact'>
                    CONTACT
                </OptionLink>
                {
                    currentUser
                    ? <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                    : (
                        <OptionLink to='/signin'>SIGN IN</OptionLink>
                    )
                }
                <CartIcon/>
            </OptionsContainer>
            {
                !cartHidden
                ? <CartDropdown />
                : null
            }
        </HeaderContainer>
    );
};

// state will be the root reducer
// create structured selector will automatically pass root level state to all selectors 
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);