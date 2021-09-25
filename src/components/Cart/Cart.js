import React from 'react';
import "./Cart.css"

const Cart = (props) => {
   const programmerCount=props.programmerCount;
    //total salary count by reduce 
    const totalReducer = (prevTotal,currentTotal)=>prevTotal+currentTotal.salary;
    const newTotalSalary = programmerCount.reduce(totalReducer,0)

    return (
        <div className="cart-calc">
           <h5> <i className="fas fa-user-tie"></i> Programmer Added : {programmerCount.length}</h5>
           <h5><i className="fas fa-hand-holding-usd mt-3"></i> Total Salary : <i className="fas fa-dollar-sign"></i> {newTotalSalary}</h5>
        </div>
    );
};

export default Cart;