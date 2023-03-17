import React from "react";

import './ItemList.css';

const ItemList = () => {
    return (
        <>
            <div className="card" >
                <input type="text" value='text' />
                <div className="footer-card">
                    <div className="card-timestamp">20 minuts ago</div>
                    <button>X</button>
                </div >
            </div>
        </>

    );
}

export default ItemList;