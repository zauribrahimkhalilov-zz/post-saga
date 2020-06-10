import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOADING_POST_REQUEST, SUCCESS_POST_REQUEST } from '../actions';

export function* fetchPostList() {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');
    const data = yield response.json();
    yield put({ type: SUCCESS_POST_REQUEST, postList: data });
}

export function* loadPostList() {
    yield takeEvery(LOADING_POST_REQUEST, fetchPostList);
}

export default function* rootSaga() {
    yield all([loadPostList()]);
}