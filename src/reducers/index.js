import { SUCCESS_POST_REQUEST } from '../actions';

const initialState = {
    postList: []
};

export default function postApp(state = initialState, action) {
    switch (action.type) {
        case SUCCESS_POST_REQUEST:
            return {
                ...state,
                postList: action.postList
            };
        default:
            return state;
    }
}