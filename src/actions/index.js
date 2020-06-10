export const LOADING_POST_REQUEST = 'LOADING_POST_REQUEST';
export const SUCCESS_POST_REQUEST = 'SUCCESS_POST_REQUEST';

export function loadPostList() {
    return {
        type: LOADING_POST_REQUEST
    };
}