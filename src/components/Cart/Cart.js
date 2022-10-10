import React from 'react';

const Cart = ({cart, handleRemoveItem}) => {
    let message;
    if(cart.length === 0){
        message = <p>No item Added In Cat</p>
    }
    else{
        message = <p>Thanks For Buying</p>
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Order quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                key={tshirt._id}> 
                {tshirt.name}
                <button onClick={() =>handleRemoveItem(tshirt)}>x</button>

                </p>)
            }
            {
                message
            }
        </div>
    );
};

export default Cart;