import React from "react";

import ItemList from "../../Components/ItemList";

import './List.css';

const List = () => {
    return (
        <>
            <div className="list">
                <div className="list-header">
                    <div>          <input type="text" /></div>
                    <button>X</button>
                </div>
                <div className="card-list" >
                    <ItemList />
                </div>
                <div className="list-footer">
                    <div className="left-footer"> <button>Add Card</button></ div>
                    <div className="right-footer" >
                        <button >Sort by Date Ascending</button>
                        <button >Sort by Date Descending</button>
                    </div >
                </div>
            </div>
        </>
    );
}

export default List;