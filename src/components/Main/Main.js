import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Programmer from '../Programmer/Programmer';

const Main = () => {
    //useState for programmers 
    const [programmers,setProgrammers]=useState([])

    //useState for programmer count in cart
    const [programmerCount,setProgrammerCount]=useState([])

    //useEffect for programmers data load
    useEffect(()=>{
        fetch("./Programmers.json")
        .then(res=>res.json())
        .then(data=>setProgrammers(data))
    },[])

    //onClick addToCartHandler 
    const addToCartHandler = (programmer)=>{
        // console.log("clicked");
        const newProgrammerCount=[...programmerCount,programmer]
        setProgrammerCount(newProgrammerCount);
    }
    return (
        <div className="mt-5">
            <p className="text-center fs-4"><i>Get Better Experience, Have a Relax</i></p>
            <div className="container">
                <div className="programmers_info row">
                    <div className="col-sm-8 border-end border-success">

                    <div className="card-group">
                        {
                            programmers.map(programmer=><Programmer
                                 programmer={programmer} 
                                 key={programmer.id}  
                                 addToCartHandler={addToCartHandler}
                                 >

                                 </Programmer>)
                        }
                    </div>

                    </div>

                    <div className="programmers_cart col-sm-4 mt-3">
                        <Cart programmerCount={programmerCount}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;