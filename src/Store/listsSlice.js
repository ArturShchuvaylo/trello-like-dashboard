import { createSlice } from '@reduxjs/toolkit';


const initialState = [
    { id: 1, title: "List 1", cards: [{ id: 'rvefve', title: "Card 1", lastEdited: new Date().toISOString() }] },
    { id: 2, title: "List 2", cards: [{ id: 'svrvsvr', title: "Card 2", lastEdited: new Date().toISOString() },] },
    { id: 3, title: "List 3", cards: [{ id: 'vscrbh', title: "Card 3", lastEdited: new Date().toISOString() },] },
];

export const listsSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        addList: (state) => {
            const newList = { id: Date.now(), title: 'name of the list', cards: [] };
            state.push(newList);
        },
        deleteList: (state, action) => {
            return state.filter(list => list.id !== action.payload);
        },
        updateListTitle: (state, action) => {
            const list = state.find(list => list.id === action.payload.id);
            if (list) {
                list.title = action.payload.title;
            }
        },
        addCard: (state, action) => {
            const newCard = { id: Date.now(), title: "New Card", lastEdited: new Date().toISOString() };
            const listIndex = state.findIndex(l => l.id === action.payload);
            state[listIndex].cards = [...state[listIndex].cards, newCard];
        },
        deleteCard: (state, action) => {
            const { listId, cardId } = action.payload;
            const list = state.find((list) => list.id === listId);
            if (list) {
                list.cards = list.cards.filter((card) => card.id !== cardId);
            }
        },
        updateCardTitle: (state, action) => {
            const list = state.find(list => list.id === action.payload.listId);
            if (list) {
                const card = list.cards.find(card => card.id === action.payload.cardId);
                if (card) {
                    card.title = action.payload.title;
                }
            }
        },
        sortCards: (state, action) => {
            const list = state.find(list => list.id === action.payload.listId);
            if (list) {
                list.cards.sort((a, b) => {
                    if (action.payload.order === 'ask') {
                        return new Date(b.lastEdited) - new Date(a.lastEdited);
                    } else {
                        return new Date(a.lastEdited) - new Date(b.lastEdited);
                    }
                });
            }
        },
    },
});


export const selectLists = state => state.lists
export const { addList, deleteList, updateListTitle, addCard, deleteCard, updateCardTitle, sortCards } = listsSlice.actions;
export default listsSlice.reducer;