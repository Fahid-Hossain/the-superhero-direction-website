import React from 'react';
import "./CartProgrammer.css"
const CartProgrammer = (props) => {
    const { img, name } = props.programmer;
    return (
       <li><img src={img} alt="" />{name}</li>
    );
};

export default CartProgrammer;