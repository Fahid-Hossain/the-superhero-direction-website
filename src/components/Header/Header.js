import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <h1 className="navbar-brand fs-2" href="/">Programmers Zone</h1>
                <div>
                    <h5 className="text-secondary me-3">Total Budget perYear: 120 Million</h5>
                </div>
                </div>
            </nav>
            <br /><br />
        </div>
    );
};

export default Header;