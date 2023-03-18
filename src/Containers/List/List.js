import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemList from "../../Components/ItemList";

import { selectLists } from "../../Store/listsSlice";
import {
    deleteCard,
    updateCardTitle,
    sortCards,
} from "../../Store/listsSlice";


import './List.css';

const List = ({
    title,
    card,
    clickRemove,
    changListTitle,
    listId,
    clickAddCard,
}) => {
    const dispatch = useDispatch();

    const handleChangeTitle = (event) => {
        changListTitle(event.target.value);
    }
    const handleUpdateCardTitle = (cardId, title) => {
        dispatch(updateCardTitle({ listId, cardId, title }));
    };
    const handleSortCards = (order) => {
        dispatch(sortCards({ listId, order }));
    };
    const handleDeleteCardFromList = (cardId) => {

        dispatch(deleteCard({ listId, cardId }));

    };






    return (
        <>
            <div className="list">
                <div className="list-header">
                    <input type="text" onChange={handleChangeTitle} value={title} />
                    <button onClick={clickRemove}>X</button>
                </div>
                <div className="card-list" >
                    {

                        card.map(elem => {
                            return <ItemList
                                key={elem.id}
                                cardId={elem.id}
                                listId={listId}
                                title={elem.title}
                                lastEdited={elem.lastEdited}
                                onUpdateTitle={(title) => handleUpdateCardTitle(elem.id, title)}
                                deleteCardFromList={() => handleDeleteCardFromList(elem.id)}

                            />
                        })
                    }
                </div>
                <div className="list-footer">
                    <div className="left-footer">
                        <button onClick={clickAddCard}>Add Card</button>
                    </ div>
                    <div className="right-footer" >
                        <button onClick={() => handleSortCards('ask')}>Sort by Date Ascending</button>
                        <button onClick={() => handleSortCards('desk')}>Sort by Date Descending</button>
                    </div >
                </div>
            </div>
        </>
    );
}

export default List;