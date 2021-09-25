import React from 'react';
import "./Programmer.css"

const Programmer = (props) => {
    const programmer=props.programmer;
    return (
        <div className="mt-2">
                <div className="card m-2 p-2 programmer-info">
                    <img src={programmer.img} className="card-img-top rounded" alt="..."/>
                    <div className ="card-body">
                    <h5 className ="card-title"> {programmer.name}</h5>
                    <p className ="card-text ms-5 fst-italic">{programmer.work}</p>
                    <p className ="card-text"><span className="info-title">Age</span>: {programmer.age}</p>
                    <p className ="card-text"><span className="info-title">Salary</span>: {programmer.salary}</p>
                    <p className ="card-text"><span className="info-title">Country</span>: {programmer.destination}</p>
                    </div>
                    <button type="button" class="btn btn-secondary w-75 ms-auto mb-2"><i class="fas fa-cart-plus"></i> add to cart</button>
                    <div className ="font-icon text-center text-dark">
                    <a href="/"><i class="fab fa-facebook fs-6"></i></a>
                    <a href="/"> <i class="fab fa-linkedin fs-6 mx-4"></i></a>
                    <a href="/"> <i class="fab fa-instagram fs-6"></i></a>
                    <a href="/"><i class="fab fa-twitter fs-6 mx-4"></i></a>

                    </div>
                </div>
        </div>
    );
};

export default Programmer;