import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import reducer from './reducers/index';
import App from './containers/app';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducer);

render(<Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById("content"));