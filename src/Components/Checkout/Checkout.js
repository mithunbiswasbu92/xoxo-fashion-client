import React from 'react';
import { useParams } from 'react-router';

const Checkout = () => {
    const {checkoutid} = useParams()
    console.log(checkoutid)
    return (
        <div>
            <h1>You can show your orders </h1>
        </div>
    );
};

export default Checkout;