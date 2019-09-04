import { SIGN_IN, SIGN_OUT } from '../actions/types';

// if I want to initialize the state with an obj having a prop = null then we initialize an obj and 
// assign it to the state
// and the capital name means DON'T try to change this variable no matter what
const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true, userId: action.payload };
        case SIGN_OUT:
            return { ...state, isSignedIn: false, userId: null };
        default:
            return state;
    }
};