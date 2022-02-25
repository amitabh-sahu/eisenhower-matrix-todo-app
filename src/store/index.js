import { createStore } from 'redux';
import { ADD_TODO, intial_state, UPDATE_TODO } from '../constants';

const saveToLocalStorage = (store) => {
    try {
        const stringifiedStore = JSON.stringify(store);
        window.localStorage.setItem('store', stringifiedStore);
    } catch (e) {
        console.log(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const stringifiedStore = window.localStorage.getItem('store');
        if (stringifiedStore === null) return intial_state;
        return JSON.parse(stringifiedStore);
    } catch (e) {
        console.log(e);
        return intial_state;
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_TODO:
            return {
                ...state,
                [action.target]: action.data,
            };
        case ADD_TODO:
            return {
                ...state,
                [action.target]: [...state[action.target], action.data],
            };
        default:
            return state;
    }
};

const store = createStore(reducer, loadFromLocalStorage());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;