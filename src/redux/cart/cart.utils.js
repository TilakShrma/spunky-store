export const addItemToCart = (cartItems, itemToAdd) => {
    const isExistingItem = cartItems.find(cartItem => 
        cartItem.id === itemToAdd.id
    );

    if(isExistingItem) {
        // using map so that it returns a new object and we do need to
        // return a new object for rendering 
        return cartItems.map(cartItem => (
            cartItem.id === itemToAdd.id
            ?   {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        ))
    }

    // if item is not in cart assign a base quantity 1
    return [...cartItems, {...itemToAdd, quantity: 1}];
};

export const clearItemFromCart = (cartItems, itemToClear) => (
    cartItems.filter(cartItem => cartItem.id !== itemToClear.id)
);

export const removeItemFromCart = (cartItems, itemToRemove) => {
    const isExisting = cartItems.find(cartItem => cartItem.id === itemToRemove.id);

    if (isExisting && itemToRemove.quantity === 1) {
        return clearItemFromCart(cartItems, itemToRemove);
    }

    return cartItems.map(cartItem => (
        cartItem.id === itemToRemove.id)
        ? { ...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    );
};
