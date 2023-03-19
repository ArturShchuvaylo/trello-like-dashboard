import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLists } from "../../Store/listsSlice";
import List from "../List";

import {
    addList,
    deleteList,
    updateListTitle,
    addCard,
} from "../../Store/listsSlice";

import './Board.css';

const Board = () => {

    let lists = useSelector(selectLists);
    const dispatch = useDispatch();

    const clickAddList = () => {
        dispatch(addList())
    }
    const clickRemove = (id) => {
        dispatch(deleteList(id))
    }
    const changListTitle = (id, title) => {
        dispatch(updateListTitle({ id, title }))
    }
    const clickAddCard = (id) => {
        dispatch(addCard(id))
    }




    return (
        <div className="board">
            <h1 className="title-board">My board</h1>
            <button onClick={clickAddList} className="btn-board">Add List</button>
            <div className="container-lists">
                {
                    lists.map(elem => {
                        return <List
                            key={elem.id}
                            title={elem.title}
                            card={elem.cards}
                            listId={elem.id}
                            changListTitle={(title) => changListTitle(elem.id, title)}
                            clickRemove={() => clickRemove(elem.id)}
                            clickAddCard={clickAddCard}
                        />
                    })
                }
            </div>
        </div>
    );
}
export default Board;