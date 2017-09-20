import { ACTIONS } from '../actions/actionTypes';

const INITIAL_STATE = {
    todo: '',
    list: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case ACTIONS.INPUT_CHANGED:
        return {...state, todo: action.payload};
    case ACTIONS.ADD_TODO:
        return {...state, list: [...state.list, action.payload]};
    default:
        return state;
    }
};
