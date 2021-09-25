import React from 'react';
import "./Programmer.css"

const Programmer = (props) => {
    const programmer=props.programmer;
    const {name,work,age,salary,destination}=programmer;
    return (
        <div className="mt-2">
                <div className="card m-2 p-2 programmer-info">
                    <img src={programmer.img} className="card-img-top rounded" alt="..."/>
                    <div className ="card-body">
                    <h5 className ="card-title"> {name}</h5>
                    <p className ="card-text ms-5 fst-italic">{work}</p>
                    <p className ="card-text"><span className="info-title">Age</span>: {age}</p>
                    <p className ="card-text"><span className="info-title">Salary</span>: <i className="fas fa-comment-dollar"></i> {salary}</p>
                    <p className ="card-text"><span className="info-title">Country</span>: {destination}</p>
                    </div>
                    <button onClick={()=>props.addToCartHandler(programmer)} type="button" className="btn btn-secondary w-75 ms-auto mb-2"><i className="fas fa-cart-plus"></i> add to cart</button>
                    <div className ="font-icon text-center text-dark">
                    <a href="/"><i className="fab fa-facebook fs-6"></i></a>
                    <a href="/"> <i className="fab fa-linkedin fs-6 mx-4"></i></a>
                    <a href="/"> <i className="fab fa-instagram fs-6"></i></a>
                    <a href="/"><i className="fab fa-twitter fs-6 mx-4"></i></a>

                    </div>
                </div>
        </div>
    );
};

export default Programmer;