import React from 'react';

const Cart = (props) => {
    return (
        <div>
           <h5> <i className="fas fa-user-tie"></i> Programmer Added : {props.programmerCount.length}</h5>
        </div>
    );
};

export default Cart;