import React from 'react';
import CartProgrammer from '../CartProgrammer/CartProgrammer';
import "./Cart.css"

const Cart = (props) => {
    const programmerCount = props.programmerCount;
    //total salary count by reduce 
    const totalReducer = (prevTotal, currentTotal) => prevTotal + currentTotal.salary;
    const newTotalSalary = programmerCount.reduce(totalReducer, 0)

    return (
        <div>
            <div className="cart-calc">
                <h5> <i className="fas fa-user-tie"></i> Programmer Added : {programmerCount.length}</h5>
                <h5><i className="fas fa-hand-holding-usd mt-3"></i> Total Salary : <i className="fas fa-dollar-sign"></i> {newTotalSalary}</h5>
            </div>
            <br />
            <div className="cart-programmer">
                <h5 className="fst-italic">Programmers you Added({programmerCount.length})  <i class="fas fa-user-alt"></i> </h5><hr />
            {
                   programmerCount.map(programmer=> <CartProgrammer 
                    programmer={programmer}
                    key={programmer.id}
                    ></CartProgrammer>
     
                     )
               }
            </div>
        </div>
    );
};

export default Cart;