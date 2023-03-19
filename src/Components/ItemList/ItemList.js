import React from "react";
import './ItemList.css';

const ItemList = ({
    lastEdited,
    title,
    cardId,
    deleteCardFromList,
    onUpdateTitle,
    handleCardDragStart,
    handleCardDragEnd }
) => {
    const getTimeDiff = (timestamp) => {
        const diffMs = new Date() - new Date(timestamp);
        const diffMins = Math.round(diffMs / (1000 * 60));
        if (diffMins < 60) {
            return `${diffMins} minutes ago`;
        } else if (diffMins < 60 * 24) {
            const diffHours = Math.floor(diffMins / 60);
            return `${diffHours} ${diffHours === 1 ? "hour" : "hours"} ago`;
        } else {
            const diffDays = Math.floor(diffMins / (60 * 24));
            return `${diffDays} ${diffDays === 1 ? "day" : "days"} ago`;
        }
    }
    return (
        <>
            <div
                draggable
                onDragStart={handleCardDragStart}
                onDragEnd={handleCardDragEnd}
                className="card" >
                <input type="text" onChange={(event) => onUpdateTitle(event.target.value)} value={title} />
                <div className="footer-card">
                    <div className="card-timestamp">{getTimeDiff(lastEdited)}</div>
                    <button onClick={deleteCardFromList}>X</button>
                </div >
            </div>
        </>
    );
}

export default ItemList;