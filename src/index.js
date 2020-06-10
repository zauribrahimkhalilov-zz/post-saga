import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { loadPostList } from './actions';
import postApp from './reducers';
import App from './App';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(postApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

store.dispatch(loadPostList());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
