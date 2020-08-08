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

export const getTotalCartItems = (cartItems) => {
    return (
        cartItems.reduce((initialCount, item) => initialCount + item.quantity, 0)
    )
};
