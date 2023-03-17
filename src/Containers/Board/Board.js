import React, { useState } from "react";
import List from "../List";

import './Board.css';

const Board = () => {
    return (
        <div className="board">
            <h1 className="title-board">My board</h1>
            <button className="btn-board">Add List</button>
            <div className="container-lists">
                <List />
                <List />
            </div>
        </div>
    );
}
export default Board;