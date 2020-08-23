import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishKey = 
    'pk_test_51HJCqgJjYJJbazFXjgbO6LXI6WPWb2N5hHHPxbzrpZbeJewYVDthlmqHoO1sOID9fAN5KUKpYuVWR6g2HWNSSD8i00xaDBFAi9';

    // Later token can be passed to backend for completing payment 
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    
    return (
        <StripeCheckout 
            label='Pay Now'
            name='Spunky Store Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishKey}
        />
    );
};

export default StripeCheckoutButton;