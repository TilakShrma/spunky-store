import {createSelector} from 'reselect';

// cart selector
const selectCart = state => state.cart;

// Creating memoized cart items selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((initCount, cartItem) => initCount + cartItem.quantity, 0)
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((initPrice, cartItem) => initPrice + (cartItem.quantity * cartItem.price), 0)
);
