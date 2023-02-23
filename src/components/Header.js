import React from 'react';


const Header = (props) => {
    return (
        <div>
         <h1> Store </h1>
            <div className="input-group mb-3">
                <input value={props.searchInput}  onChange={(event) => props.setSearchInput(event.target.value)} type="text" className="form-control" placeholder="enter product"
                       aria-label="Recipient's username" aria-describedby="button-addon2"/>

            </div>
            <button>
            <i className="fas fa-cart-plus"> </i>
            </button>

        </div>
    );
};

export default Header;