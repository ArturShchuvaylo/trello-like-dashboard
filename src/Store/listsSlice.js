import { createSlice } from '@reduxjs/toolkit';


const initialState = [
    { id: 1, title: "Text name of list...", cards: [{ id: 'rvefvefv', title: "Text name of cards", lastEdited: new Date().toISOString() }] },
    { id: 2, title: "Text name of list...", cards: [{ id: 'svrvsvrv', title: "Text name of cards", lastEdited: new Date().toISOString() },] },
    { id: 3, title: "Text name of list...", cards: [{ id: 'vscrbhfv', title: "Text name of cards", lastEdited: new Date().toISOString() },] },
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
        // dropAddCard: (state, action) => {
        //     console.log('work');
        //     console.log(action.payload.draggedCard);
        //     const listIndex = state.findIndex(l => l.id === action.payload.list);
        //     state[listIndex].cards = [...state[listIndex].cards, action.payload.draggedCard];
        // },
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
export const { addList, deleteList, updateListTitle, addCard, dropAddCard, deleteCard, updateCardTitle, sortCards } = listsSlice.actions;
export default listsSlice.reducer;